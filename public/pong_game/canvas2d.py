from js import document
import math


class Canvas2D:
    def __init__(self, canvas_id="pongCanvas"):
        self.canvas = document.getElementById(canvas_id)
        self.ctx = self.canvas.getContext("2d")
        self.width = self.canvas.width
        self.height = self.canvas.height

        # Crear gradiente para el fondo
        self.background_gradient = self.ctx.createLinearGradient(
            0, 0, self.width, self.height
        )
        self.background_gradient.addColorStop(0, "#9333ea")  # purple-500
        self.background_gradient.addColorStop(0.5, "#3b82f6")  # blue-500
        self.background_gradient.addColorStop(1, "#22c55e")  # green-500

    def clear(self):
        # Dibujar fondo con gradiente
        self.ctx.fillStyle = "rgba(17, 24, 39, 0.8)"  # Color de fondo semi-transparente
        self.ctx.fillRect(0, 0, self.width, self.height)

        # Dibujar borde con gradiente
        self.ctx.strokeStyle = self.background_gradient
        self.ctx.lineWidth = 4
        self.ctx.strokeRect(0, 0, self.width, self.height)

    def draw_rectangle(self, x, y, width, height, color):
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

    def draw_circle(self, x, y, radius, color):
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

    def draw_text(self, text, x, y, color, font="24px Arial"):
        """Dibuja texto en el canvas con alineación central"""
        self.ctx.fillStyle = color
        self.ctx.font = font
        self.ctx.textAlign = "center"
        self.ctx.textBaseline = "middle"
        self.ctx.fillText(text, x, y)
