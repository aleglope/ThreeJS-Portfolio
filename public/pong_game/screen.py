class GameScreen:
    """Class for the initial setup and management of the game screen."""

    def __init__(self):
        """Initializes the game screen with Canvas2D."""
        from .canvas2d import Canvas2D

        self.canvas = Canvas2D()

    def update(self):
        """Updates the game screen."""
        self.canvas.clear()

    def close(self):
        """Cleanup method."""
        pass
