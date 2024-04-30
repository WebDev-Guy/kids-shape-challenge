import { createConfetti } from './confetti.js';
import { GAME_SETTINGS } from './settings.js';

export function initEvents(canvas, game) {
    canvas.addEventListener('click', (e) => handleCanvasClick(e, canvas, game));
}

function handleCanvasClick(e, canvas, game) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    let hit = false;

    game.shapes = game.shapes.filter(ball => {
        if (ball.hitTest(x, y)) {
            game.updateScore(ball.special ? GAME_SETTINGS.SCORING.bonusScore : GAME_SETTINGS.SCORING.baseScore);
            const newConfetti = createConfetti(ball.x, ball.y, game.ctx, 100, ball.special);
            game.confetti.push(...newConfetti);
            hit = true;

            return false;
        }
        
        return true;
    });

    if (!hit) {
        game.updateScore(GAME_SETTINGS.SCORING.penalty);
    }

    // Spawn new shapes if needed to maintain count
    while (game.shapes.length < GAME_SETTINGS.SHAPES.maxNumberOnCanvas) {
        var ball = game.spawnShape(game.canvas, GAME_SETTINGS);
        game.shapes.push(ball);
    }
}
