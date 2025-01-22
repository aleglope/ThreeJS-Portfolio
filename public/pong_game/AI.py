class AIController:
    """
    Predictive AI system using ball trajectory calculation.
    Implements dynamic difficulty scaling based on score difference.
    """

    def __init__(self, paddle, ball, scoreboard):
        """
        Initializes the AIController with a paddle, ball, and scoreboard.

        :param paddle: The paddle object controlled by the AI.
        :param ball: The ball object that the AI will react to.
        :param scoreboard: The scoreboard object to consider the current score for adjusting AI difficulty.
        """
        self.paddle = paddle
        self.ball = ball
        self.scoreboard = scoreboard
        # Restaurar valores originales
        self.base_speed = 0.5
        self.base_anticipation = 0.5

    def move_paddle(self):
        """
        Moves the AI paddle by anticipating where the ball will be, adjusting speed and anticipation based on the score.
        """
        # Solo mover si la bola se dirige hacia la IA
        if self.ball.dx > 0:
            if self.scoreboard.score_a - self.scoreboard.score_b >= 2:
                speed = self.base_speed * 1.0
                anticipation_factor = self.base_anticipation * 4.0
            else:
                speed = self.base_speed
                anticipation_factor = self.base_anticipation

            anticipated_y = self.predict_future_y(anticipation_factor)
            current_y = self.paddle.ycor()

            # Ajustar el movimiento usando la velocidad original
            if current_y < anticipated_y:
                new_y = current_y + speed * 10  # Factor de escala para la velocidad
                self.paddle.sety(min(new_y, self.paddle.upper_bound))
            elif current_y > anticipated_y:
                new_y = current_y - speed * 10
                self.paddle.sety(max(new_y, self.paddle.lower_bound))

    def predict_future_y(self, anticipation_factor):
        """
        Trajectory prediction algorithm using linear interpolation.
        Accuracy intentionally limited for balanced gameplay.
        TODO: Consider implementing bounce prediction for advanced AI.
        """
        # Mantener la predicción original
        if self.ball.dx > 0:
            ball_x = self.ball.xcor() - 400  # Convertir a coordenadas centradas
            paddle_x = self.paddle.xcor() - 400
            ball_distance_to_paddle = paddle_x - ball_x
            time_until_collision = ball_distance_to_paddle / (self.ball.dx * 10)
            future_ball_y = (
                self.ball.ycor()
                + self.ball.dy * time_until_collision * anticipation_factor * 10
            )
            return future_ball_y
        return 300
