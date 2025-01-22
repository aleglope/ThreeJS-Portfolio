from js import document, window
import js
from pyodide.ffi import create_proxy


class GameController:
    """
    Core game controller handling game state and browser integration.
    Implements the game loop pattern with DOM event handling through Pyodide proxies.
    """

    def __init__(self, modules):
        # Dynamic module injection for better testability and dependency management
        Canvas2D = modules["canvas2d"]["Canvas2D"]
        Paddle = modules["paddle"]["Paddle"]
        Ball = modules["ball"]["Ball"]
        ScoreBoard = modules["score"]["ScoreBoard"]
        AIController = modules["AI"]["AIController"]
        CollisionManager = modules["collision"]["CollisionManager"]

        # Ajustar posiciones iniciales para el canvas HTML5
        self.canvas = Canvas2D()
        self.paddle_a = Paddle((-350, 0))  # Se ajustará en la clase Paddle
        self.paddle_b = Paddle((350, 0))  # Se ajustará en la clase Paddle
        self.ball = Ball()
        self.scoreboard = ScoreBoard()
        self.ai_controller = AIController(self.paddle_b, self.ball, self.scoreboard)
        self.collision_manager = CollisionManager(
            self.ball, [self.paddle_a, self.paddle_b]
        )

        # Event proxy creation for memory leak prevention
        self._keydown_proxy = create_proxy(self._handle_keydown)
        self._keyup_proxy = create_proxy(self._handle_keyup)

        # Agregar event listeners usando los proxies
        document.addEventListener("keydown", self._keydown_proxy)
        document.addEventListener("keyup", self._keyup_proxy)

        self.running = True
        self.paused = True
        self._frame_count = 0

        # Frame rate control for consistent game speed across different devices
        self.frame_rate = 1  # Ajustar el frame rate para un movimiento más suave
        self.game_over = False
        self.winner = None

    def _handle_keydown(self, event):
        """Maneja los eventos de tecla presionada"""
        if self.game_over and event.key == " ":  # Espacio para reiniciar
            self.reset_game()
            return

        if event.key == "w":
            self.paddle_a.start_moving_down()
        elif event.key == "s":
            self.paddle_a.start_moving_up()

    def _handle_keyup(self, event):
        """Maneja los eventos de tecla liberada"""
        if event.key in ["w", "s"]:
            self.paddle_a.stop_moving()

    def update(self):
        """
        Main game loop with frame-rate independent physics.
        Implements game state machine pattern for pause/play/game over states.
        """
        if not self.running or self.paused:  # Verificar si está pausado
            return

        if self.game_over:
            self.draw_game_over()
            return

        # Actualizar en cada frame para movimiento más suave
        self._frame_count += 1
        if self._frame_count % self.frame_rate != 0:
            return

        self.canvas.clear()
        self.ball.move(self.canvas)
        self.paddle_a.move(self.canvas)
        self.paddle_b.move(self.canvas)
        self.ai_controller.move_paddle()
        self.scoreboard.draw(self.canvas)

        goal = self.collision_manager.update()
        if goal:
            self.scoreboard.add_point(goal)
            self.ball.reset_position()

        if self.scoreboard.score_a >= 5 or self.scoreboard.score_b >= 5:
            self.winner = "Player A" if self.scoreboard.score_a >= 5 else "Player B"
            self.game_over = True
            return

    def draw_game_over(self):
        """Dibuja la pantalla de game over"""
        self.canvas.clear()
        # Dibujar mensaje de game over
        self.canvas.draw_text("GAME OVER", 400, 250, "white", "48px Arial")
        # Dibujar mensaje del ganador
        self.canvas.draw_text(f"{self.winner} Wins!", 400, 350, "white", "36px Arial")
        # Dibujar instrucciones
        self.canvas.draw_text(
            "Press Space to play again", 400, 450, "white", "24px Arial"
        )

    def reset_game(self):
        """Reinicia el juego cuando termina una partida o comienza una nueva"""
        self.game_over = False
        self.winner = None
        self.scoreboard.score_a = 0
        self.scoreboard.score_b = 0
        self.ball.reset_position()
        self.paddle_a.reset_position()
        self.paddle_b.reset_position()
        self.paused = False  # Asegurar que el juego no está pausado

    def stop(self):
        """
        Cleanup handler for proper event listener and proxy disposal.
        Critical for preventing memory leaks in the browser environment.
        """
        self.running = False
        # Eliminar event listeners y destruir los proxies
        document.removeEventListener("keydown", self._keydown_proxy)
        document.removeEventListener("keyup", self._keyup_proxy)
        self._keydown_proxy.destroy()
        self._keyup_proxy.destroy()


__all__ = ["GameController"]
