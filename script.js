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

function loadPage(page) {
  switch (page) {
    case "page1": {
      globalremove();
      const { draw, remove } = page1MainFunction();
      drawFunction = draw;
      globalremove = remove;
      break;
    }
    case "selectionPage": {
      globalremove();
      const { draw, remove } = drawSelectionPage();
      drawFunction = draw;
      globalremove = remove
      break;
    }
    case "createRoomPage": {
      globalremove();
      const { draw, remove } = drawCreateRoomPage();
      drawFunction = draw;
      globalremove = remove
      break;
    }
  }
}

function page1MainFunction() {

  const playNowButton = {
    x: cw - 100,
    y: ch - 50,
    width: 80,
    height: 40,
  };

  function handlePlayNowButton() {
    loadPage("selectionPage");

   
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
    loadPage("createRoomPage")
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

function drawCreateRoomPage() {
  const createRoomPageBg = new Image();
  createRoomPageBg.src = "./images/background/createRoomBg.jpeg";
  const roundsOne = {
    x: 100,
    y: 250, 
    width: 80,
    height: 40, 
  };

  const roundsThree = {
    x: 200,
    y: 250,
    width: 80,
    height: 40,
  };

  const roundsFive = {
    x: 300,
    y: 250,
    width: 80,
    height: 40,
  };

  function handleRounds(rounds) {
    //
  }

  const rounds1 = createButton(canvas, () => handleRounds(1), ...Object.values(roundsOne), "One Round")

  const rounds3 = createButton(canvas, () => handleRounds(3), ...Object.values(roundsThree), "Three Rounds")

  const rounds5 = createButton(canvas, () => handleRounds(5), ...Object.values(roundsFive), "Five Rounds")

  function draw() {
    ctx.drawImage(createRoomPageBg, 0, 0, cw, ch)
    rounds1.draw();
    rounds3.draw();
    rounds5.draw();
  }

  function remove() {
    rounds1.remove();
    rounds3.remove();
    rounds5.remove();
  }
  
  return { draw, remove }
}



loadPage("page1");
