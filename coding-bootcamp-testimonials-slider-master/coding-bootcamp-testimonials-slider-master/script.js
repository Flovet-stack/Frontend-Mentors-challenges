var btn1 = document.querySelector(".btn-1");
var btn2 = document.querySelector(".btn-2");
var con1 = document.querySelector(".con-1");
var con2 = document.querySelector(".con-2");
var img1 = document.querySelector(".img-1");
var img2 = document.querySelector(".img-2");

btn1.addEventListener("click", () => {
    con2.classList.add("show");
    con1.classList.remove("show");
    img2.classList.add("show");
    img1.classList.remove("show");
    console.log("btn-1 success");
});

btn2.addEventListener("click", () => {
    con1.classList.add("show");
    con2.classList.remove("show");
    img1.classList.add("show");
    img2.classList.remove("show");
    console.log("btn-2 success");
});