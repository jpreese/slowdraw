# Copilot Instructions for SlowDraw

## Project Overview
SlowDraw is a browser-based word guessing game where players must identify a word as it is slowly drawn on a canvas. The game features a 30-second timer, letter-by-letter stroke animation, and local storage for persistent stats.

## Architecture

### Single-Page Application Structure
- **index.html** - Game UI with canvas, input, timer bar, and stats display
- **script.js** - All game logic: word selection, canvas animation, input handling, scoring
- **styles.css** - Wordle-inspired responsive styling with mobile support

### Core Game Flow
1. `startNewGame()` → selects random word, resets state, starts animation loop
2. `animate()` → `requestAnimationFrame` loop updates timer and calls `drawText(progress)`
3. `drawText()` → iterates letters, calls `drawLetter()` with per-letter progress
4. `checkGuess()` → validates input against `currentWord`, calls `endGame(won)`

### Letter Drawing System
The `letterPaths` object (lines 256-281) defines each letter A-Z as arrays of stroke paths using normalized 0-1 coordinates. The `drawLetter()` function interpolates partial progress along these strokes to create the slow-reveal effect.

## Key Patterns

### Canvas Rendering
- Canvas uses `aspect-ratio: 500/150` CSS for responsive sizing
- `resizeCanvas()` recalculates dimensions on window/orientation changes
- Drawing uses `ctx.strokeStyle = '#667eea'` with rounded caps/joins

### State Management
```javascript
// Core game state - all global variables at top of script.js
let currentWord = '';     // Current word to guess (uppercase)
let gameActive = false;   // Prevents input when game ended
let gameStartTime = 0;    // Used to calculate animation progress
```

### Stats Persistence
Stats (`wins`, `losses`, `streak`) use `localStorage` - always update both the stored value AND the DOM element when changing:
```javascript
wins++;
localStorage.setItem('wins', wins);
document.getElementById('wins').textContent = wins;
```

## Conventions

### Styling
- Color palette: `#121212` (text), `#6aaa64` (success/green), `#ca4754` (error/red), `#d3d6da` (borders)
- Message states: `.message.success`, `.message.error`, `.message.info`
- Uppercase text for game input (`text-transform: uppercase`)

### Adding New Words
Add words to the `words` array at the top of script.js. Words must be:
- UPPERCASE strings only
- Single words (no spaces)
- Grouped by category with comments for organization

## Running Locally
Open `index.html` directly in a browser - no build step or server required.
