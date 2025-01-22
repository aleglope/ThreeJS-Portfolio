import time
import random


class Ball:
    """
    Ball physics implementation with velocity-based movement and collision response.
    Uses time-based speed adjustments for dynamic difficulty scaling.
    """

    # Physics constants - adjust these for game feel tuning
    MAX_SPEED = 3.0
    SPEED_INCREMENT = 0.3
    SPEED_REDUCTION_FACTOR = 1.5
    DEFAULT_SPEED = 0.2

    def __init__(self):
        self._x = 400
        self._y = 300
        self.radius = 10
        self.color = "white"
        self.dx = self.DEFAULT_SPEED
        self.dy = self.DEFAULT_SPEED
        self.last_collision_time = time.time()

    def draw(self, canvas):
        canvas.draw_circle(self._x, self._y, self.radius, self.color)

    def move(self, canvas):
        self._x += self.dx * 10
        self._y += self.dy * 10
        self.adjust_speed_over_time()
        self.draw(canvas)

        if self._y <= self.radius or self._y >= 600 - self.radius:
            self.bounce_y()

    def xcor(self):
        return self._x

    def ycor(self):
        return self._y

    def distance(self, paddle):
        dx = self._x - paddle.xcor()
        dy = self._y - paddle.ycor()
        return (dx * dx + dy * dy) ** 0.5

    def bounce_y(self):
        self.dy *= -1
        self.last_collision_time = time.time()

    def bounce_x(self, paddle):
        """
        Collision response with paddles includes momentum transfer
        and speed adjustments for gameplay variety.
        """
        self.dx *= -1
        self.adjust_speed_based_on_paddle(paddle)
        self.last_collision_time = time.time()

    def adjust_speed_based_on_paddle(self, paddle):
        if paddle.moving_up:
            self.dy = min(self.dy + self.SPEED_INCREMENT, self.MAX_SPEED)
        elif paddle.moving_down:
            self.dy = max(self.dy - self.SPEED_INCREMENT, -self.MAX_SPEED)

    def adjust_speed_over_time(self):
        """
        Implements dynamic difficulty adjustment through gradual speed changes.
        Prevents "dead ball" scenarios where the ball moves too slowly.
        """
        current_time = time.time()
        if current_time - self.last_collision_time > 3:
            if abs(self.dx) > self.DEFAULT_SPEED:
                self.dx -= self.dx * (self.SPEED_REDUCTION_FACTOR / self.MAX_SPEED)
                self.dx = max(min(self.dx, self.MAX_SPEED), -self.MAX_SPEED)

            if abs(self.dy) > self.DEFAULT_SPEED:
                self.dy -= self.dy * (self.SPEED_REDUCTION_FACTOR / self.MAX_SPEED)
                self.dy = max(min(self.dy, self.MAX_SPEED), -self.MAX_SPEED)

            if abs(self.dx) < self.DEFAULT_SPEED:
                self.dx = self.DEFAULT_SPEED if self.dx > 0 else -self.DEFAULT_SPEED
            if abs(self.dy) < self.DEFAULT_SPEED:
                self.dy = self.DEFAULT_SPEED if self.dy > 0 else -self.DEFAULT_SPEED

    def reset_position(self):
        self._x = 400
        self._y = 300
        speed = self.DEFAULT_SPEED
        angle = random.uniform(-0.5, 0.5)
        self.dx = speed * random.choice([-1, 1])
        self.dy = speed * angle

    def check_bounds(self):
        if self._y <= self.radius or self._y >= 600 - self.radius:
            self.bounce_y()
