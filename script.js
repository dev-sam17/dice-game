const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const video = document.getElementById("myVideo");

const cw = canvas.width;
const ch = canvas.height;

const playNowButton = {
  x: cw - 100,
  y: ch - 50,
  width: 80,
  height: 40,
};

const rollButtonImage = new Image();
rollButtonImage.src = "button-image.png"; // Path to your "Roll Dice" button image

const selectionPageBg = new Image();
selectionPageBg.src = "./images/background/selectionPageBg.jpeg";

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
      mouseX >= playNowButton.x &&
      mouseX <= playNowButton.x + playNowButton.width &&
      mouseY >= playNowButton.y &&
      mouseY <= playNowButton.y + playNowButton.height
    ) {
      console.log("play now clicked");
      loadPage("selectionPage");
    }
  }
}

function loadPage1EventListeners() {
  // canvas.removeEventListener("click", handleRollDice);

  canvas.addEventListener("click", handlePlayNowButton);
}

function loadPage2EventListeners() {}

function loadPage(page) {
  switch (page) {
    case "page1":
      drawFunction = drawPage1;
      loadPage1EventListeners();
      break;
    case "selectionPage":
      drawFunction = drawSelectionPage;
      break;
    case "page2":
      drawFunction = drawPage2;
      loadPage2EventListeners();
      // gameStarted = true;

      loadGame();
      break;
  }
}

function drawPage1() {
  ctx.drawImage(video, 0, 0, cw, ch);
  // ctx.drawImage(buttonImage, button.x, button.y, button.width, button.height);
  createButton(...Object.values(playNowButton), "Play Now");

  loadPage1EventListeners();
}

function drawSelectionPage() {
  ctx.drawImage(selectionPageBg, 0, 0, cw, ch);

  ctx.fillStyle = "white";
  ctx.fillRect(100, 200, 100, 40);

  ctx.fillStyle = "white";
  ctx.fillRect(300, 200, 100, 40);
  ctx.font = "15px Arial";
  ctx.fillStyle = "purple";
  ctx.fillText("Create Room", 110, 210);

  ctx.font = "15px Arial";
  ctx.fillStyle = "purple";
  ctx.fillText("Join Room", 310, 210);
}

function drawPage2() {
  loadPage2EventListeners();
}

loadPage("page1");

function handleCreateRoom(event) {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  // Check if the "Roll Dice" button is clicked after the game has started
  if (
    // mouseX >=  &&
    mouseX <= rollButton.x + rollButton.width &&
    mouseY >= rollButton.y &&
    mouseY <= rollButton.y + rollButton.height
  ) {
    // rollDice();
  }
}

function handleJoinRoom(event) {
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
    // rollDice();
  }
}
