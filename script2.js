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
    evt.target.appendChild(document.getElementById(sourceID));
});

function startGame() {
  
}

class Ship {
  constructor(name, length) {
      this.name = name
      this.length = length
  }
}

const battleship = new Ship("Battleship", 4)
const carrier = new Ship("Carrier", 5)
const cruiser = new Ship("Cruiser", 3)
const submarine = new Ship("Submarine", 3)
const destroyer = new Ship("Destroyer", 2)

const ships = [battleship, carrier, cruiser, submarine, destroyer];

//hit, miss, and sink functionality//

let turn;
let winner;
let scoreCount;
let shipCount; 
let scoresUpdated = false;


const gameDirections = document.querySelectorAll(".game_directions");
const turnMessage = document.getElementById("player_turn");
const hitMessage = document.getElementById("hit_message");
const missMessage= document.getElementById("miss_message");
const playerScore = document.querySelector("h2");

const players = {
  "1": "Player 1",
  "2": "Player 2",
}

init();

function init() {
  scoresUpdated = false;
  let winner = null;
  let scoreCount = {
    "1": 0,
    "2": 0,
  }
  let turn = 1;
  let shipCount = 5;
  render();
}

function render() {
  renderDirections();
  renderWinnerTurnMessage();
  renderHitMessage();
}

function renderDirections() {
  return gameDirections;
}

function updatedShipCount() {

}


function renderWinnerTurnMessage() {
  if (winner) {
    turnMessage.innerHTML = `<span id="player_turn">${players[winner]}</span> Wins!`
    updateScores();
  } else {
    turnMessage.innerHTML = `<span id="player_turn">${players[turn]}</span>`
  }
}

function renderHitMessage() {

}

function updateScores () {
  if (winner && !scoresUpdated) {
      scoreCount[winner]++;
      scoresUpdated = true;
      playWinSound();
  }
  playerScore.innerHTML = `Player 1: ${scoreCount["1"]} <br></br> Player 2: ${scoreCount["2"]}`;
}

function playWinSound() {
  //fill in with the winning audio when I have time for it//
}

function handleMoveClick (evt) {
  if (evt.target.classList.contains(".ships")) {
    return hitMessage;
  } else {
    return missMessage;
  }
}
