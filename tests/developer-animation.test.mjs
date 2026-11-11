import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { AnimationMixer, Group, Object3D } from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";

// Recreate the GLB transform hierarchy without loading textures or creating WebGL.
const modelHierarchy = () => {
  const bytes = fs.readFileSync(new URL("../public/models/animations/developer.glb", import.meta.url));
  const gltf = JSON.parse(bytes.subarray(20, 20 + bytes.readUInt32LE(12)).toString());
  const nodes = gltf.nodes.map((node) => {
    const object = new Object3D();
    object.name = node.name;
    if (node.translation) object.position.fromArray(node.translation);
    if (node.rotation) object.quaternion.fromArray(node.rotation);
    if (node.scale) object.scale.fromArray(node.scale);
    return object;
  });
  gltf.nodes.forEach((node, index) => node.children?.forEach((child) => nodes[index].add(nodes[child])));
  const scene = new Group();
  gltf.scenes[gltf.scene ?? 0].nodes.forEach((index) => scene.add(nodes[index]));
  return scene;
};

const clip = (name) => {
  const bytes = fs.readFileSync(new URL(`../public/models/animations/${name}.fbx`, import.meta.url));
  return new FBXLoader().parse(bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength), "").animations[0];
};

test("all four developer animations bind to the complete GLB hierarchy", (t) => {
  const warnings = [];
  t.mock.method(console, "warn", (message) => warnings.push(message));
  for (const name of ["idle", "salute", "clapping", "victory"]) {
    const scene = modelHierarchy();
    const animation = clip(name);
    assert.equal(animation.tracks.length, 69);
    const mixer = new AnimationMixer(scene);
    mixer.clipAction(animation).play();
    mixer.update(1 / 60);
    mixer.stopAllAction();
    mixer.uncacheRoot(scene);
  }
  assert.deepEqual(warnings, []);
});

test("dropping Armature from that hierarchy reproduces the reported binding defect", (t) => {
  const scene = modelHierarchy();
  const armature = scene.getObjectByName("Armature");
  [...armature.children].forEach((child) => scene.add(child));
  armature.removeFromParent();
  const warnings = [];
  t.mock.method(console, "warn", (message) => warnings.push(message));
  const mixer = new AnimationMixer(scene);
  mixer.clipAction(clip("idle")).play();
  mixer.update(1 / 60);
  assert.equal(warnings.length, 1);
  assert.match(warnings[0], /Armature.quaternion/);
  mixer.stopAllAction();
  mixer.uncacheRoot(scene);
});
