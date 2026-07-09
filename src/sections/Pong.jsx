import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

function Pong() {
  const { t } = useTranslation();

  // Refs for persistent cross-render state management
  const canvasRef = useRef(null);
  const pyodideRef = useRef(null);
  const gameRef = useRef(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Module loading system with dependency order management
    const loadPythonFiles = async () => {
      const files = [
        "/pong_game/canvas2d.py",
        "/pong_game/screen.py",
        "/pong_game/ball.py",
        "/pong_game/paddle.py",
        "/pong_game/collision.py",
        "/pong_game/score.py",
        "/pong_game/AI.py",
        "/pong_game/main.py",
      ];

      const moduleContents = {};
      for (const file of files) {
        const response = await fetch(file);
        const content = await response.text();
        const moduleName = file.split("/").pop().replace(".py", "");
        moduleContents[moduleName] = content;
      }
      return moduleContents;
    };

    const waitForCanvas = () => {
      return new Promise((resolve) => {
        const checkCanvas = () => {
          const canvas = document.getElementById("pongCanvas");
          if (canvas) {
            resolve(canvas);
          } else {
            setTimeout(checkCanvas, 100);
          }
        };
        checkCanvas();
      });
    };

    const initPyodide = async () => {
      // Pyodide initialization with proper namespace isolation
      // Critical for preventing global scope pollution
      try {
        // Wait for canvas to be available
        await waitForCanvas();

        pyodideRef.current = await loadPyodide();

        // Crear el entorno base
        await pyodideRef.current.runPython(`
import sys
import js
from pyodide.ffi import create_proxy

class ModuleNamespace:
    pass

namespace = ModuleNamespace()
modules = {}
game = None
game_loop_proxy = None
game_started = False
        `);

        const moduleContents = await loadPythonFiles();

        // Cargar canvas2d primero
        const canvas2dContent = moduleContents["canvas2d"];
        if (canvas2dContent) {
          await pyodideRef.current.runPython(`
namespace_dict = {}
exec("""${canvas2dContent.replace(/"""/g, '\\"\\"\\"')}""", namespace_dict)
modules['canvas2d'] = namespace_dict
for name, value in namespace_dict.items():
    if not name.startswith('__'):
        setattr(namespace, name, value)
        `);
        }

        // Luego cargar el resto de módulos
        for (const [name, content] of Object.entries(moduleContents)) {
          if (name !== "canvas2d") {
            const escapedContent = content.replace(/"""/g, '\\"\\"\\"');
            await pyodideRef.current.runPython(`
namespace_dict = {}
exec("""${escapedContent}""", namespace_dict)
modules['${name}'] = namespace_dict
for name, value in namespace_dict.items():
    if not name.startswith('__'):
        setattr(namespace, name, value)
          `);
          }
        }

        // Inicializar el juego con un game loop persistente
        await pyodideRef.current.runPython(`
game = modules['main']['GameController'](modules)
game.paused = True  # Iniciar en pausa

def game_loop(timestamp):
    if game and game.running and not game.paused:
        game.update()
    js.window.requestAnimationFrame(game_loop_proxy)

game_loop_proxy = create_proxy(game_loop)
js.window.requestAnimationFrame(game_loop_proxy)
        `);

        gameRef.current = true;
      } catch (error) {
        console.error("Error inicializando Pyodide:", error);
      }
    };

    initPyodide();

    // Cleanup system for proper resource management
    return () => {
      if (pyodideRef.current && gameRef.current) {
        try {
          pyodideRef.current.runPython(`
if 'game' in globals() and game is not None:
    game.stop()
    game = None
if game_loop_proxy is not None:
    game_loop_proxy.destroy()
    game_loop_proxy = None
`);
        } catch (error) {
          console.error("Error al detener el juego:", error);
        }
      }
    };
  }, []);

  useEffect(() => {
    // Función para detectar si es un dispositivo móvil
    const checkIfMobile = () => {
      const match = window.matchMedia("(max-width: 768px)");
      setIsMobile(match.matches);
    };

    // Verificar inicialmente
    checkIfMobile();

    // Agregar listener para cambios en el tamaño de la ventana
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    mediaQuery.addListener(checkIfMobile);

    // Cleanup
    return () => mediaQuery.removeListener(checkIfMobile);
  }, []);

  const handleStartGame = () => {
    if (pyodideRef.current) {
      pyodideRef.current.runPython(`
if game:
    game.paused = False
    game.reset_game()  # Reiniciar el juego al comenzar
      `);
      setGameStarted(true);
    }
  };

  // Si es un dispositivo móvil, mostrar mensaje alternativo
  if (isMobile) {
    return (
      <section className="c-space my-20" id="pong">
        <div className="relative min-h-[300px] flex items-center justify-center flex-col text-center px-4">
          <h2 className="text-3xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 animate-gradient">
              {t("pong.arcadeTitle")}
            </span>
          </h2>
          <div className="text-gray-400 max-w-md">
            <p className="mb-4">{t("pong.mobileWarning1")}</p>
            <p>{t("pong.mobileWarning2")}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="c-space my-20" id="pong">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <h2 className="text-5xl font-extrabold mb-8 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 animate-gradient">
            {t("pong.arcadeTitle")}
          </span>
          <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-full animate-pulse"></div>
        </h2>
        <p className="text-gray-400 mb-8 text-center max-w-md">
          {t("pong.instructions")}
        </p>

        <div className="relative">
          <canvas
            id="pongCanvas"
            ref={canvasRef}
            width={800}
            height={600}
            className="border-4 border-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-lg 
                     shadow-lg shadow-purple-500/20 p-[2px]"
            tabIndex="0"
          />

          {!gameStarted && (
            <div className="absolute inset-0 bg-black bg-opacity-80 rounded-lg flex flex-col items-center justify-center p-8">
              <div className="text-gray-300 text-center space-y-4 max-w-2xl mb-8">
                <p>{t("pong.description1")}</p>
                <p>{t("pong.description2")}</p>
                <ul className="space-y-2">
                  {t("pong.features", { returnObjects: true }).map((f, i) => (
                    <li key={i}>
                      • <strong>{f.term}</strong> - {f.detail}
                    </li>
                  ))}
                </ul>
                <p className="text-purple-400 mt-4">{t("pong.description3")}</p>
              </div>
              <button
                onClick={handleStartGame}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 
                         text-white font-bold rounded-lg shadow-lg 
                         hover:from-purple-600 hover:to-blue-600 
                         transform hover:scale-105 transition-all
                         animate-pulse"
              >
                {t("pong.startButton")}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Pong;
