var dinosaur = document.getElementById("dinosaur"),
    block = document.getElementById("block"),
    message = document.getElementById("msg"),
    scoreSpan = document.getElementById("scoreSpan"),
    frameCounter = 0,
    gameState = 0;
function jump() {
    if (gameState != 1) {
        if (gameState == 2) {
            frameCounter = 0;
            scoreSpan.textContent = 0;
            block.style.animation = "none";
            block.offsetWidth;
        }
        gameState = 1;
        message.textContent = "";
        dinosaur.classList.remove("blink");
        block.style.animation = "block 1s infinite linear";
        return;
    }
    if (dinosaur.classList.contains("animate")) return;
    dinosaur.classList.add("animate");
    setTimeout(function () {
        dinosaur.classList.remove("animate");
    }, 300);
}
document.onkeydown = function (event) {
    event.code == "Space" && (event.preventDefault(), jump());
};
setInterval(function () {
    if (gameState != 1) return;
    var dinosaurTop = parseInt(getComputedStyle(dinosaur).top),
        blockLeft = parseInt(getComputedStyle(block).left);
    if (blockLeft < 20 && blockLeft > -20 && dinosaurTop >= 330) {
        gameState = 2;
        block.style.animation = "none";
        message.textContent = "GAME OVER — " + (frameCounter / 100 | 0) + " — SPACE";
    } else {
        frameCounter++;
        scoreSpan.textContent = frameCounter / 100 | 0;
    }
}, 10);
