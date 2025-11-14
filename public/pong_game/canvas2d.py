try:
    from js import document
except ImportError:
    # Fallback for non-Pyodide environments
    document = None

import math


class Canvas2D:
    def __init__(self, canvas_id="pongCanvas"):
        self.canvas_id = canvas_id
        self.canvas = None
        self.ctx = None
        self.width = 800
        self.height = 600
        self.background_gradient = None
        self._init_canvas()

    def _init_canvas(self):
        """Initialize canvas with error handling"""
        try:
            self.canvas = document.getElementById(self.canvas_id)
            if self.canvas is None:
                print(f"Warning: Canvas element '{self.canvas_id}' not found")
                return False

            self.ctx = self.canvas.getContext("2d")
            if self.ctx is None:
                print(
                    f"Warning: Could not get 2D context for "
                    f"canvas '{self.canvas_id}'"
                )
                return False

            self.width = self.canvas.width
            self.height = self.canvas.height
            # Initialize gradients after canvas is ready
            self._init_gradients()
            return True
        except Exception as e:
            print(f"Error initializing canvas: {e}")
            return False

    def ensure_canvas_ready(self):
        """Ensure canvas is ready, reinitialize if needed"""
        if self.canvas is None or self.ctx is None:
            success = self._init_canvas()
            if success and self.ctx is not None:
                # Initialize gradients only after canvas is ready
                self._init_gradients()
            return success
        return True

    def _init_gradients(self):
        """Initialize canvas gradients"""
        try:
            # Crear gradiente para el fondo
            self.background_gradient = self.ctx.createLinearGradient(
                0, 0, self.width, self.height
            )
            self.background_gradient.addColorStop(0, "#9333ea")  # purple-500
            self.background_gradient.addColorStop(0.5, "#3b82f6")  # blue-500
            self.background_gradient.addColorStop(1, "#22c55e")  # green-500
        except Exception as e:
            print(f"Error initializing gradients: {e}")
            self.background_gradient = None

    def clear(self):
        if not self.ensure_canvas_ready():
            return

        # Dibujar fondo con gradiente
        # Color de fondo semi-transparente
        self.ctx.fillStyle = "rgba(17, 24, 39, 0.8)"
        self.ctx.fillRect(0, 0, self.width, self.height)

        # Dibujar borde con gradiente
        if self.background_gradient is not None:
            self.ctx.strokeStyle = self.background_gradient
            self.ctx.lineWidth = 4
            self.ctx.strokeRect(0, 0, self.width, self.height)

    def draw_rectangle(self, x, y, width, height, color):
        if not self.ensure_canvas_ready():
            return

        try:
            # Crear gradiente para las palas
            gradient = self.ctx.createLinearGradient(
                x - width / 2, y - height / 2, x + width / 2, y + height / 2
            )
            gradient.addColorStop(0, "#9333ea")  # purple-500
            gradient.addColorStop(1, "#3b82f6")  # blue-500

            self.ctx.fillStyle = gradient
            self.ctx.fillRect(x - width / 2, y - height / 2, width, height)

            # Añadir brillo
            self.ctx.shadowColor = "#9333ea"
            self.ctx.shadowBlur = 10
            self.ctx.shadowOffsetX = 0
            self.ctx.shadowOffsetY = 0
        except Exception as e:
            print(f"Error drawing rectangle: {e}")

    def draw_circle(self, x, y, radius, color):
        if not self.ensure_canvas_ready():
            return

        try:
            # Crear gradiente para la bola
            gradient = self.ctx.createRadialGradient(x, y, 0, x, y, radius)
            gradient.addColorStop(0, "#3b82f6")  # blue-500
            gradient.addColorStop(1, "#22c55e")  # green-500

            self.ctx.beginPath()
            self.ctx.arc(x, y, radius, 0, math.pi * 2)
            self.ctx.fillStyle = gradient

            # Añadir brillo
            self.ctx.shadowColor = "#3b82f6"
            self.ctx.shadowBlur = 15
            self.ctx.shadowOffsetX = 0
            self.ctx.shadowOffsetY = 0

            self.ctx.fill()
            self.ctx.closePath()

            # Resetear sombra después de dibujar
            self.ctx.shadowBlur = 0
        except Exception as e:
            print(f"Error drawing circle: {e}")

    def draw_text(self, text, x, y, color, font="24px Arial"):
        """Dibuja texto en el canvas con alineación central"""
        if not self.ensure_canvas_ready():
            return

        try:
            self.ctx.fillStyle = color
            self.ctx.font = font
            self.ctx.textAlign = "center"
            self.ctx.textBaseline = "middle"
            self.ctx.fillText(text, x, y)
        except Exception as e:
            print(f"Error drawing text: {e}")
