document.addEventListener("DOMContentLoaded", () => {
    const playerButton = document.getElementById("playerButton");
    const parentButton = document.getElementById("parentButton");
    const playerRules = document.getElementById("playerRules");
    const parentRules = document.getElementById("parentRules");
  
    playerButton.addEventListener("click", () => {
      playerRules.classList.add("active");
      parentRules.classList.remove("active");
      playerButton.classList.add("active");
      parentButton.classList.remove("active");
    });
  
    parentButton.addEventListener("click", () => {
      parentRules.classList.add("active");
      playerRules.classList.remove("active");
      parentButton.classList.add("active");
      playerButton.classList.remove("active");
    });
  });
  