const introSound = document.getElementById("intro_sound");
const musicButton = document.getElementById("play_music");
const continueButton = document.getElementById("continue_button");
const continueButtonClick = document.getElementById("continue_click");
const rotateButtonBattleship = document.getElementById("rotate_battleship");
const rotateButtonCarrier = document.getElementById("rotate_carrier");
const rotateButtonCruiser = document.getElementById("rotate_cruiser");
const rotateButtonSubmarine = document.getElementById("rotate_submarine");
const rotateButtonDestroyer = document.getElementById("rotate_destroyer");
//"source" is the item you want to drag, "target" is where you want that source to be dragged to
const source = document.querySelector(".source");
const target = document.querySelector(".target");

continueButton.addEventListener("click", function() {
    playContinueButton();
    setInterval(function() {
        window.location.href="index3.html";
    }, 1000);
});

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
  const battleshipPiece = document.getElementById("battleship");
  if (angle === 0) {
    angle = 90;
  } else {
    angle = 0;
  }
  battleshipPiece.style.transform = `rotate(${angle}deg)`;
};

rotateButtonCarrier.addEventListener("click", rotatePieceCarrier);


function rotatePieceCarrier() {
  const carrierPiece = document.getElementById("carrier");
  if (angle === 0) {
    angle = 90;
  } else {
    angle = 0;
  }
  carrierPiece.style.transform = `rotate(${angle}deg)`;
};

rotateButtonCruiser.addEventListener("click", rotatePieceCruiser);


function rotatePieceCruiser() {
  const cruiserPiece = document.getElementById("cruiser");
  if (angle === 0) {
    angle = 90;
  } else {
    angle = 0;
  }
  cruiserPiece.style.transform = `rotate(${angle}deg)`;
};

rotateButtonSubmarine.addEventListener("click", rotatePieceSubmarine);


function rotatePieceSubmarine() {
  const submarinePiece = document.getElementById("submarine");
  if (angle === 0) {
    angle = 90;
  } else {
    angle = 0;
  }
  submarinePiece.style.transform = `rotate(${angle}deg)`;
};

rotateButtonDestroyer.addEventListener("click", rotatePieceDestroyer);


function rotatePieceDestroyer() {
  const destroyerPiece = document.getElementById("destroyer");
  if (angle === 0) {
    angle = 90;
  } else {
    angle = 0;
  }
  destroyerPiece.style.transform = `rotate(${angle}deg)`;
};

//using OOP with classes to make a ship class to describe all 5 ships
class Ships {
    constructor(name, length) {
        this.name = name
        this.length = length
    }
}

const battleship = new Ships("Battleship", 4)
const carrier = new Ships("Carrier", 5)
const cruiser = new Ships("Cruiser", 3)
const submarine = new Ships("Submarine", 3)
const destroyer = new Ships("Destroyer", 2)


source.addEventListener("dragstart", function(evt) {
    evt.dataTransfer.setData("image/png", evt.target.id);
});

target.addEventListener("dragover", function(evt) {
    evt.preventDefault();
});

target.addEventListener("drop", function(evt) {
    evt.preventDefault();
    const sourceID = evt.dataTransfer.getData("image/png");
    evt.target.appendChild(document.getElementById(sourceID));
});

