const introSound = document.getElementById("intro_sound");
const musicButton = document.getElementById("play_music");
const startButton = document.getElementById("start_button");
const startButtonClick = document.getElementById("start_click");

startButton.addEventListener("click", function() {
    playStartButton();
    window.location.href="index2.html";
});

musicButton.addEventListener("click", function() {
    playIntroSound();
});

function playIntroSound() {
    introSound.play();
}

function playStartButton() {
    startButtonClick.play();
}