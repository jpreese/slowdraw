const words = [
    'JAVASCRIPT', 'CANVAS', 'DRAWING', 'GAME', 'PROGRAMMING',
    'COMPUTER', 'KEYBOARD', 'MONITOR', 'PIXEL', 'ANIMATION',
    'INTERNET', 'ALGORITHM', 'DATABASE', 'FUNCTION', 'VARIABLE',
    'LIBRARY', 'FRAMEWORK', 'BROWSER', 'SERVER', 'NETWORK',
    'PUZZLE', 'CHALLENGE', 'SUCCESS', 'VICTORY', 'TRIUMPH',
    'ARTIST', 'DESIGNER', 'DEVELOPER', 'ENGINEER', 'GENIUS'
];

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const messageDiv = document.getElementById('message');
const gameOverDiv = document.getElementById('gameOver');
const wordRevealDiv = document.getElementById('wordReveal');
const newGameBtn = document.getElementById('newGameBtn');
const timerDiv = document.getElementById('timeLeft');
const timerFill = document.getElementById('timerFill');

let currentWord = '';
let gameActive = false;
let gameDuration = 30000; // 30 seconds
let gameStartTime = 0;
let animationFrameId = null;
let wins = parseInt(localStorage.getItem('wins')) || 0;
let losses = parseInt(localStorage.getItem('losses')) || 0;
let streak = parseInt(localStorage.getItem('streak')) || 0;

document.getElementById('wins').textContent = wins;
document.getElementById('losses').textContent = losses;
document.getElementById('streak').textContent = streak;

// Function to set canvas size responsively
function resizeCanvas() {
    const rect = canvas.parentElement.getBoundingClientRect();
    const maxWidth = Math.min(rect.width - 20, 500);
    canvas.width = maxWidth;
    canvas.height = maxWidth * (150 / 500); // Maintain aspect ratio
}

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function drawText(progress) {
    // progress is 0 to 1
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const isMobile = canvas.width < 400;
    const fontSize = isMobile ? 50 : 80;

    ctx.font = `bold ${fontSize}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const x = canvas.width / 2;
    const y = canvas.height / 2;

    // Create a dash length for smooth drawing animation
    const dashLength = 300;

    // Draw the word with stroke animation (outline only)
    ctx.strokeStyle = '#667eea';
    ctx.lineWidth = isMobile ? 2 : 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Use setLineDash to create a drawing effect
    // [dashLength] creates only drawn segments
    // lineDashOffset animates from 0 (hidden) to dashLength (visible)
    ctx.setLineDash([dashLength]);
    ctx.lineDashOffset = dashLength * (1 - progress);
    ctx.strokeText(currentWord, x, y);

    // Reset line dash
    ctx.setLineDash([]);
}

function animate(currentTime) {
    if (!gameStartTime) {
        gameStartTime = currentTime;
    }

    const elapsed = currentTime - gameStartTime;
    const progress = Math.min(elapsed / gameDuration, 1);

    // Update timer
    const timeRemaining = Math.max(0, Math.ceil((gameDuration - elapsed) / 1000));
    timerDiv.textContent = timeRemaining;
    timerFill.style.width = ((1 - progress) * 100) + '%';

    drawText(progress);

    if (progress < 1 && gameActive) {
        animationFrameId = requestAnimationFrame(animate);
    } else if (progress >= 1 && gameActive) {
        gameActive = false;
        endGame(false);
    }
}

function startNewGame() {
    currentWord = getRandomWord();
    gameActive = true;
    gameStartTime = 0;
    messageDiv.textContent = '';
    messageDiv.className = 'message';
    gameOverDiv.textContent = '';
    wordRevealDiv.textContent = '';
    guessInput.value = '';
    guessInput.disabled = false;
    guessInput.focus();
    newGameBtn.style.display = 'none';

    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }

    animationFrameId = requestAnimationFrame(animate);
}

function endGame(won) {
    gameActive = false;
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }

    guessInput.disabled = true;

    if (won) {
        gameOverDiv.textContent = '🎉 YOU WIN! 🎉';
        messageDiv.textContent = 'Correct!';
        messageDiv.className = 'message success';
        wins++;
        streak++;
        localStorage.setItem('wins', wins);
        localStorage.setItem('streak', streak);
    } else {
        gameOverDiv.textContent = '😢 Game Over';
        messageDiv.textContent = 'You did not guess in time';
        messageDiv.className = 'message error';
        losses++;
        streak = 0;
        localStorage.setItem('losses', losses);
        localStorage.setItem('streak', streak);
    }

    wordRevealDiv.textContent = currentWord;
    newGameBtn.style.display = 'block';

    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;
    document.getElementById('streak').textContent = streak;
}

function checkGuess() {
    if (!gameActive) return;

    const guess = guessInput.value.trim().toUpperCase();

    if (!guess) {
        messageDiv.textContent = 'Please enter a guess';
        messageDiv.className = 'message info';
        return;
    }

    if (guess === currentWord) {
        endGame(true);
    } else {
        messageDiv.textContent = 'Wrong guess, try again!';
        messageDiv.className = 'message error';
        guessInput.value = '';
        guessInput.focus();
    }
}

guessBtn.addEventListener('click', checkGuess);

guessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkGuess();
    }
});

newGameBtn.addEventListener('click', startNewGame);

// Handle window resize for responsive canvas
window.addEventListener('resize', resizeCanvas);
window.addEventListener('orientationchange', resizeCanvas);

// Initialize canvas size and start the first game
resizeCanvas();
startNewGame();
