const hamburgerButton = document.getElementById("hamburger");
const navOverlay = document.getElementById("navOverlay");

hamburgerButton.addEventListener("click", () => {
  navOverlay.classList.toggle("hidden");
});

const D = document.getElementById("discount");

const targetPercent = 50;
let currentPercent = 0;

function updatePercent() {
  if (currentPercent < targetPercent) {

    currentPercent++;
    D.textContent = `${currentPercent}%`;
    setTimeout(updatePercent, 10);

  }  
}
updatePercent();