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

// Function to roll two dice and display the result
function rollDice() {
  const dice1 = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
  const dice2 = Math.floor(Math.random() * 6) + 1;
  const total = dice1 + dice2;

  // Clear the canvas and re-render the solid background

  drawDice(ctx, dice1, cw / 3, ch / 4, 60, 60);
  drawDice(ctx, dice2, cw / 3 + 100, ch / 4, 60, 60);

  // Draw dice values on the canvas
  ctx.font = "20px Arial";
  ctx.fillStyle = "white";
  ctx.fillText(`Total: ${total}`, cw / 2 - 50, ch / 2);

  // Draw the "Roll Dice" button again
  ctx.drawImage(
    rollButtonImage,
    rollButton.x,
    rollButton.y,
    rollButton.width,
    rollButton.height
  );
}

// Function to start the game, re-render the canvas with a solid background
function loadGame() {
  console.log("start game screen");
  const dice1 = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
  const dice2 = Math.floor(Math.random() * 6) + 1;

  drawDice(ctx, dice1, cw / 3, ch / 4, 60, 60);
  drawDice(ctx, dice2, cw / 3 + 100, ch / 4, 60, 20);

  // Input for Amount
  ctx.fillStyle = "white";
  ctx.fillRect(cw / 5, ch * 0.7, 100, 40);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.strokeRect(cw / 5, ch * 0.7, 100, 40);

  // Draw the "Roll Dice" buttons
  ctx.drawImage(
    rollButtonImage,
    rollButton.x,
    rollButton.y,
    rollButton.width,
    rollButton.height
  );
}

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
