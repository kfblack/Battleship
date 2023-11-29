const introSound = document.getElementById("intro_sound");
const musicButton = document.getElementById("play_music");
const startButton = document.getElementById("start_button");
const startButtonClick = document.getElementById("start_click");

startButton.addEventListener("click", function() {
    playStartButton();
    setInterval(function() {
        window.location.href="index2.html";
    }, 1000);
});

musicButton.addEventListener("click", function() {
    introSound.paused ? playIntroSound() : stopIntroSound();
});

function playIntroSound() {
    introSound.play();
}

function playStartButton() {
    startButtonClick.play();
}

function stopIntroSound() {
    introSound.pause();
}