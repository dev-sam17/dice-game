function createButton(
  canvas,
  fn,
  x,
  y,
  width,
  height,
  text,
  bgColor = "lightblue",
  bgImage = null,
  textColor = "black",
) {
  // const a = handleButtonClick()
  const handleFunction = (event) => handleButtonClick({ x, y, width, height }, event, fn)

  canvas.addEventListener("click", handleFunction);

  function draw() {
    drawButton(
      x,
      y,
      width,
      height,
      text,
      (bgColor = "lightblue"),
      (bgImage = null),
      (textColor = "black")
    );
  }

  function removeButton() {
    canvas.removeEventListener("click", handleFunction);
  }

  return {
    draw,
    removeButton,
  };
}

function drawButton(
  x,
  y,
  width,
  height,
  text,
  bgColor = "lightblue",
  bgImage = null,
  textColor = "black"
) {
  if (bgImage) {
    // Load and draw the background image
    const image = new Image();
    image.src = bgImage;
    image.onload = function () {
      ctx.drawImage(image, x, y, width, height);
      drawButtonText(x, y, width, height, text, textColor);
    };
  } else {
    // Draw the button rectangle with background color
    ctx.fillStyle = bgColor;
    ctx.fillRect(x, y, width, height);
    drawButtonText(x, y, width, height, text, textColor);
  }

  // Return button properties for handling clicks
  return { x, y, width, height, text };
}

// Function to draw the button text
function drawButtonText(x, y, width, height, text, textColor) {
  ctx.fillStyle = textColor;
  ctx.font = "15px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, x + width / 2, y + height / 2);
}

function handleButtonClick(button, event, callback) {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  if (
    mouseX >= button.x &&
    mouseX <= button.x + button.width &&
    mouseY >= button.y &&
    mouseY <= button.y + button.height
  ) {
    // console.log(`loadPage called with ${page}`);
    callback();
  }
}
