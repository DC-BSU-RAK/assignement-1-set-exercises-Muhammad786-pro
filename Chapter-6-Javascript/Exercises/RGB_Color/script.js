// Select necessary elements from the DOM
const rgbDisplay = document.getElementById("rgb-display");
const optionsContainer = document.getElementById("options-container");
const message = document.getElementById("message");
const scoreDisplay = document.getElementById("score");
const livesDisplay = document.getElementById("lives");
const replayButton = document.getElementById("replay-button");

// Game state variables
let correctColor;
let score = 0;
let lives = 3;

// Function to generate a random RGB color
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Function to start a new round
function newRound() {
  optionsContainer.innerHTML = "";
  message.textContent = "";

  // Generate the correct color
  correctColor = randomColor();
  rgbDisplay.textContent = correctColor;

  // Create an array to store colors and insert the correct one
  const colors = [correctColor];

  // Add two more incorrect colors
  while (colors.length < 3) {
    const newColor = randomColor();
    if (!colors.includes(newColor)) {
      colors.push(newColor);
    }
  }

  // Shuffle the colors array
  colors.sort(() => Math.random() - 0.5);

  // Create color option boxes
  colors.forEach((color) => {
    const div = document.createElement("div");
    div.classList.add("color-option");
    div.style.backgroundColor = color;

    // Add click event to each color
    div.addEventListener("click", () => handleGuess(color));
    optionsContainer.appendChild(div);
  });
}

// Function to handle the user's guess
function handleGuess(selectedColor) {
  if (selectedColor === correctColor) {
    score++;
    message.textContent = "✅ Correct!";
  } else {
    lives--;
    message.textContent = `❌ Wrong! It was ${correctColor}`;
  }

  updateStats();

  // Check if the game should continue
  if (lives > 0) {
    setTimeout(newRound, 1000);
  } else {
    endGame();
  }
}

// Update score and lives display
function updateStats() {
  scoreDisplay.textContent = score;
  livesDisplay.textContent = lives;
}

// Function to handle game over
function endGame() {
  message.textContent = `🎉 Game Over! Final Score: ${score}`;
  optionsContainer.innerHTML = "";
  rgbDisplay.textContent = "rgb(?, ?, ?)";
  replayButton.style.display = "inline-block";
}

// Reset game to initial state
function resetGame() {
  score = 0;
  lives = 3;
  updateStats();
  replayButton.style.display = "none";
  newRound();
}

// Add event listener to replay button
replayButton.addEventListener("click", resetGame);

// Start the game on load
resetGame();