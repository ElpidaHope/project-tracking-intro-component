const hamburger = document.querySelector(".hamburger")
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open")
  menu.classList.toggle("hidden")
})