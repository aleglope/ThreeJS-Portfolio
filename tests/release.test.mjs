import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join, resolve, sep } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { designProjects, projectDetails, videoShowcase, designCategories } from "../src/constants/design.js";

const root = fileURLToPath(new URL("../", import.meta.url));
const publicRoot = join(root, "public");
const readJson = (path) => JSON.parse(readFileSync(join(root, path), "utf8"));
const originalDesign = readJson("tests/fixtures/original-design-inventory.json");
const locales = { es: readJson("src/locales/es.json"), en: readJson("src/locales/en.json") };

function publicAsset(reference) {
  assert.ok(reference.startsWith("/") && !reference.startsWith("//"), reference);
  const pathname = decodeURIComponent(reference.split(/[?#]/)[0]);
  const path = resolve(publicRoot, "." + pathname);
  assert.ok(path.startsWith(publicRoot + sep), "Asset outside public: " + reference);
  assert.ok(statSync(path).isFile(), "Asset is not a file: " + reference);
  assert.ok(statSync(path).size > 0, "Empty asset: " + reference);
  return path;
}

function sourceFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? sourceFiles(path) : /\.(jsx?|css)$/.test(path) ? [path] : [];
  });
}

function leaves(value, prefix = "") {
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([key, item]) => leaves(item, prefix + "." + key));
  }
  const optionalMetadata = /^projectDetailsData\.[^.]+\.(client|duration)$/.test(prefix);
  assert.ok(typeof value === "string" && (optionalMetadata || value.trim()), "Empty translation: " + prefix);
  return [prefix];
}

test("literal media, model and texture references resolve to nonempty files", () => {
  const failures = [];
  for (const file of sourceFiles(join(root, "src"))) {
    const source = readFileSync(file, "utf8");
    for (const match of source.matchAll(/(["'`])(\/(?:media|assets|models|textures)\/[^"'`\n]+)\1/g)) {
      const reference = match[2];
      if (reference.includes("${") || !extname(reference)) continue;
      try { publicAsset(reference); } catch (error) { failures.push(file + ": " + reference + " — " + error.message); }
    }
  }
  assert.deepEqual(failures, []);
});

test("Design keeps the original categories, project routes, videos and gallery assets", () => {
  const actual = {
    categories: designCategories,
    projects: designProjects.map(({slug, category, image, videoUrl}) => ({slug, category, image, videoUrl})),
    showcase: videoShowcase.map(({id, videoUrl, thumbnail}) => ({id, videoUrl, thumbnail})),
    details: Object.fromEntries(Object.entries(projectDetails).map(([slug, project]) => [slug, {
      videos: project.videos.map(({id, videoUrl, thumbnail}) => ({id, videoUrl, thumbnail})),
      galleries: Object.fromEntries(Object.entries(project.imageGallery || {}).map(([key, images]) => [key, images.map(({image}) => image)])),
    }])),
  };
  assert.deepEqual(JSON.parse(JSON.stringify(actual)), originalDesign.inventory);
  for (const locale of Object.values(locales)) {
    for (const { id } of videoShowcase) assert.ok(locale.videoShowcaseData[id]?.title?.trim(), `Missing original video title: ${id}`);
  }
});

test("withdrawn portfolio media is not shipped in public", () => {
  assert.equal(existsSync(join(publicRoot, "media/portfolio")), false);
});

test("design detail routes have data and translated content", () => {
  const slugs = designProjects.filter((project) => project.hasDetailPage).map((project) => project.slug);
  assert.equal(new Set(slugs).size, slugs.length);
  for (const slug of slugs) {
    assert.ok(projectDetails[slug], "Missing detail data: " + slug);
    for (const locale of Object.values(locales)) {
      assert.ok(locale.designProjectsData[slug]?.title?.trim(), slug);
      assert.ok(locale.projectDetailsData[slug]?.title?.trim(), slug);
    }
  }
});

test("portfolio and case content keeps Spanish and English keys and required text in sync", () => {
  for (const section of ["recentWork", "designProjectsData", "projectDetailsData", "videoShowcaseData"]) {
    assert.deepEqual(leaves(locales.es[section], section).sort(), leaves(locales.en[section], section).sort(), section);
  }
});
