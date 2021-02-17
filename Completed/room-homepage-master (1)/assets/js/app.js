// creating the navigator
var  hamburger = document.querySelector(".hamburger");
var  cross = document.querySelector(".cross");
var  mobileNav = document.querySelector("#ul-con");

console.log(hamburger.innerHTML);

hamburger.addEventListener("click", () => {
    mobileNav.classList.add("show-nav");
});

cross.addEventListener("click", () => {
    mobileNav.classList.remove("show-nav");
});

// giving life to the carousel
var carousel = document.querySelector(".carousel-1"); 
var carouselMobile = document.querySelector(".carousel-1.mobile"); 
var con1 = document.querySelector("#con-1"); 
var con2 = document.querySelector("#con-2"); 
var con3 = document.querySelector("#con-3"); 
var btns1 = document.querySelector("#btns-1"); 
var btns2 = document.querySelector("#btns-2"); 
var btns3 = document.querySelector("#btns-3"); 
var t3f1 = document.querySelector(".t3f1");
var t2f1 = document.querySelector(".t2f1");
var t1f2 = document.querySelector(".t1f2");
var t3f2 = document.querySelector(".t3f2");
var t2f3 = document.querySelector(".t2f3");
var t1f3 = document.querySelector(".t1f3");

// var img1 = document.querySelector("img-1");

// img1.getAttribute("style").replace("background: url(images/image-about-light.jpg);");

//moving to carousel 2 from carousel 1
t2f1.addEventListener("click", () => {
    //changing the background image
    carousel.classList.remove("bg-1");
    carousel.classList.remove("bg-3");
    carousel.classList.add("bg-2");
    carouselMobile.classList.remove("bg-1");
    carouselMobile.classList.remove("bg-3");
    carouselMobile.classList.add("bg-2");
    // changing the text content
    con2.classList.remove("hide");
    con2.classList.add("show");
    con1.classList.add("hide");
    con3.classList.add("hide");
    //changing the carousel toggle buttons
    btns1.classList.remove("show-btn");
    btns1.classList.add("hide-btn");
    btns3.classList.remove("show-btn");
    btns3.classList.add("hide-btn");
    btns2.classList.remove("hide-btn");
    btns2.classList.add("show-btn");
});
//moving to carousel 3 from carousel 1
t3f1.addEventListener("click", () => {
    //changing the background image
    carousel.classList.remove("bg-1");
    carousel.classList.remove("bg-2");
    carousel.classList.add("bg-3");
    carouselMobile.classList.remove("bg-1");
    carouselMobile.classList.remove("bg-2");
    carouselMobile.classList.add("bg-3");
    // changing the text content
    con3.classList.remove("hide");
    con3.classList.add("show");
    con1.classList.add("hide");
    con2.classList.add("hide");
    //changing the carousel toggle buttons
    btns1.classList.remove("show-btn");
    btns1.classList.add("hide-btn");
    btns2.classList.remove("show-btn");
    btns2.classList.add("hide-btn");
    btns3.classList.remove("hide-btn");
    btns3.classList.add("show-btn");
});

//moving to carousel 1 from carousel 2
t1f2.addEventListener("click", () => {
    //changing the background image
    carousel.classList.remove("bg-3");
    carousel.classList.remove("bg-2");
    carousel.classList.add("bg-1");
    carouselMobile.classList.remove("bg-3");
    carouselMobile.classList.remove("bg-2");
    carouselMobile.classList.add("bg-1");
    // changing the text content
    con1.classList.remove("hide");
    con1.classList.add("show");
    con3.classList.add("hide");
    con2.classList.add("hide");
    //changing the carousel toggle buttons
    btns3.classList.remove("show-btn");
    btns3.classList.add("hide-btn");
    btns2.classList.remove("show-btn");
    btns2.classList.add("hide-btn");
    btns1.classList.remove("hide-btn");
    btns1.classList.add("show-btn");
});
//moving to carousel 3 from carousel 2
t3f2.addEventListener("click", () => {
    //changing the background image
    carousel.classList.remove("bg-1");
    carousel.classList.remove("bg-2");
    carousel.classList.add("bg-3");
    carouselMobile.classList.remove("bg-1");
    carouselMobile.classList.remove("bg-2");
    carouselMobile.classList.add("bg-3");
    // changing the text content
    con3.classList.remove("hide");
    con3.classList.add("show");
    con1.classList.add("hide");
    con2.classList.add("hide");
    //changing the carousel toggle buttons
    btns1.classList.remove("show-btn");
    btns1.classList.add("hide-btn");
    btns2.classList.remove("show-btn");
    btns2.classList.add("hide-btn");
    btns3.classList.remove("hide-btn");
    btns3.classList.add("show-btn");
});

//moving to carousel 2 from carousel 3
t2f3.addEventListener("click", () => {
    //changing the background image
    carousel.classList.remove("bg-1");
    carousel.classList.remove("bg-3");
    carousel.classList.add("bg-2");
    carouselMobile.classList.remove("bg-1");
    carouselMobile.classList.remove("bg-3");
    carouselMobile.classList.add("bg-2");
    // changing the text content
    con2.classList.remove("hide");
    con2.classList.add("show");
    con1.classList.add("hide");
    con3.classList.add("hide");
    //changing the carousel toggle buttons
    btns1.classList.remove("show-btn");
    btns1.classList.add("hide-btn");
    btns3.classList.remove("show-btn");
    btns3.classList.add("hide-btn");
    btns2.classList.remove("hide-btn");
    btns2.classList.add("show-btn");
});
//moving to carousel 1 from carousel 3
t1f3.addEventListener("click", () => {
    //changing the background image
    carousel.classList.remove("bg-3");
    carousel.classList.remove("bg-2");
    carousel.classList.add("bg-1");
    carouselMobile.classList.remove("bg-3");
    carouselMobile.classList.remove("bg-2");
    carouselMobile.classList.add("bg-1");
    // changing the text content
    con1.classList.remove("hide");
    con1.classList.add("show");
    con3.classList.add("hide");
    con2.classList.add("hide");
    //changing the carousel toggle buttons
    btns3.classList.remove("show-btn");
    btns3.classList.add("hide-btn");
    btns2.classList.remove("show-btn");
    btns2.classList.add("hide-btn");
    btns1.classList.remove("hide-btn");
    btns1.classList.add("show-btn");
});
 setInterval (()=>{},1000)
