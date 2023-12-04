// general constants to be used throughout code
const introSound = document.getElementById("intro_sound");
const musicButton = document.getElementById("play_music");
const continueClick = document.getElementById("continue_click");
const rotateClick = document.getElementById("click_rotate");
const rotateButtonBattleship = document.getElementById("rotate_battleship");
const rotateButtonCarrier = document.getElementById("rotate_carrier");
const rotateButtonCruiser = document.getElementById("rotate_cruiser");
const rotateButtonSubmarine = document.getElementById("rotate_submarine");
const rotateButtonDestroyer = document.getElementById("rotate_destroyer");
const rotateButtonBattleship2 = document.getElementById("rotate_battleship2");
const rotateButtonCarrier2 = document.getElementById("rotate_carrier2");
const rotateButtonCruiser2 = document.getElementById("rotate_cruiser2");
const rotateButtonSubmarine2 = document.getElementById("rotate_submarine2");
const rotateButtonDestroyer2 = document.getElementById("rotate_destroyer2");
const sourceOne = document.querySelector(".source_1");
const targetOne = document.querySelector(".target_1");
const sourceTwo = document.querySelector(".source_2");
const targetTwo = document.querySelector(".target_2");

// general functions for sound and rotation (could go back and make all rotate buttons 1 function to include all pieces)
musicButton.addEventListener("click", function() {
    introSound.paused ? playIntroSound() : stopIntroSound();
});

function playIntroSound() {
    introSound.play();
}


function stopIntroSound() {
    introSound.pause();
}

function rotateSound () {
  rotateClick.play();
}

rotateButtonBattleship.addEventListener("click", rotatePieceBattleship);

let angle = 0;
function rotatePieceBattleship() {
  const battleshipPiece = document.querySelector(".battleship_layout");
  if (angle === 0) {
    angle = 90;
  } else {
    angle = 0;
  }
  battleshipPiece.style.transform = `rotate(${angle}deg)`;
  rotateSound();
};

rotateButtonCarrier.addEventListener("click", rotatePieceCarrier);


function rotatePieceCarrier() {
  const carrierPiece = document.querySelector(".carrier_layout");
  if (angle === 0) {
    angle = 90;
  } else {
    angle = 0;
  }
  carrierPiece.style.transform = `rotate(${angle}deg)`;
  rotateSound();
};

rotateButtonCruiser.addEventListener("click", rotatePieceCruiser);


function rotatePieceCruiser() {
  const cruiserPiece = document.querySelector(".cruiser_layout");
  if (angle === 0) {
    angle = 90;
  } else {
    angle = 0;
  }
  cruiserPiece.style.transform = `rotate(${angle}deg)`;
  rotateSound();
};

rotateButtonSubmarine.addEventListener("click", rotatePieceSubmarine);


function rotatePieceSubmarine() {
  const submarinePiece = document.querySelector(".submarine_layout");
  if (angle === 0) {
    angle = 90;
  } else {
    angle = 0;
  }
  submarinePiece.style.transform = `rotate(${angle}deg)`;
  rotateSound();
};

rotateButtonDestroyer.addEventListener("click", rotatePieceDestroyer);


function rotatePieceDestroyer() {
  const destroyerPiece = document.querySelector(".destroyer_layout");
  if (angle === 0) {
    angle = 90;
  } else {
    angle = 0;
  }
  destroyerPiece.style.transform = `rotate(${angle}deg)`;
  rotateSound();
};

rotateButtonBattleship2.addEventListener("click", rotatePieceBattleship2);

function rotatePieceBattleship2() {
  const battleshipPiece2 = document.querySelector(".battleship_layout2");
  if (angle === 0) {
    angle = 90;
  } else {
    angle = 0;
  }
  battleshipPiece2.style.transform = `rotate(${angle}deg)`;
  rotateSound();
};

rotateButtonCarrier2.addEventListener("click", rotatePieceCarrier2);


function rotatePieceCarrier2() {
  const carrierPiece2 = document.querySelector(".carrier_layout2");
  if (angle === 0) {
    angle = 90;
  } else {
    angle = 0;
  }
  carrierPiece2.style.transform = `rotate(${angle}deg)`;
  rotateSound();
};

rotateButtonCruiser2.addEventListener("click", rotatePieceCruiser2);


function rotatePieceCruiser2() {
  const cruiserPiece2 = document.querySelector(".cruiser_layout2");
  if (angle === 0) {
    angle = 90;
  } else {
    angle = 0;
  }
  cruiserPiece2.style.transform = `rotate(${angle}deg)`;
  rotateSound();
};

rotateButtonSubmarine2.addEventListener("click", rotatePieceSubmarine2);


function rotatePieceSubmarine2() {
  const submarinePiece2 = document.querySelector(".submarine_layout2");
  if (angle === 0) {
    angle = 90;
  } else {
    angle = 0;
  }
  submarinePiece2.style.transform = `rotate(${angle}deg)`;
  rotateSound();
};

