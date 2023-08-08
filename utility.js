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

const modal = document.getElementById("my_modal_1");
const closeModalButton = document.getElementById("closeModalButton");

closeModalButton.addEventListener("click", () => {
    const modalContent = modal.querySelector(".modal-box");
    modalContent.classList.add("closing");
    setTimeout(() => {
        modal.close();
        modalContent.classList.remove("closing");
    }, 300); // Adjust the timing to match your desired animation duration
});
