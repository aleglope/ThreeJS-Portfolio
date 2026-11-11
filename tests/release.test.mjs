import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join, resolve, sep } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { clientProjects } from "../src/constants/clientProjects.js";
import { designProjects, projectDetails } from "../src/constants/design.js";

const root = fileURLToPath(new URL("../", import.meta.url));
const publicRoot = join(root, "public");
const readJson = (path) => JSON.parse(readFileSync(join(root, path), "utf8"));
const manifest = readJson("docs/portfolio-media-manifest.json");
const transcripts = readJson("docs/media-transcripts.json");
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

test("video inventory matches shipped MP4s, posters and spoken-text alternatives", () => {
  assert.ok(manifest.length > 0);
  assert.equal(new Set(manifest.map((entry) => entry.id)).size, manifest.length, "Duplicate media IDs");
  for (const entry of manifest) {
    const video = publicAsset(entry.src);
    const poster = publicAsset(entry.poster);
    assert.equal(statSync(video).size, entry.bytes, entry.id + ": update the inventory after changing a video");
    assert.equal(readFileSync(video).toString("ascii", 4, 8), "ftyp", entry.id + ": invalid MP4 header");
    const posterHeader = readFileSync(poster);
    assert.equal(posterHeader.toString("ascii", 0, 4), "RIFF", entry.id);
    assert.equal(posterHeader.toString("ascii", 8, 12), "WEBP", entry.id);
    assert.ok(entry.width > 0 && entry.height > 0 && entry.seconds > 0, entry.id);
    if (entry.transcript) {
      const transcript = transcripts[entry.transcript.id];
      assert.ok(transcript?.text?.trim(), entry.id + ": missing spoken-text alternative");
      assert.equal(transcript.lang, entry.transcript.lang, entry.id);
    }
  }
});

test("client cases resolve covers, chapters, videos and both translations", () => {
  assert.equal(new Set(clientProjects.map((project) => project.id)).size, clientProjects.length);
  const videoIds = new Set(manifest.map((entry) => entry.id));
  for (const project of clientProjects) {
    publicAsset(project.cover.src);
    if (project.to) assert.equal(project.to, "/design/project/" + project.id);
    if (project.href) assert.equal(new URL(project.href).protocol, "https:");
    for (const language of Object.keys(locales)) {
      const translation = locales[language].clientWork.cases[project.id];
      assert.ok(translation?.title?.trim(), project.id + ": missing " + language + " title");
      assert.ok(translation?.coverAlt?.trim(), project.id + ": missing " + language + " cover description");
    }
    for (const chapter of project.chapters || []) {
      if (chapter.image) publicAsset(chapter.image.src);
    }
    for (const id of project.videoIds || []) assert.ok(videoIds.has(id), project.id + ": unknown video " + id);
  }
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
  for (const section of ["clientWork", "recentWork", "designProjectsData", "projectDetailsData"]) {
    assert.deepEqual(leaves(locales.es[section], section).sort(), leaves(locales.en[section], section).sort(), section);
  }
});
