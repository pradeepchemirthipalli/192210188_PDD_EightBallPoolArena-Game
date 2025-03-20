function Player() {
    this.turn;
    this.color;
    this.fouled = false;
    this.game = false;
    this.score = 0; // Add score property
    this.isComputer = false; // Flag to indicate if this is a computer player

    this.setPlayerColor = function(color) {
        this.color = color;
    }

    this.addScore = function(points) {
        this.score += points;
    }

    this.resetScore = function() {
        this.score = 0;
    }
}