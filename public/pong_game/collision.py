class CollisionManager:
    """
    Manages the detection of collisions within the Pong game, specifically collisions
    between the ball and the paddles, and the ball and the walls.
    """

    def __init__(self, ball, paddles):
        """
        Initializes the CollisionManager with the ball and paddles.

        :param ball: The ball object which will be checked for collisions.
        :param paddles: A list of paddle objects to check for collisions with the ball.
        """
        self.ball = ball
        self.paddles = paddles
        self.canvas_width = 800
        self.canvas_height = 600

    def check_paddle_collision(self):
        """Replicar la lógica original de colisiones"""
        for paddle in self.paddles:
            ball_x = self.ball.xcor() - 400  # Convertir a coordenadas centradas
            paddle_x = paddle.xcor() - 400

            # Usar la misma lógica de detección que el original
            if self.ball.distance(paddle) < 50 and abs(ball_x - paddle_x) < 10:
                self.ball.bounce_x(paddle)
                return True
        return False

    def check_wall_collision(self):
        """Mantener los límites originales"""
        ball_y = self.ball.ycor() - 300  # Convertir a coordenadas centradas
        if abs(ball_y) > 290:
            self.ball.bounce_y()

    def check_goal(self):
        """Usar los límites originales para detectar goles"""
        ball_x = self.ball.xcor() - 400  # Convertir a coordenadas centradas
        if ball_x > 350:
            return "Player A"
        elif ball_x < -350:
            return "Player B"
        return None

    def update(self):
        """
        Updates and checks for all types of collisions.

        :return: A string indicating which player scored, or None if no goal occurred.
        """
        if not self.check_paddle_collision():
            return self.check_goal()
        return None
