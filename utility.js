const hamburgerButton = document.getElementById("hamburger");
const navOverlay = document.getElementById("navOverlay");

hamburgerButton.addEventListener("click", () => {
  navOverlay.classList.toggle("hidden");
});