rotateButtonDestroyer2.addEventListener("click", rotatePieceDestroyer2);


function rotatePieceDestroyer2() {
  const destroyerPiece2 = document.querySelector(".destroyer_layout2");
  if (angle === 0) {
    angle = 90;
  } else {
    angle = 0;
  }
  destroyerPiece2.style.transform = `rotate(${angle}deg)`;
  rotateSound();
};


//code for drag and drop functionality 

sourceOne.addEventListener("dragstart", function(evt) {
    evt.dataTransfer.setData("text/plain", evt.target.id);
});

targetOne.addEventListener("dragover", function(evt) {
    evt.preventDefault();
  });

targetOne.addEventListener("drop", function(evt) {
    evt.preventDefault();
    const sourceID = evt.dataTransfer.getData("text/plain");
    evt.target.classList.add("active");
    evt.target.appendChild(document.getElementById(sourceID));
});


sourceTwo.addEventListener("dragstart", function(evt) {
     evt.dataTransfer.setData("text/plain", evt.target.id);
});

 targetTwo.addEventListener("dragover", function(evt) {
   evt.preventDefault();
 });

targetTwo.addEventListener("drop", function(evt) {
     evt.preventDefault();
    const sourceID = evt.dataTransfer.getData("text/plain");
    evt.target.classList.add("active");
    evt.target.appendChild(document.getElementById(sourceID));
});

// ship OOP class

class Ship {
  constructor(name, length) {
      this.name = name
      this.length = length
      this.sunk = false
  }
}

const battleship = new Ship("Battleship", 4)
const carrier = new Ship("Carrier", 5)
const cruiser = new Ship("Cruiser", 3)
const submarine = new Ship("Submarine", 3)
const destroyer = new Ship("Destroyer", 2)

const ships = [battleship, carrier, cruiser, submarine, destroyer];

//start of actual game logic 

let turn = 1;
let winner;
let hit;
let miss;
let scoreCount;
let shipCount; 
let scoresUpdated = false;


const gameDirections = document.querySelectorAll(".game_directions");
const firstMessage = document.querySelector("h1");
const turnMessage = document.getElementById("player_turn");
const turnMessage2 = document.getElementById("player_turns");
const hitMessage = document.getElementById("hit_message");
const winMessage = document.getElementById("win_message");
const winMessage2 = document.getElementById("wins_message");
const playerScore = document.querySelector("h2");
const playerShipsRemain1 = document.getElementById("player1_remains");
const playerShipsRemain2 = document.getElementById("player2_remains");
const restartButton = document.getElementById("replay_button");
const startButton = document.getElementById("start_button");
const remainingShips = document.querySelector("h3");
const bothBoards = document.querySelectorAll("both-boards");
const hitSound = document.getElementById("hit_ship");
const missSound = document.getElementById("miss_ship");
const winSound = document.getElementById("win_game");
let shipPlacementComplete = false;

function playerShipRemain1 () {
  playerShipsRemain1.innerHTML = `${shipCount["1"]}`;
}

function playerShipRemain2 () {
  playerShipsRemain2.innerHTML = `${shipCount["-1"]}`;
}

restartButton.addEventListener("click", resetGame);
startButton.addEventListener("click", startNewGame);

function resetGame() {
  init();
  playContinueClick();
  showShips();
  resetShipPosition1();
  resetShipPosition2();
  showButtons();
  showInstructions();
  remainingShipsToPlace = 10;
  shipPlacementComplete = false;
}

function showInstructions() {
  const instructions = document.querySelector("section .layout_direction");
  instructions.style.visibility = "visible";
}

function resetShipPosition1 () {
  const shipPosition = document.querySelectorAll(".ships1")
  shipPosition.forEach(ship => {
    ship.style.transform = "translate(0, 0)"
  });
}

function resetShipPosition2 () {
  const shipPosition = document.querySelectorAll(".ships2")
  shipPosition.forEach(ship => {
    ship.style.transform = "translate(0, 0)"
  });
}


function showButtons() {
  const rotateButtons = document.querySelectorAll(".rotate_buttons");
  const rotateButtons2 = document.querySelectorAll(".rotate_buttons2");
  const restartButton = document.getElementById("replay_button");
  rotateButtons.forEach(button => {
    button.style.visibility = "visible"
  });
  rotateButtons2.forEach(button => {
    button.style.visibility = "visible"
  });
  restartButton.style.visibility = "visible";
}

const players = {
  "1": "Player 1",
  "-1": "Player 2",
}

init();

function init() {
  scoresUpdated = false;
  winner = null;
  scoreCount = {
    "1": 0,
    "-1": 0,
  }
  turn = 1;
  shipCount = {
    "1": 5,
    "-1": 5,
  };
  render();
}


function render() {
  renderDirections();
  renderWinnerTurnMessage();
}

function renderDirections() {
  return gameDirections;
}

function updatedShipCount() {
  return remainingShips;
};


