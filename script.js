const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const video = document.getElementById("myVideo");

const buttonImage = new Image();
buttonImage.src = "download.jpeg"; // Path to your "Play Now" button image

const button = {
  x: canvas.width - 100,
  y: canvas.height - 50,
  width: 80,
  height: 40,
};

const rollButtonImage = new Image();
rollButtonImage.src = "button-image.png"; // Path to your "Roll Dice" button image

const rollButton = {
  x: canvas.width / 2 - 50, // Centered horizontally
  y: canvas.height - 100, // Positioned above the bottom
  width: 100,
  height: 50,
};

let gameStarted = false;
let drawFunction = null;

video.addEventListener("play", function () {
  function drawFrame() {
    if (drawFunction) {
      drawFunction();
    }

    if (!video.paused && !video.ended) {
      // Draw the video frame onto the canvas
      requestAnimationFrame(drawFrame); // Schedule the next frame
    }
  }
  drawFrame(); // Start drawing the video to the canvas
});

function handlePlayNowButton(event) {
  {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Check if the "Play Now" button is clicked
    if (
      mouseX >= button.x &&
      mouseX <= button.x + button.width &&
      mouseY >= button.y &&
      mouseY <= button.y + button.height
    ) {
      console.log("play now clicked");
      loadPage("page2");
    }
  }
}

function handleRollDice(event) {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  // Check if the "Roll Dice" button is clicked after the game has started
  if (
    mouseX >= rollButton.x &&
    mouseX <= rollButton.x + rollButton.width &&
    mouseY >= rollButton.y &&
    mouseY <= rollButton.y + rollButton.height
  ) {
    rollDice();
  }
}

function loadPage1EventListeners() {
  canvas.removeEventListener("click", handleRollDice);

  canvas.addEventListener("click", handlePlayNowButton);
}

function loadPage2EventListeners() {
  canvas.removeEventListener("click", handlePlayNowButton);

  canvas.addEventListener("click", handleRollDice);
}

// Function to start the game, re-render the canvas with a solid background
function loadGame() {
  console.log("start game screen");
  const dice1 = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
  const dice2 = Math.floor(Math.random() * 6) + 1;
  // Clear the canvas and draw a solid background (e.g., blue color)
  ctx.fillStyle = "blue"; // You can change this to any colors
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  drawDice(ctx, dice1, canvas.width / 3, canvas.height / 4, 60, 60);
  drawDice(ctx, dice2, canvas.width / 3 + 100, canvas.height / 4, 60, 60);

  // Input for Amount
  ctx.fillStyle = "white";
  ctx.fillRect(canvas.width / 5, canvas.height * 0.7, 100, 40);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.strokeRect(canvas.width / 5, canvas.height * 0.7, 100, 40);

  // Draw the "Roll Dice" buttons
  ctx.drawImage(
    rollButtonImage,
    rollButton.x,
    rollButton.y,
    rollButton.width,
    rollButton.height
  );
}

// Function to roll two dice and display the result
function rollDice() {
  const dice1 = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
  const dice2 = Math.floor(Math.random() * 6) + 1;
  const total = dice1 + dice2;

  // Clear the canvas and re-render the solid background
  ctx.fillStyle = "blue"; // Same background color as in startGame()
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  drawDice(ctx, dice1, canvas.width / 3, canvas.height / 4, 60, 60);
  drawDice(ctx, dice2, canvas.width / 3 + 100, canvas.height / 4, 60, 60);

  // Draw dice values on the canvas
  ctx.font = "20px Arial";
  ctx.fillStyle = "white";
  ctx.fillText(`Total: ${total}`, canvas.width / 2 - 50, canvas.height / 2);

  // Draw the "Roll Dice" button again
  ctx.drawImage(
    rollButtonImage,
    rollButton.x,
    rollButton.y,
    rollButton.width,
    rollButton.height
  );
}

function loadPage(page) {
  switch (page) {
    case "page1":
      drawFunction = drawPage1;
      loadPage1EventListeners();
      break;
    case "page2":
      drawFunction = drawPage2;
      loadPage2EventListeners();
      gameStarted = true;

      loadGame();
      break;
  }
}

function drawPage1() {
  loadPage1EventListeners(button);

  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(buttonImage, button.x, button.y, button.width, button.height);
}

function drawPage2() {
  loadPage2EventListeners();
}

loadPage("page1");

function drawDice(ctx, number, x, y, width, height) {
  // Clear the area where the dice will be drawn
  ctx.clearRect(x, y, width, height);

  // Draw rounded rectangle for the dice face
  function drawRoundedRect(x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + width, y, x + width, y + height, radius);
    ctx.arcTo(x + width, y + height, x, y + height, radius);
    ctx.arcTo(x, y + height, x, y, radius);
    ctx.arcTo(x, y, x + width, y, radius);
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 4;
    ctx.stroke();
  }

  // Function to draw dots
  function drawDot(dotX, dotY) {
    ctx.beginPath();
    ctx.arc(dotX, dotY, Math.min(width, height) * 0.05, 0, Math.PI * 2); // Scale the dots based on dice size
    ctx.fillStyle = "black";
    ctx.fill();
  }

  // Draw the dice with rounded corners
  const radius = Math.min(width, height) * 0.1; // Corner radius is 10% of the smallest dimension
  drawRoundedRect(x, y, width, height, radius);

  // Calculate dot positions dynamically based on the dice dimensions
  const centerX = x + width / 2;
  const centerY = y + height / 2;
  const offset = Math.min(width, height) * 0.25;

  const dotPositions = {
    1: [[centerX, centerY]],
    2: [
      [centerX - offset, centerY - offset],
      [centerX + offset, centerY + offset],
    ],
    3: [
      [centerX - offset, centerY - offset],
      [centerX, centerY],
      [centerX + offset, centerY + offset],
    ],
    4: [
      [centerX - offset, centerY - offset],
      [centerX + offset, centerY - offset],
      [centerX - offset, centerY + offset],
      [centerX + offset, centerY + offset],
    ],
    5: [
      [centerX - offset, centerY - offset],
      [centerX + offset, centerY - offset],
      [centerX, centerY],
      [centerX - offset, centerY + offset],
      [centerX + offset, centerY + offset],
    ],
    6: [
      [centerX - offset, centerY - offset],
      [centerX + offset, centerY - offset],
      [centerX - offset, centerY],
      [centerX + offset, centerY],
      [centerX - offset, centerY + offset],
      [centerX + offset, centerY + offset],
    ],
  };

  // Draw the dots for the given number
  if (dotPositions[number]) {
    dotPositions[number].forEach((position) =>
      drawDot(position[0], position[1])
    );
  } else {
    console.log("Invalid number, please enter a number between 1 and 6.");
  }
}
