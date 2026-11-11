const PYODIDE_BASE = "https://cdn.jsdelivr.net/pyodide/v0.27.1/full/";
const MODULE_NAMES = ["canvas2d", "screen", "ball", "paddle", "collision", "score", "AI", "main"];
let runtimePromise;

export const loadPongRuntime = () => {
  if (!runtimePromise) {
    runtimePromise = (async () => {
      if (!window.loadPyodide) {
        await new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = `${PYODIDE_BASE}pyodide.js`;
          script.async = true;
          script.onload = resolve;
          script.onerror = () => {
            script.remove();
            reject(new Error("Could not load the Python runtime"));
          };
          document.head.append(script);
        });
      }
      return window.loadPyodide({ indexURL: PYODIDE_BASE });
    })().catch((error) => {
      runtimePromise = undefined;
      throw error;
    });
  }
  return runtimePromise;
};

export const loadPongModules = async (signal) => Object.fromEntries(
  await Promise.all(MODULE_NAMES.map(async (name) => {
    const response = await fetch(`/pong_game/${name}.py`, { signal });
    if (!response.ok) throw new Error(`Could not load the ${name} module (${response.status})`);
    return [name, await response.text()];
  })),
);

const INITIALIZE_GAME = `
import json
modules = {}
for module_name, source in json.loads(module_sources).items():
    module_globals = {"__name__": module_name}
    exec(compile(source, module_name + ".py", "exec"), module_globals)
    modules[module_name] = module_globals
del module_sources
game = modules["main"]["GameController"](modules)
game.reset_game()
`;

const STOP_GAME = `
if game is not None:
    game.stop()
    game = None
`;

// The session owns all game callbacks and Python proxies, including a pending start.
export const createPongSession = ({
  onReady,
  onError,
  isActive = () => !document.hidden,
  loadRuntime = loadPongRuntime,
  loadModules = loadPongModules,
  requestFrame = (callback) => requestAnimationFrame(callback),
  cancelFrame = (id) => cancelAnimationFrame(id),
}) => {
  const controller = new AbortController();
  let stopped = false;
  let frame = 0;
  let runtime;
  let globals;
  let update;

  const stop = () => {
    if (stopped) return;
    stopped = true;
    controller.abort();
    cancelFrame(frame);
    try {
      if (globals) runtime.runPython(STOP_GAME, { globals });
    } finally {
      update?.destroy();
      globals?.destroy();
      update = undefined;
      globals = undefined;
    }
  };

  const fail = (error) => {
    if (stopped) return;
    try {
      stop();
    } finally {
      onError(error);
    }
  };

  const tick = () => {
    if (stopped) return;
    try {
      if (isActive()) update();
      frame = requestFrame(tick);
    } catch (error) {
      fail(error);
    }
  };

  const ready = (async () => {
    try {
      const [loadedRuntime, modules] = await Promise.all([
        loadRuntime(),
        loadModules(controller.signal),
      ]);
      if (stopped) return;
      runtime = loadedRuntime;
      globals = runtime.runPython("{'game': None}");
      globals.set("module_sources", JSON.stringify(modules));
      runtime.runPython(INITIALIZE_GAME, { globals });
      update = runtime.runPython("game.update", { globals });
      onReady();
      if (!stopped) frame = requestFrame(tick);
    } catch (error) {
      fail(error);
    }
  })();

  return { ready, stop };
};
