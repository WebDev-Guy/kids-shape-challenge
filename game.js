import { Ball, spawnBall } from './ball.js';

class Game {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = GAME_SETTINGS.canvasWidth;
        this.canvas.height = GAME_SETTINGS.canvasHeight;
        this.balls = [];
        this.score = 0;
        this.timeLeft = GAME_SETTINGS.timeLeftSetting;
        this.initBalls();
        this.initEvents();
        this.updateScoreDisplay();
        this.startCountdown();
    }

    initBalls() {
        for (let i = 0; i < GAME_SETTINGS.numBalls; i++) {
            const ball = spawnBall(this.canvas, GAME_SETTINGS);
            this.balls.push(ball);
        }
    }
}

// Initialize and start the game
const game = new Game();
game.animate();
