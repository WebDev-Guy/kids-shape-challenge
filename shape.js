import { randomColor, randomShape } from './utils.js';
import { GAME_SETTINGS } from './settings.js';

export class Shape {
    constructor(x, y, dx, dy, color, special, shape, canvas) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
        this.special = special;
        this.shape = shape;
        this.canvas = canvas;
        this.radius = GAME_SETTINGS.SHAPES.radius;
    }

    draw(ctx) {
        ctx.beginPath();

        switch (this.shape) {
            case 'circle':
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                break;
            case 'square':
                ctx.rect(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
                break;
            case 'triangle':
                ctx.moveTo(this.x, this.y - this.radius);
                ctx.lineTo(this.x + this.radius, this.y + this.radius);
                ctx.lineTo(this.x - this.radius, this.y + this.radius);
                ctx.closePath();
                break;
            case 'oval':
                ctx.ellipse(this.x, this.y, this.radius * 1.2, this.radius * 0.6, 0, 0, Math.PI * 2);
                break;
            case 'rectangle':
                ctx.rect(this.x - this.radius, this.y - this.radius * 0.5, this.radius * 2, this.radius);
                break;
        }

        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        // Boundary checks
        if (this.x + this.radius > this.canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > this.canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        // Update position
        this.x += this.dx;
        this.y += this.dy;
    }

    hitTest(x, y) {
        // Calculate the distance from the point to the center of the ball
        const distance = Math.sqrt((this.x - x) ** 2 + (this.y - y) ** 2);
        // Check if the distance is less than the radius, which means the point is inside the ball
        return distance <= this.radius;
    }
}

export function spawnShape(canvas) {
    const x = Math.random() * (canvas.width - GAME_SETTINGS.SHAPES.radius * 2) + GAME_SETTINGS.SHAPES.radius;
    const y = Math.random() * (canvas.height - GAME_SETTINGS.SHAPES.radius * 2) + GAME_SETTINGS.SHAPES.radius;
    const dx = (Math.random() - 0.5) * GAME_SETTINGS.SHAPES.speedMultiplier;
    const dy = (Math.random() - 0.5) * GAME_SETTINGS.SHAPES.speedMultiplier;
    const color = randomColor();
    const special = Math.random() < GAME_SETTINGS.SHAPES.bonusProbability;
    const shape = randomShape();

    return new Shape(x, y, dx, dy, color, special, shape, canvas);
}
