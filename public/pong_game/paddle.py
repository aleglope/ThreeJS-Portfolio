class Paddle:
    """Represents a paddle for the Pong game, handling its movement and boundaries."""

    def __init__(self, position):
        """Initializes the paddle with a specific position and default settings."""
        self._x = position[0] + 400  # Centrar horizontalmente (800/2)
        self._y = position[1] + 300  # Centrar verticalmente (600/2)
        self.width = 20
        self.height = 100
        self.color = "white"
        self.moving_up = False
        self.moving_down = False
        self.upper_bound = 550  # 600 - 50 (height/2)
        self.lower_bound = 50  # 0 + 50 (height/2)
        self.speed = 5  # Ajuste de velocidad para que sea más responsiva

    def draw(self, canvas):
        canvas.draw_rectangle(self._x, self._y, self.width, self.height, self.color)

    def xcor(self):
        return self._x

    def ycor(self):
        return self._y

    def sety(self, y):
        if y > self.upper_bound:
            self._y = self.upper_bound
        elif y < self.lower_bound:
            self._y = self.lower_bound
        else:
            self._y = y

    def move(self, canvas):
        if self.moving_up and self._y < self.upper_bound:
            self._y += self.speed
        elif self.moving_down and self._y > self.lower_bound:
            self._y -= self.speed
        self.draw(canvas)

    def start_moving_up(self):
        self.moving_up = True
        self.moving_down = False

    def start_moving_down(self):
        self.moving_up = False
        self.moving_down = True

    def stop_moving(self):
        self.moving_up = False
        self.moving_down = False

    def reset_position(self):
        """Reinicia la posición del paddle a su posición inicial"""
        if self.xcor() < 400:  # Paddle izquierdo
            self._x = 50  # -350 + 400
        else:  # Paddle derecho
            self._x = 750  # 350 + 400
        self._y = 300
        self.stop_moving()
