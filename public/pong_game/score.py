class ScoreBoard:
    """Represents the scoreboard in the Pong game, displaying each player's score."""

    def __init__(self):
        """Initializes the scoreboard with default settings."""
        self.score_a = 0  # Initialize score for Player A
        self.score_b = 0  # Initialize score for Player B
        self._x = 400
        self._y = 50

    def draw(self, canvas):
        """Draws the scoreboard on the given canvas."""
        canvas.draw_text(
            f"Player A: {self.score_a}  Player B: {self.score_b}",
            self._x,
            self._y,
            "white",
            "24px Arial",
        )

    def add_point(self, player):
        """Adds a point to the specified player and updates the scoreboard display."""
        if player == "Player A":
            self.score_a += 1  # Increment score for Player A
        elif player == "Player B":
            self.score_b += 1  # Increment score for Player B
