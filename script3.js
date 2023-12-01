const musicButton = document.getElementById("music_button");
const introSound = document.getElementById("intro_sound");


musicButton.addEventListener("click", function() {
    introSound.paused ? playIntroSound() : stopIntroSound();
});

function playIntroSound() {
    introSound.play();
}

function stopIntroSound() {
    introSound.pause();
}

