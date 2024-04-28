// Ball.js
class Ball {
    constructor(x, y, dx, dy, color, special, shape) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
        this.special = special;
        this.shape = shape;
        this.colorChangeSpeed = special ? 10 : 0;
        this.colorChangeCounter = 0;
    }

    draw(ctx) {
        ctx.beginPath();
        this.drawShape(ctx);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    drawShape(ctx) {
        switch (this.shape) {
            case 'circle':
                ctx.arc(this.x, this.y, GAME_SETTINGS.ballRadius, 0, Math.PI * 2);
                break;
            case 'square':
                ctx.rect(this.x - GAME_SETTINGS.ballRadius, this.y - GAME_SETTINGS.ballRadius, GAME_SETTINGS.ballRadius * 2, GAME_SETTINGS.ballRadius * 2);
                break;
            case 'triangle':
                ctx.moveTo(this.x, this.y - GAME_SETTINGS.ballRadius);
                ctx.lineTo(this.x + GAME_SETTINGS.ballRadius, this.y + GAME_SETTINGS.ballRadius);
                ctx.lineTo(this.x - GAME_SETTINGS.ballRadius, this.y + GAME_SETTINGS.ballRadius);
                ctx.closePath();
                break;
            case 'oval':
                ctx.ellipse(this.x, this.y, GAME_SETTINGS.ballRadius, GAME_SETTINGS.ballRadius * 0.6, 0, 0, Math.PI * 2);
                break;
            case 'rectangle':
                ctx.rect(this.x - GAME_SETTINGS.ballRadius, this.y - GAME_SETTINGS.ballRadius * 0.5, GAME_SETTINGS.ballRadius * 2, GAME_SETTINGS.ballRadius);
                break;
        }
    }

    update(canvas) {
        this.boundaryCheck(canvas);
        this.move();
        this.changeColorOnSpecial();
    }

    boundaryCheck(canvas) {
        if (this.x + GAME_SETTINGS.ballRadius > canvas.width || this.x - GAME_SETTINGS.ballRadius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + GAME_SETTINGS.ballRadius > canvas.height || this.y - GAME_SETTINGS.ballRadius < 0) {
            this.dy = -this.dy;
        }
    }

    move() {
        this.x += this.dx;
        this.y += this.dy;
    }

    changeColorOnSpecial() {
        if (this.special) {
            this.colorChangeCounter++;
            if (this.colorChangeCounter >= this.colorChangeSpeed) {
                this.color = randomColor();
                this.colorChangeCounter = 0;
            }
        }
    }
}

// Export the Ball class and a function to spawn a ball
export { Ball, spawnBall };

function spawnBall(canvas, settings) {
    const x = Math.random() * (canvas.width - 2 * settings.ballRadius) + settings.ballRadius;
    const y = Math.random() * (canvas.height - 2 * settings.ballRadius) + settings.ballRadius;
    const dx = (Math.random() - 0.5) * 4 * settings.speedMultiplier;
    const dy = (Math.random() - 0.5) * 4 * settings.speedMultiplier;
    const color = randomColor();
    const special = Math.random() < settings.multiplierScoreChance;
    const shape = randomShape();
    return new Ball(x, y, dx, dy, color, special, shape);
}
