window.addEventListener("load", () => {
  const game = document.getElementById("game");
  const dino = document.getElementById("dino");
  const rock = document.getElementById("rock");
  const scoreEl = document.getElementById("score");
  const gameOverEl = document.getElementById("gameOver");

  let points = 0;
  let gameOver = false;

  scoreEl.innerText = points;

  game.focus();

  function jump() {
    if (gameOver) return;
    if (dino.classList.contains("jump-animation")) return;

    dino.classList.add("jump-animation");
    setTimeout(() => dino.classList.remove("jump-animation"), 500);
  }

  function restart() {
    gameOver = false;
    points = 0;
    scoreEl.innerText = points;

    rock.style.animation = "none";
    void rock.offsetWidth;
    rock.style.animation = "rock 1.33s infinite linear";
    rock.style.left = "550px";

    dino.classList.remove("jump-animation");
    dino.style.top = "225px";

    gameOverEl.classList.add("hidden");

    game.focus();
  }

  function handleKeyDown(e) {
    if (e.code === "KeyR" && gameOver) {
      e.preventDefault();
      restart();
      return;
    }

    if (e.code === "Space" || e.code === "ArrowUp" || e.code === "KeyW") {
      e.preventDefault();
      jump();
    }
  }

  game.addEventListener("keydown", handleKeyDown);

  game.addEventListener("click", () => {
    game.focus();
    jump();
  });

  game.addEventListener("touchstart", () => {
    game.focus();
    jump();
  });

  setInterval(() => {
    if (gameOver) return;

    const dinoTop = parseInt(getComputedStyle(dino).getPropertyValue("top"));
    const rockLeft = parseInt(getComputedStyle(rock).getPropertyValue("left"));

    points += 1;
    scoreEl.innerText = points;

    if (rockLeft < 90 && rockLeft > 20 && dinoTop > 165) {
      gameOver = true;

      rock.style.animation = "none";
      rock.style.left = rockLeft + "px";

      gameOverEl.classList.remove("hidden");
    }
  }, 100);
});
