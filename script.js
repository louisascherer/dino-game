const dolphin = document.getElementById("dolphin");
const algae = document.getElementById("algae");
const score = document.getElementById("score");
const startButton = document.getElementById("startButton");

let gameRunning = false;

function startGame() {
    console.log("Das Spiel wurde gestartet!");
    gameRunning = true;
    algae.style.animationPlayState = "running";
    startButton.style.display = "none";
}

startButton.addEventListener("click", startGame);

function jump() {
    if (gameRunning) {
        dolphin.classList.add("jump-animation");
        setTimeout(() => dolphin.classList.remove("jump-animation"), 500);
    }
}

document.addEventListener("keydown", (event) => {
    if (event.code === "Space" || event.key === " ") {
        if (!dolphin.classList.contains("jump-animation") && gameRunning) {
            jump();
        }
    }
});

setInterval(() => {
    if (!gameRunning) return;

    const dolphinTop = parseInt(window.getComputedStyle(dolphin).getPropertyValue("top"));
    const algaeLeft = parseInt(window.getComputedStyle(algae).getPropertyValue("left"));

    let currentScore = parseInt(score.innerText);
    score.innerText = currentScore + 1;

    if (algaeLeft < 100 && algaeLeft > 0 && dolphinTop > 160) {

        gameRunning = false;
        algae.style.animationPlayState = "paused";

        dolphin.classList.add("collision-animation");

  
        setTimeout(() => {
            alert("Game Over! Dein Score: " + score.innerText);

            dolphin.classList.remove("collision-animation");
            location.reload(); 
        }, 800);
    }
}, 50);
