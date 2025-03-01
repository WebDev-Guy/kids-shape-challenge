**Bouncing Shapes Game - README**

Welcome to the _Bouncing Balls Game_! This project is a simple, fun, and educational browser-based game designed primarily for children. It helps them practice color and shape recognition, improve hand–eye coordination, and get comfortable with using a mouse or trackpad.

---

## Overview

- **Game Objective**: Click on moving shapes (circles, squares, triangles, ovals, rectangles) to score points. Special shapes provide bonus points, while missing a shape costs you a few points.
- **Educational Goals**:
  - Reinforce knowledge of basic shapes
  - Familiarize players with colors
  - Improve hand–eye coordination and reaction speed
- **Tech Stack**: HTML, CSS, JavaScript (no external frameworks or libraries).

---

## Features

1. **Shapes**: Various shapes (circles, squares, triangles, ovals, and rectangles) are rendered on a full-screen canvas.  
2. **Movement**: Shapes bounce around the edges of the browser window.
3. **Scoring**:  
   - _Base Score_: Gain 1 point for clicking a regular shape  
   - _Bonus Score_: Gain 5 points for clicking a special shape (indicated by “blinking” color changes)  
   - _Penalty_: Lose 1 point if you click on an empty canvas (i.e., you miss all shapes)
4. **Countdown Timer**: You have a set amount of time (default 60 seconds) to rack up points.  
5. **Confetti**: Successfully clicking a shape triggers colorful confetti particles as a fun reward.  
6. **Leaderboard (Optional)**: A placeholder exists for a leaderboard to display high scores (you can expand on this feature as needed).  

---

## File Structure

```
.
├── Index.html        // Main entry point for the game
├── game.css          // Styles and layout
├── game.js           // Main game logic and animation loop
├── score.js          // Scoring logic and timer handling
├── events.js         // Mouse click event handling and shape removal
├── settings.js       // Central configuration for game settings
├── shape.js          // Shape class for creating and moving shapes
├── utils.js          // Helper functions: random color and shape selection
├── confetti.js       // Confetti animation on successful clicks
```

### Brief Explanation of Each File

- **Index.html**  
  Contains the base HTML structure. Loads all necessary modules (JavaScript files) and links to the CSS. Displays the canvas and scoreboard elements.

- **game.css**  
  Defines the styling for the game screen, scoreboard, and final score overlay.

- **game.js**  
  Initializes the game by creating a canvas, starting with a set of shapes, and kicking off the animation loop. It orchestrates the drawing and updating of shapes and confetti.

- **score.js**  
  Handles displaying and updating the score in real time. Also manages the countdown timer that ends the game when time runs out.

- **events.js**  
  Listens for click events on the canvas. Determines if a shape has been clicked, applies scoring logic, spawns confetti, and respawns shapes as needed.

- **settings.js**  
  Stores all game settings (e.g., canvas dimensions, shape speed, scoring amounts, time limits, etc.) in one central place.

- **shape.js**  
  Implements the `Shape` class, which is responsible for drawing various shapes on the canvas, updating their positions, bouncing them off edges, and handling color changes for special shapes.

- **utils.js**  
  Supplies helper functions to generate random colors and random shape types.

- **confetti.js**  
  Implements a small `Confetti` class and a helper function to create confetti bursts each time a shape is successfully clicked.

---

## How to Play

1. **Open the Game**: Double-click or open `Index.html` in your preferred modern web browser (Chrome, Firefox, Safari, Edge, etc.).  
2. **Game Screen**:  
   - You will see shapes bouncing around inside the browser window on a canvas.  
   - In the top-right corner, you’ll see the current score and a countdown timer.  
3. **Objective**:  
   - Click on the shapes to earn points.  
   - Bonus shapes give extra points and blink with color changes.  
   - Clicking on empty space lowers your score by 1.  
4. **Game Over**:  
   - When the timer reaches zero, the game ends.  
   - You’ll see your final score and a basic leaderboard section (which you can expand to store or display top scores).  
5. **Play Again**:  
   - Click the “Play Again” button to reset and start a new round.

---

## Setup & Installation

No special setup is required beyond having a modern web browser. Simply:

1. Download/clone this repository or copy all files into a folder.
2. Open `Index.html` in your browser.

_Optional_: If you are running this on a web server, make sure all files are in the same directory so the modules can load correctly.

---

## Customization

1. **Game Settings**:  
   - `timeLeftSetting` (default 60): Change the timer for each round.  
   - `SHAPES.radius` (default 60): Adjust the default size of shapes.  
   - `SHAPES.maxNumberOnCanvas` (default 10): Control how many shapes are on screen at once.  
   - `SHAPES.bonusProbability` (default 0.2): The chance of a shape being “special” (bonus).  
2. **Scoring**: Adjust `baseScore`, `bonusScore`, and `penalty` in `GAME_SETTINGS` to alter how points are awarded or deducted.  
3. **Canvas Dimensions**: By default, the canvas matches the browser window size (`window.innerWidth` and `window.innerHeight`). You can override these in `GAME_SETTINGS.CANVAS.width` and `GAME_SETTINGS.CANVAS.height` if needed.

---

## Roadmap

Below are some ideas to extend the game:

- **Leaderboard Persistence**: Store high scores in local storage or a server/database.  
- **Multi-level Gameplay**: Increase speed or shapes each level.  
- **Mobile Optimization**: Enhance tap responsiveness for touch screens.  
- **Audio Feedback**: Add fun sounds when shapes are clicked or missed.

---

## Contributing

If you’d like to contribute:

1. Fork this repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request for review.

---

## License

This project is open source—feel free to use, modify, and distribute.  

---

## Contact

For additional questions or suggestions, please reach out via your preferred contact method. Enjoy playing and let us know what you think! Have fun!
