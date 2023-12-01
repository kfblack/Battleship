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
  const battleshipPiece = document.querySelector(".battleship_layout");
  // const battleshipPiece = document.getElementById("battleship");
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
    // evt.dataTransfer.setData("image/png", evt.target.id);
    evt.dataTransfer.setData("text/plain", evt.target.id);
});

targetOne.addEventListener("dragover", function(evt) {
    evt.preventDefault();
  });

targetOne.addEventListener("drop", function(evt) {
    evt.preventDefault();
    // const sourceID = evt.dataTransfer.getData("image/png");
    const sourceID = evt.dataTransfer.getData("text/plain");
    evt.target.appendChild(document.getElementById(sourceID));
});


sourceTwo.addEventListener("dragstart", function(evt) {
     // evt.dataTransfer.setData("image/png", evt.target.id);
     evt.dataTransfer.setData("text/plain", evt.target.id);
});

 targetTwo.addEventListener("dragover", function(evt) {
   evt.preventDefault();
 });

targetTwo.addEventListener("drop", function(evt) {
     evt.preventDefault();
    // const sourceID = evt.dataTransfer.getData("image/png");
    const sourceID = evt.dataTransfer.getData("text/plain");
    evt.target.appendChild(document.getElementById(sourceID));
});

// function addShipPiece(ship, startId) {
//   const allBoardBlocks = document.getElementById("board_pieces");
//   let isHorizontal = angle === 0;
//   let startIndex = startId;
//   let shipBlocks = [];
//   for (let i=0; i < ship.length; i++) {
//     if (isHorizontal) {
//       shipBlocks.push(allBoardBlocks[startIndex + i]);
//     } else {
//       shipBlocks.push(allBoardBlocks[startIndex + i * width]); 
//     }
//     shipBlocks.forEach(shipBlock => {
//       shipBlock.classList.add(ship.name);
//       shipBlock.classList.add("taken");
//     });
//   }
// }

// ships.forEach(ship => addShipPiece(ship));
//NEED TO GO BACK AND MAKE THIS FUNCTION TO DIFFERENTIATE BETWEEN PLAYER 1 AND 2 


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
// let notDropped;