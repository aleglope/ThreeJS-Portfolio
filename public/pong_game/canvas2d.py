from js import document
import math


class Canvas2D:
    def __init__(self, canvas_id="pongCanvas"):
        self.canvas = document.getElementById(canvas_id)
        self.ctx = self.canvas.getContext("2d")
        self.width = self.canvas.width
        self.height = self.canvas.height

    def clear(self):
        self.ctx.clearRect(0, 0, self.width, self.height)

    def draw_rectangle(self, x, y, width, height, color):
        self.ctx.fillStyle = color
        self.ctx.fillRect(x - width / 2, y - height / 2, width, height)

    def draw_circle(self, x, y, radius, color):
        self.ctx.beginPath()
        self.ctx.arc(x, y, radius, 0, math.pi * 2)
        self.ctx.fillStyle = color
        self.ctx.fill()
        self.ctx.closePath()

    def draw_text(self, text, x, y, color, font="24px Arial"):
        """Dibuja texto en el canvas con alineación central"""
        self.ctx.fillStyle = color
        self.ctx.font = font
        self.ctx.textAlign = "center"
        self.ctx.textBaseline = "middle"
        self.ctx.fillText(text, x, y)
