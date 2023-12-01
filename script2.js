//constants//
const introSound = document.getElementById("intro_sound");
const musicButton = document.getElementById("play_music");
const continueButton = document.getElementById("continue_button");
const continueButtonClick = document.getElementById("continue_click");
const rotateButtonBattleship = document.getElementById("rotate_battleship");
const rotateButtonCarrier = document.getElementById("rotate_carrier");
const rotateButtonCruiser = document.getElementById("rotate_cruiser");
const rotateButtonSubmarine = document.getElementById("rotate_submarine");
const rotateButtonDestroyer = document.getElementById("rotate_destroyer");
const sourceOne = document.querySelector(".source_1");
const targetOne = document.querySelector(".target_1");
const sourceTwo = document.querySelector(".source_2");
const targetTwo = document.querySelector(".target_2");

//buttons//
continueButton.addEventListener("click", startGame) 
//     playContinueButton();
//     setInterval(function() {
//         //need to add for it to start the next phase of game//
//     }, 1000);
// });

musicButton.addEventListener("click", function() {
    introSound.paused ? playIntroSound() : stopIntroSound();
});

function playIntroSound() {
    introSound.play();
}

function playContinueButton() {
    continueButtonClick.play();
}

function stopIntroSound() {
    introSound.pause();
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
};

//drag and drop//

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

function startGame() {
  
}

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

//hit, miss, and sink functionality//

let turn = 1;
let winner;
let hit;
let miss;
let scoreCount;
let shipCount; 
let scoresUpdated = false;


const gameDirections = document.querySelectorAll(".game_directions");
const turnMessage = document.getElementById("player_turn");
const hitMessage = document.getElementById("hit_message");
const playerScore = document.querySelector("h2");
const restartButton = document.getElementById("replay_button");
const remainingShips = document.querySelector("h3");
const bothBoards = document.querySelectorAll("both-boards");

restartButton.addEventListener("click", init);

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
  shipCount = 5;
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


function getWinner () {
  return winner;
};

function renderWinnerTurnMessage() {
  if (winner) {
    turnMessage.innerHTML = `<span id="player_turn">${players[winner]}</span> Wins!`
    updateScores();
  } else {
    turnMessage.innerHTML = `${players[turn]}`
  };
};

function updateScores () {
  if (winner && !scoresUpdated) {
      scoreCount[winner]++;
      scoresUpdated = true;
      playWinSound();
  };
  playerScore.innerHTML = `Player 1: ${scoreCount["1"]} <br></br> Player 2: ${scoreCount["-1"]}`;
};

function playWinSound() {
  //fill in with the winning audio when I have time for it//
};

function handleMoveClick (evt) {
  const clickedCell = evt.target;
  if (clickedCell.classList.contains("active")) {
    hitMessage.innerHTML = `<span id="hit_message">Hit!</span>`;
    clickedCell.style.backgroundColor = "red";
    updateShipStatus(clickedCell);
    if (areAllShipsSunk()) {
      winner = turn;
    }
  } else {
    hitMessage.innerHTML = `<span id="hit_message">Miss!</span>`;
    clickedCell.style.backgroundColor = "blue";
  };
  turn *= -1;
  render();
};

document.querySelectorAll(".both_boards").forEach(cell => {
  cell.addEventListener("click", handleMoveClick);
});

function updateShipStatus(clickedCell) {
  const shipName = extractShipName(clickedCell);
  if (shipName) {
    const ship = findShipByName(shipName);
    ship.length--;
    if (ship.length === 0) {
      ship.sunk = true;
      shipCount--;
      if (shipCount === 0) {
        winner = turn;
      };
    };
  };
};



function areAllShipsSunk() {
  for (const ship of ships) {
    if (!ship.sunk) {
      return false;
    }
  }
  return true;
}

function extractShipName(element) {
  const classList = element.classList;
  for (const className of classList) {
    if (className.includes("layout")) {
      return className;
    };
  }
  return null;
}

function findShipByName(shipName) {
  for (const ship of ships) {
    if (ship.name === shipName) {
      return ship;
    };
  };
  return null;
}
