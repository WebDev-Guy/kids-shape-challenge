export function updateScoreDisplay(scoreElement, score) {
    scoreElement.textContent = `Score: ${score}`;
}

export function startCountdown(timerElement, game) {
    game.timerId = setInterval(() => {
        if (game.timeLeft > 0) {
            game.timeLeft--;
            timerElement.textContent = `Time left: ${game.timeLeft}s`;
        } else {
            endGame(game, timerElement);
        }
    }, 1000);
}

function endGame(game, timerElement) {
    clearInterval(game.timerId);
    timerElement.textContent = "Time's up!";
    alert(`Time's up! Your final score is ${game.score}`);
    // Reset game state or offer replay option here
}