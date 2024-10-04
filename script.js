const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const video = document.getElementById("myVideo");

const cw = canvas.width;
const ch = canvas.height;

// const rollButtonImage = new Image();
// rollButtonImage.src = "button-image.png"; // Path to your "Roll Dice" button image



// let gameStarted = false;
let drawFunction = () => {};
let globalremove = () => {};

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

// function loadSelectionEventListeners() {
//   canvas.removeEventListener("click", handlePlayNowButton);
// }

function loadPage2EventListeners() {}

function loadPage(page) {
  switch (page) {
    case "page1": {
      globalremove();
      const { draw, remove } = page1MainFunction();
      drawFunction = draw;
      globalremove = remove;
      // loadPage1EventListeners();
      break;
    }
    case "selectionPage": {
      globalremove();
      const { draw, remove } = drawSelectionPage();
      drawFunction = draw;
      // loadSelectionEventListeners();
      globalremove = remove
      break;
    }
    case "page2": {
      globalremove();
      drawFunction = drawPage2;
      loadPage2EventListeners();
      // gameStarted = true;

      loadGame();
      break;
    }
  }
}

function page1MainFunction() {
  // ctx.drawImage(video, 0, 0, cw, ch);
  // ctx.drawImage(buttonImage, button.x, button.y, button.width, button.height);
  // createButton(...Object.values(playNowButton), "Play Now");

  const playNowButton = {
    x: cw - 100,
    y: ch - 50,
    width: 80,
    height: 40,
  };

  // function loadPage1EventListeners() {
  //   // canvas.removeEventListener("click", handleRollDice);

  //   canvas.addEventListener("click", handlePlayNowButton);
  // }

  function handlePlayNowButton() {
    loadPage("selectionPage");

    // {
    //   const rect = canvas.getBoundingClientRect();
    //   const mouseX = event.clientX - rect.left;
    //   const mouseY = event.clientY - rect.top;

    //   // Check if the "Play Now" button is clicked
    //   if (
    //     mouseX >= playNowButton.x &&
    //     mouseX <= playNowButton.x + playNowButton.width &&
    //     mouseY >= playNowButton.y &&
    //     mouseY <= playNowButton.y + playNowButton.height
    //   ) {
    //     console.log("play now clicked");
    //     loadPage("selectionPage");
    //   }
    // }
  }

  const button1 = createButton(canvas, handlePlayNowButton, ...Object.values(playNowButton), "Play Now");

  function draw() {
    ctx.drawImage(video, 0, 0, cw, ch);
    button1.draw();
    // drawButton(...Object.values(playNowButton), "Play Now");
  }

  function remove() {
    // canvas.removeEventListener("click", handlePlayNowButton);
    button1.removeButton()
  }

  // loadPage1EventListeners();

  return { draw, remove };
}

function drawSelectionPage() {
  const selectionPageBg = new Image();
  selectionPageBg.src = "./images/background/selectionPageBg.jpeg";

  const createRoomButton = {
    x: 100,
    y: 200,
    width: 100,
    height:40
  }

  const joinRoomButton = {
    x: 300,
    y: 200,
    width: 100,
    height:40
  }

  function handleCreateRoom() {
    // loadPage("createRoom")
  }

  function handleJoinRoom() {
    // loadPage("createRoom")
  }

  const createRoomBtn = createButton(canvas, handleCreateRoom, ...Object.values(createRoomButton), "Create Room")

  const joinRoomBtn = createButton(canvas, handleJoinRoom, ...Object.values(joinRoomButton), "Join Room")

  function draw() {
    ctx.drawImage(selectionPageBg, 0, 0, cw, ch)
    createRoomBtn.draw();
    joinRoomBtn.draw();
  }

  function remove() {
    createRoomBtn.removeButton();
    joinRoomBtn.removeButton();
  }
  
  return { draw, remove}
}

function drawPage2() {
  // loadPage2EventListeners();
}

// function handleCreateRoom(event) {
//   const rect = canvas.getBoundingClientRect();
//   const mouseX = event.clientX - rect.left;
//   const mouseY = event.clientY - rect.top;

//   // Check if the "Roll Dice" button is clicked after the game has started
//   if (
//     // mouseX >=  &&
//     mouseX <= rollButton.x + rollButton.width &&
//     mouseY >= rollButton.y &&
//     mouseY <= rollButton.y + rollButton.height
//   ) {
//     // rollDice();
//   }
// }

// function handleJoinRoom(event) {
//   const rect = canvas.getBoundingClientRect();
//   const mouseX = event.clientX - rect.left;
//   const mouseY = event.clientY - rect.top;

//   // Check if the "Roll Dice" button is clicked after the game has started
//   if (
//     mouseX >= rollButton.x &&
//     mouseX <= rollButton.x + rollButton.width &&
//     mouseY >= rollButton.y &&
//     mouseY <= rollButton.y + rollButton.height
//   ) {
//     // rollDice();
//   }
// }

loadPage("page1");
