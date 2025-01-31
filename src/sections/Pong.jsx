import { useEffect, useRef, useState } from "react";

function Pong() {
  // Refs for persistent cross-render state management
  const canvasRef = useRef(null);
  const pyodideRef = useRef(null);
  const gameRef = useRef(null);
  const [gameStarted, setGameStarted] = useState(false);

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

    const initPyodide = async () => {
      // Pyodide initialization with proper namespace isolation
      // Critical for preventing global scope pollution
      try {
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

  return (
    <section className="c-space my-20" id="pong">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <h2 className="text-5xl font-extrabold mb-8 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 animate-gradient">
            PONG ARCADE
          </span>
          <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-full animate-pulse"></div>
        </h2>
        <p className="text-gray-400 mb-8 text-center max-w-md">
          ¡Demuestra tus habilidades! Primer jugador en alcanzar 5 puntos gana.
          Usa las teclas W/S para mover tu pala.
        </p>

        {!gameStarted && (
          <button
            onClick={handleStartGame}
            className="px-8 py-3 mb-8 bg-gradient-to-r from-purple-500 to-blue-500 
                     text-white font-bold rounded-lg shadow-lg 
                     hover:from-purple-600 hover:to-blue-600 
                     transform hover:scale-105 transition-all
                     animate-pulse"
          >
            ¡COMENZAR JUEGO!
          </button>
        )}

        <canvas
          id="pongCanvas"
          ref={canvasRef}
          width={800}
          height={600}
          className="border-4 border-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-lg 
                     shadow-lg shadow-purple-500/20 p-[2px]"
          tabIndex="0"
        />

        <div className="mt-12 max-w-2xl text-center space-y-4">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Demostración de Integración Python-Web
          </h3>
          <p className="text-gray-400">
            Este juego de Pong es una demostración técnica de la integración
            entre Python y desarrollo web moderno. Originalmente desarrollado
            como una aplicación de escritorio en Python puro, ha sido adaptado
            para ejecutarse directamente en el navegador utilizando Pyodide.
          </p>
          <p className="text-gray-400">
            La conversión mantuvo aproximadamente el 95% del código Python
            original, requiriendo solo modificaciones mínimas para adaptarse al
            entorno web. Esta implementación demuestra:
          </p>
          <ul className="text-gray-400 list-none space-y-2">
            <li>• Ejecución de código Python nativo en el navegador</li>
            <li>• Integración fluida entre React y Python</li>
            <li>• Manejo de eventos del DOM desde Python</li>
            <li>• Renderizado en canvas HTML5 desde Python</li>
            <li>• Gestión de estado y física en tiempo real</li>
          </ul>
          <p className="text-purple-400 mt-4">
            Una muestra práctica de cómo el código Python puede ser reutilizado
            en aplicaciones web sin sacrificar la funcionalidad o rendimiento.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Pong;
