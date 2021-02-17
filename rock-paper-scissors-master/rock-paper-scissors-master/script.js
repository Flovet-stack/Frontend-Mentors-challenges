// CREATING THE MODAL
var closeModal = document.querySelector(".close-modal");
var modalBody = document.querySelector(".modal-body");
var modalContainer = document.querySelector(".modal-container");
var rulesBtn = document.querySelector(".rules-btn");

closeModal.addEventListener("click", () => {
    modalContainer.classList.add("hide-modal");
    modalBody.classList.add("close-modal-body");
    modalContainer.classList.remove("show-modal");
    modalBody.classList.remove("open-modal-body");
    setTimeout(() => {
        modalContainer.style.display = "none"
    }, 500)
}); 
modalContainer.addEventListener("click", () => {
    modalContainer.classList.add("hide-modal");
    modalBody.classList.add("close-modal-body");
    modalContainer.classList.remove("show-modal");
    modalBody.classList.remove("open-modal-body");
    setTimeout(() => {
        modalContainer.style.display = "none"
    }, 500)
});
rulesBtn.addEventListener("click", () => {
    modalContainer.classList.remove("hide-modal");
    modalBody.classList.remove("close-modal-body");
    modalContainer.classList.add("show-modal");
    modalBody.classList.add("open-modal-body");
    setTimeout(() => {
        modalContainer.style.display = "grid"
    }, 0)
});


// CREATING THE GAME LOGIC
var paper = document.querySelector("#paper");
var scissors = document.querySelector("#scissors");
var rock = document.querySelector("#rock");
var gameCanvas = document.querySelector(".game-canvas");
var gamePlaySub = document.querySelector(".game-play-sub");
var con1 = document.querySelector(".con-1");
var con2 = document.querySelector(".con-2");
var con3 = document.querySelector(".con-3");
var con = document.querySelector(".con");
var compCon = document.getElementById("comp");


paper.addEventListener("click", () => {
    gamePlaySub.style.background = "none";
    con.style.transform = "translateY(50%)";
    con.style.transitionDuration = ".5s";
    con2.style.width = "0%";
    con2.style.transform = "scale(.0001)";
    con2.style.transitionDuration = ".5s";
    con3.style.transform = "scale(.0001)"
    con3.style.bottom = "25%"
    con3.style.transitionDuration = ".5s";
    compCon.style.display = "grid";
    paper.style.transform = "scale(1.3)";
    // compCon.appendChild

    setTimeout(() => {
        computerPending();
    }, 1500);
});

scissors.addEventListener("click", () => {
    gamePlaySub.style.background = "none";
    con.style.transform = "translateY(50%)";
    con.style.transitionDuration = ".5s";
    con1.style.width = "0%";
    con1.style.transform = "scale(.0001)";
    con1.style.left = "50%";
    con1.style.transitionDuration = ".5s";
    con3.style.transform = "scale(.0001)"
    con3.style.bottom = "25%"
    con3.style.transitionDuration = ".5s";
    compCon.style.display = "grid";
    scissors.style.transform = "scale(1.3)";

    setTimeout(() => {
        computerPending();
    }, 1500);
});

rock.addEventListener("click", () => {
    gamePlaySub.style.background = "none";
    con.style.transform = "translateY(50%)";
    con.style.transitionDuration = ".5s";
    con2.style.width = "0%";
    con2.style.transform = "scale(.0001)";
    con2.style.transitionDuration = ".5s";
    con1.style.width = "0%";
    con1.style.transform = "scale(.0001)";
    con1.style.transitionDuration = ".5s";
    con1.style.left = "0%";
    con3.style.transform = "translateX(0)"
    con3.style.left = "0"
    con3.style.height = "100%"
    con3.style.transitionDuration = ".5s";
    con.style.flexDirection = "row-reverse"
    con.appendChild(con3);
    compCon.style.display = "grid";
    rock.style.transform = "scale(1.3)";

    setTimeout(() => {
        computerPending();
    }, 1500);
});

function computerPending() {
    // The computers turn to play
    var comp = Math.floor(Math.random() * 3);
    console.log(comp);
    
    if (comp === 0) {
        console.log("computer picked paper");
        compCon.appendChild(paper);
        paper.style.transform = "scale(1.3)";
        paper.style.transitionDuration = ".5s";
    } else if (comp === 1){
        console.log("computer picked scissors");
        compCon.appendChild(scissors);
        scissors.style.transform = "scale(1.3)";
        scissors.style.transitionDuration = ".5s";
    } else if (comp === 2) {
        console.log("computer picked rock");
        compCon.appendChild(rock);
        rock.style.transform = "scale(1.3)";
        rock.style.transitionDuration = ".5s";
    }

}



