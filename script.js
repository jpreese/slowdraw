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

// Define single-stroke letter paths (relative coordinates, scaled to fit a box)
// Each letter is an array of strokes, each stroke is an array of [x, y] points
const letterPaths = {
    'A': [[[0.5, 0], [0, 1]], [[0.5, 0], [1, 1]], [[0.2, 0.6], [0.8, 0.6]]],
    'B': [[[0, 0], [0, 1]], [[0, 0], [0.7, 0], [0.9, 0.15], [0.9, 0.35], [0.7, 0.5], [0, 0.5]], [[0, 0.5], [0.7, 0.5], [0.9, 0.65], [0.9, 0.85], [0.7, 1], [0, 1]]],
    'C': [[[1, 0.2], [0.7, 0], [0.3, 0], [0, 0.3], [0, 0.7], [0.3, 1], [0.7, 1], [1, 0.8]]],
    'D': [[[0, 0], [0, 1]], [[0, 0], [0.6, 0], [1, 0.3], [1, 0.7], [0.6, 1], [0, 1]]],
    'E': [[[1, 0], [0, 0], [0, 1], [1, 1]], [[0, 0.5], [0.7, 0.5]]],
    'F': [[[1, 0], [0, 0], [0, 1]], [[0, 0.5], [0.7, 0.5]]],
    'G': [[[1, 0.2], [0.7, 0], [0.3, 0], [0, 0.3], [0, 0.7], [0.3, 1], [0.7, 1], [1, 0.7], [1, 0.5], [0.5, 0.5]]],
    'H': [[[0, 0], [0, 1]], [[1, 0], [1, 1]], [[0, 0.5], [1, 0.5]]],
    'I': [[[0.2, 0], [0.8, 0]], [[0.5, 0], [0.5, 1]], [[0.2, 1], [0.8, 1]]],
    'J': [[[0.2, 0], [0.8, 0]], [[0.5, 0], [0.5, 0.8], [0.3, 1], [0.1, 0.9]]],
    'K': [[[0, 0], [0, 1]], [[1, 0], [0, 0.5], [1, 1]]],
    'L': [[[0, 0], [0, 1], [1, 1]]],
    'M': [[[0, 1], [0, 0], [0.5, 0.5], [1, 0], [1, 1]]],
    'N': [[[0, 1], [0, 0], [1, 1], [1, 0]]],
    'O': [[[0.5, 0], [0.15, 0.15], [0, 0.5], [0.15, 0.85], [0.5, 1], [0.85, 0.85], [1, 0.5], [0.85, 0.15], [0.5, 0]]],
    'P': [[[0, 1], [0, 0], [0.7, 0], [1, 0.15], [1, 0.35], [0.7, 0.5], [0, 0.5]]],
    'Q': [[[0.5, 0], [0.15, 0.15], [0, 0.5], [0.15, 0.85], [0.5, 1], [0.85, 0.85], [1, 0.5], [0.85, 0.15], [0.5, 0]], [[0.6, 0.7], [1, 1.1]]],
    'R': [[[0, 1], [0, 0], [0.7, 0], [1, 0.15], [1, 0.35], [0.7, 0.5], [0, 0.5]], [[0.5, 0.5], [1, 1]]],
    'S': [[[1, 0.15], [0.7, 0], [0.3, 0], [0, 0.15], [0, 0.35], [0.3, 0.5], [0.7, 0.5], [1, 0.65], [1, 0.85], [0.7, 1], [0.3, 1], [0, 0.85]]],
    'T': [[[0, 0], [1, 0]], [[0.5, 0], [0.5, 1]]],
    'U': [[[0, 0], [0, 0.7], [0.3, 1], [0.7, 1], [1, 0.7], [1, 0]]],
    'V': [[[0, 0], [0.5, 1], [1, 0]]],
    'W': [[[0, 0], [0.25, 1], [0.5, 0.5], [0.75, 1], [1, 0]]],
    'X': [[[0, 0], [1, 1]], [[1, 0], [0, 1]]],
    'Y': [[[0, 0], [0.5, 0.5], [1, 0]], [[0.5, 0.5], [0.5, 1]]],
    'Z': [[[0, 0], [1, 0], [0, 1], [1, 1]]]
};

// Calculate total path length for a letter
function getPathLength(strokes) {
    let total = 0;
    for (const stroke of strokes) {
        for (let i = 1; i < stroke.length; i++) {
            const dx = stroke[i][0] - stroke[i-1][0];
            const dy = stroke[i][1] - stroke[i-1][1];
            total += Math.sqrt(dx * dx + dy * dy);
        }
    }
    return total;
}

// Draw a letter with partial progress
function drawLetter(letter, x, y, width, height, progress) {
    const strokes = letterPaths[letter];
    if (!strokes) return;

    const totalLength = getPathLength(strokes);
    const targetLength = progress * totalLength;
    let drawnLength = 0;

    ctx.beginPath();

    for (const stroke of strokes) {
        if (drawnLength >= targetLength) break;

        let strokeStarted = false;

        for (let i = 1; i < stroke.length; i++) {
            const x1 = x + stroke[i-1][0] * width;
            const y1 = y + stroke[i-1][1] * height;
            const x2 = x + stroke[i][0] * width;
            const y2 = y + stroke[i][1] * height;

            const dx = stroke[i][0] - stroke[i-1][0];
            const dy = stroke[i][1] - stroke[i-1][1];
            const segmentLength = Math.sqrt(dx * dx + dy * dy);

            if (drawnLength + segmentLength <= targetLength) {
                // Draw full segment
                if (!strokeStarted) {
                    ctx.moveTo(x1, y1);
                    strokeStarted = true;
                }
                ctx.lineTo(x2, y2);
                drawnLength += segmentLength;
            } else {
                // Draw partial segment
                const remaining = targetLength - drawnLength;
                const ratio = remaining / segmentLength;
                const px = x1 + (x2 - x1) * ratio;
                const py = y1 + (y2 - y1) * ratio;

                if (!strokeStarted) {
                    ctx.moveTo(x1, y1);
                    strokeStarted = true;
                }
                ctx.lineTo(px, py);
                drawnLength = targetLength;
                break;
            }
        }
    }

    ctx.stroke();
}

function drawText(progress) {
    // progress is 0 to 1
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const isMobile = canvas.width < 400;
    const letterHeight = isMobile ? 40 : 60;
    const letterWidth = isMobile ? 30 : 45;
    const spacing = isMobile ? 5 : 8;

    const totalWidth = currentWord.length * letterWidth + (currentWord.length - 1) * spacing;
    let startX = (canvas.width - totalWidth) / 2;
    const startY = (canvas.height - letterHeight) / 2;

    ctx.strokeStyle = '#667eea';
    ctx.lineWidth = isMobile ? 2 : 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    for (let i = 0; i < currentWord.length; i++) {
        const letter = currentWord[i];
        const x = startX + i * (letterWidth + spacing);
        drawLetter(letter, x, startY, letterWidth, letterHeight, progress);
    }
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
