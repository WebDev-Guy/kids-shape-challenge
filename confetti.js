import { GAME_SETTINGS } from "./settings.js";

export class Confetti {
    constructor(x, y, ctx) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.size = Math.random() * 5 + 2;
        this.color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`;
        this.vx = (Math.random() - 0.5) * GAME_SETTINGS.CONFETTI.velocity;
        this.vy = (Math.random() - 0.5) * GAME_SETTINGS.CONFETTI.velocity;
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        this.ctx.fill();
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= GAME_SETTINGS.CONFETTI.alphaDecay;
        if (this.alpha < 0) this.alpha = 0;
    }

    isAlive() {
        return this.alpha > 0;
    }
}

export function createConfetti(x, y, ctx, count = 100) {
    let particles = [];
    for (let i = 0; i < count; i++) {
        particles.push(new Confetti(x, y, ctx));
    }
    return particles;
}