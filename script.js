const dolphin = document.getElementById("dolphin")
const algae = document.getElementById("rock")
const score = document.getElementById("score")

function jump() {
  dolphin.classList.add("jump-animation")
  setTimeout(() => dolphin.classList.remove("jump-animation"), 800)
}

document.addEventListener("keypress", (event) => {
  if (!dolphin.classList.contains("jump-animation")) {
    jump()
  }
})

setInterval(() => {
  const dolphinTop = parseInt(
    window.getComputedStyle(dolphin).getPropertyValue("top"),
  )
  const algaeLeft = parseInt(
    window.getComputedStyle(algae).getPropertyValue("left"),
  )
  score.innerText++

  if (algaeLeft < 0) {
    algae.style.display = "none"
  } else {
    algae.style.display = ""
  }

  if (algaeLeft < 50 && algaeLeft > 0 && dolphinTop > 150) {
    alert("You got a score of: " + score.innerText +
      "\n\nPlay again?");
    location.reload();
    score.innerText = 0
    }
}, 50)
