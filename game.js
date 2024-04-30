import { GAME_SETTINGS } from './settings.js';
import { spawnShape, Shape } from './shape.js';
import { initEvents } from './events.js';
import { updateScoreDisplay, startCountdown } from './score.js';
import { randomColor, randomShape } from './utils.js';

class Game {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = GAME_SETTINGS.CANVAS.width;
        this.canvas.height = GAME_SETTINGS.CANVAS.height;
        this.shapes = [];
        this.confetti = [];
        this.score = 0;
        this.scoreElement = document.getElementById('score');
        this.timerElement = document.getElementById('time-left');
        this.timeLeft = GAME_SETTINGS.timeLeftSetting
        this.initShapes();
        initEvents(this.canvas, this);
        updateScoreDisplay(this.scoreElement, this.score);
        startCountdown(this.timerElement, this);
    }

    initShapes() {
        for (let i = 0; i < GAME_SETTINGS.SHAPES.maxNumberOnCanvas; i++) {
            this.shapes.push(spawnShape(this.canvas));
        }
    }

    createShape(){
        const x = Math.random() * (this.canvas.width - GAME_SETTINGS.SHAPES.radius * 2) + GAME_SETTINGS.SHAPES.radius;
        const y = Math.random() * (this.canvas.height - GAME_SETTINGS.SHAPES.radius * 2) + GAME_SETTINGS.SHAPES.radius;
        const dx = (Math.random() - 0.5) * GAME_SETTINGS.SHAPES.speedMultiplier;
        const dy = (Math.random() - 0.5) * GAME_SETTINGS.SHAPES.speedMultiplier;
        const color = randomColor();
        const special = Math.random() < GAME_SETTINGS.SHAPES.bonusProbability;
        const shape = randomShape();

        return new Shape(x, y, dx, dy, color, special, shape, this.canvas);
    }

    spawnShape() {
        return this.createShape(this.canvas);
    }

    updateScore(points) {
        this.score += points;
        updateScoreDisplay(this.scoreElement, this.score);
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.shapes.forEach(shape => {
            shape.update();
            shape.draw(this.ctx);
        });

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