function renderWinnerTurnMessage() {
  if (winner) {
    winMessage.innerHTML = `${players[winner]}`
    showWinner();
    showWinner2();
    hideTurns();
    hideTurns2();
    hideHitMessage();
    hideStartButton();
    updateScores();
  } else {
    hideWinner();
    hideWinner2();
    turnMessage.innerHTML = `${players[turn]}`
  };
};

function showWinner () {
  winMessage.style.visibility = "visible";
}

function hideWinner () {
  winMessage.style.visibility = "hidden";
}

function showWinner2 () {
  winMessage2.style.visibility = "visible";
}

function hideWinner2 () {
  winMessage2.style.visibility = "hidden";
}

function hideTurns () {
  turnMessage.style.visibility = "hidden";
}

function hideTurns2 () {
  turnMessage2.style.visibility = "hidden";
}

function hideHitMessage () {
  hitMessage.style.visibility = "hidden";
}

function hideStartButton () {
  startButton.style.visibility = "hidden";
}


function updateScores () {
  if (winner && !scoresUpdated) {
      scoreCount[winner]++;
      scoresUpdated = true;
      playWinSound();
  };
  playerScore.innerHTML = `Player 1: ${scoreCount["1"]} <br></br> Player 2: ${scoreCount["-1"]}`;
};


function handleMoveClick (evt) {
  const clickedCell = evt.target;
  if (winner) {
    playWinSound();
    return;
  }
  if (!clickedCell.classList.contains("active")) {
    playMissSound();
    hitMessage.innerHTML = `<span id="hit_message">Miss!</span>`;
    clickedCell.style.backgroundColor = "blue";
    updateShipStatus(clickedCell);
  } else {
    const parentCell = clickedCell.children[0];
    updateShipStatus(parentCell);
    playHitSound();
    hitMessage.innerHTML = `<span id="hit_message">Hit!</span>`;
    clickedCell.style.backgroundColor = "red";
    playerShipRemain1();
    playerShipRemain2();
    if (areAllShipsSunk()) {
      winner = turn;
    }
  };
  turn *= -1;
  render();
  playerShipRemain1();
  playerShipRemain2();
};

document.querySelectorAll(".both_boards").forEach(cell => {
  cell.addEventListener("click", handleMoveClick);
});

//attempting to draw out ship status from placing them within grids 

function updateShipStatus(clickedCell) {
  const shipName = extractShipName(clickedCell);
  if (shipName) {
    const ship = findShipByName(shipName);
    if (ship) {
      ship.length--;
      if (ship.length === 0) {
        ship.sunk = true;
        shipCount[turn]--;
        if (shipCount === 0) {
          winner = turn;
        }
      };
    } else {
      console.log(`No ship found with name "${shipName}"`);
    }
  } else {
    console.log("no ship name found");
  }
};

function areAllShipsSunk() {
  for (const ship of ships) {
    if (!ship.sunk) {
      return false;
    }
  }
  return true;
}

//this is the probelm area, when the grid is clicked it is just reading the grid click and trying to match a ship to it, rather than recognizing there is a ship in it to compare
function extractShipName(element) {
  const classList = element.classList;
  for (const className of classList) {
    const ship = findShipByName(className);
    if (ship) {
      return ship.name;
    }
  }
  console.log("No ship name found");
  return null;
}


function findShipByName(shipName) {
  const cleanedShipName = shipName.trim().toLowerCase();
  for (const ship of ships) {
    if (ship.name.toLowerCase() === cleanedShipName) {
      return ship;
    }
  }
  return null;
}

//rendering different things when restart or start game button pressed 

function hideShips() {
  const ships = document.querySelectorAll('.ship');
  ships.forEach(ship => {
    ship.classList.add('hidden');
  });
}


function showShips() {
  const ships = document.querySelectorAll('.ship');
  ships.forEach(ship => {
    ship.classList.remove('hidden');
  });
}

let remainingShipsToPlace = 10
function placementComplete() {
  remainingShipsToPlace--;
  if (remainingShipsToPlace === 0) {
    shipPlacementComplete = true;
  }
}

function startNewGame() {
  if (!placementComplete) {
    alert("Please complete ship placement before starting the game!");
  } else {
    init();
    hideUI();
    hideShips();
    showStartMessage();
    playContinueClick();
  }
}

function showStartMessage () {
  firstMessage.style.visibility = "visible";
}

function hideUI() {
  const rotateButtons = document.querySelectorAll(".rotate_buttons");
  const rotateButtons2 = document.querySelectorAll(".rotate_buttons2");
  const instructionsLayout = document.querySelector(".layout_direction");
  rotateButtons.forEach(button => {
    button.style.visibility = "hidden"
  });
  rotateButtons2.forEach(button => {
    button.style.visibility = "hidden"
  });
  instructionsLayout.style.visibility = "hidden";
}

function playHitSound() {
  hitSound.play();
}

function playMissSound() {
  missSound.play();
}

function playWinSound() {
  winSound.play();
}

function  playContinueClick() {
  continueClick.play();
}