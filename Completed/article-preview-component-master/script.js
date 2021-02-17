var btn = document.querySelector(".share-btn");
var shareMenu = document.querySelector(".share");

btn.addEventListener("click", () => {
    shareMenu.classList.toggle("show");
    btn.classList.toggle("index");
})