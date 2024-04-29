// game.js
import { GAME_SETTINGS } from './settings.js';
import { spawnBall, Ball } from './ball.js';
import { initEvents } from './events.js';
import { updateScoreDisplay, startCountdown } from './score.js';
import { randomColor, randomShape } from './utils.js';

class Game {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = GAME_SETTINGS.CANVAS.width;
        this.canvas.height = GAME_SETTINGS.CANVAS.height;
        this.balls = [];
        this.confetti = [];  // Ensure this is initialized before events are attached
        this.score = 0;
        this.scoreElement = document.getElementById('score');
        this.timerElement = document.getElementById('time-left');
        this.timeLeft = GAME_SETTINGS.timeLeftSetting
        this.initBalls();
        initEvents(this.canvas, this);
        updateScoreDisplay(this.scoreElement, this.score);
        startCountdown(this.timerElement, this);
    }

    initBalls() {
        for (let i = 0; i < GAME_SETTINGS.BALLS.maxNumberOnCanvas; i++) {
            this.balls.push(spawnBall(this.canvas));
        }
    }

    createBall(){
        const x = Math.random() * (this.canvas.width - this.radius * 2) + this.radius;
        const y = Math.random() * (this.canvas.height - this.radius * 2) + this.radius;
        const dx = (Math.random() - 0.5) * GAME_SETTINGS.BALLS.speedMultiplier;
        const dy = (Math.random() - 0.5) * GAME_SETTINGS.BALLS.speedMultiplier;
        const color = randomColor(); // Assumes randomColor() is defined in utils.js or similar
        const special = Math.random() < GAME_SETTINGS.BALLS.bonusProbability; // Chance to be a special ball
        const shape = randomShape(); // Assumes randomShape() is defined in utils.js or similar

        return new Ball(x, y, dx, dy, color, special, shape, this.canvas);
    }

    spawnBall() {
        return this.createBall(this.canvas);
    }

    updateScore(points) {
        this.score += points;
        updateScoreDisplay(this.scoreElement, this.score);
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.balls.forEach(ball => {
            ball.update();  // Update ball's position
            ball.draw(this.ctx);  // Draw the ball
        });

        // Code to handle confetti animation
        for (let i = this.confetti.length - 1; i >= 0; i--) {
            if (this.confetti[i].alpha <= 0) {
                this.confetti.splice(i, 1);
            } else {
                this.confetti[i].update();
                this.confetti[i].draw(this.ctx);
            }
        }

        if (this.timeLeft > 0) {
            requestAnimationFrame(() => this.animate());
        }
    }
}

const game = new Game();
game.animate();
