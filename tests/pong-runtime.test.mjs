import assert from "node:assert/strict";
import test from "node:test";
import { createPongSession, loadPongModules, loadPongRuntime } from "../src/utils/pongRuntime.js";

const deferred = () => {
  let resolve;
  const promise = new Promise((done) => { resolve = done; });
  return { promise, resolve };
};

const fixture = ({ updateError, initializeError } = {}) => {
  const calls = { updates: 0, stops: 0, globalsDestroyed: 0, updateDestroyed: 0, ready: 0, errors: [] };
  const frames = new Map();
  let nextFrame = 0;
  const globals = { set() {}, destroy() { calls.globalsDestroyed += 1; } };
  const update = () => {
    if (updateError) throw updateError;
    calls.updates += 1;
  };
  update.destroy = () => { calls.updateDestroyed += 1; };
  const runtime = {
    runPython(code) {
      if (code === "{'game': None}") return globals;
      if (code === "game.update") return update;
      if (code.includes("game.stop()")) calls.stops += 1;
      if (code.includes("GameController") && initializeError) throw initializeError;
    },
  };
  const options = {
    onReady: () => { calls.ready += 1; },
    onError: (error) => calls.errors.push(error),
    isActive: () => true,
    loadRuntime: async () => runtime,
    loadModules: async () => ({}),
    requestFrame: (callback) => { frames.set(++nextFrame, callback); return nextFrame; },
    cancelFrame: (id) => frames.delete(id),
  };
  const advance = () => {
    const [id, callback] = frames.entries().next().value;
    frames.delete(id);
    callback();
  };
  return { calls, options, frames, advance, runtime };
};

test("cancelling a pending start aborts modules and ignores the late runtime", async () => {
  const f = fixture();
  const loading = deferred();
  let signal;
  const session = createPongSession({
    ...f.options,
    loadRuntime: () => loading.promise,
    loadModules: async (value) => { signal = value; return {}; },
  });
  session.stop();
  loading.resolve(f.runtime);
  await session.ready;
  assert.equal(signal.aborted, true);
  assert.equal(f.calls.ready, 0);
  assert.equal(f.calls.globalsDestroyed, 0);
  assert.equal(f.frames.size, 0);
  assert.deepEqual(f.calls.errors, []);
});

test("closing a running game cancels its frame and releases the Python game and proxies once", async () => {
  const f = fixture();
  const session = createPongSession(f.options);
  await session.ready;
  assert.equal(f.calls.ready, 1);
  f.advance();
  assert.equal(f.calls.updates, 1);
  const staleCallback = [...f.frames.values()][0];
  session.stop();
  session.stop();
  staleCallback();
  assert.equal(f.frames.size, 0);
  assert.equal(f.calls.updates, 1);
  assert.equal(f.calls.stops, 1);
  assert.equal(f.calls.updateDestroyed, 1);
  assert.equal(f.calls.globalsDestroyed, 1);
});

test("a frame failure releases resources and reports a retryable error", async () => {
  const error = new Error("update failed");
  const f = fixture({ updateError: error });
  const session = createPongSession(f.options);
  await session.ready;
  f.advance();
  assert.deepEqual(f.calls.errors, [error]);
  assert.equal(f.frames.size, 0);
  assert.equal(f.calls.stops, 1);
  assert.equal(f.calls.updateDestroyed, 1);
  assert.equal(f.calls.globalsDestroyed, 1);
});

test("a preparation failure cleans up a partially created namespace", async () => {
  const error = new Error("invalid game module");
  const f = fixture({ initializeError: error });
  await createPongSession(f.options).ready;
  assert.deepEqual(f.calls.errors, [error]);
  assert.equal(f.calls.ready, 0);
  assert.equal(f.calls.globalsDestroyed, 1);
  assert.equal(f.frames.size, 0);
});

test("an inactive game does not update, and resumes without creating another loop", async () => {
  const f = fixture();
  let active = false;
  const session = createPongSession({ ...f.options, isActive: () => active });
  await session.ready;
  f.advance();
  assert.equal(f.calls.updates, 0);
  active = true;
  f.advance();
  assert.equal(f.calls.updates, 1);
  assert.equal(f.frames.size, 1);
  session.stop();
});

test("module loading retains dependency order and rejects HTTP failures", async (t) => {
  const controller = new AbortController();
  const requests = [];
  const fetchMock = t.mock.method(globalThis, "fetch", async (url, options) => {
    requests.push({ url, signal: options.signal });
    return { ok: true, text: async () => `# ${url}` };
  });
  const modules = await loadPongModules(controller.signal);
  assert.equal(Object.keys(modules)[0], "canvas2d");
  assert.equal(Object.keys(modules).at(-1), "main");
  assert.equal(requests.length, 8);
  assert(requests.every(({ signal, url }) => signal === controller.signal && url.startsWith("/pong_game/")));
  fetchMock.mock.mockImplementation(async () => ({ ok: false, status: 503 }));
  await assert.rejects(loadPongModules(controller.signal), /503/);
});

test("the runtime is shared after a user request and a failed load can be retried", async (t) => {
  const previousWindow = Object.getOwnPropertyDescriptor(globalThis, "window");
  let attempts = 0;
  Object.defineProperty(globalThis, "window", { configurable: true, value: {
    loadPyodide: async () => {
      attempts += 1;
      if (attempts === 1) throw new Error("offline");
      return { ready: true };
    },
  } });
  t.after(() => {
    if (previousWindow) Object.defineProperty(globalThis, "window", previousWindow);
    else delete globalThis.window;
  });
  assert.equal(attempts, 0);
  const first = loadPongRuntime();
  assert.equal(first, loadPongRuntime());
  await assert.rejects(first, /offline/);
  const retry = loadPongRuntime();
  assert.equal(retry, loadPongRuntime());
  assert.deepEqual(await retry, { ready: true });
  assert.equal(attempts, 2);
});
