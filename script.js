'use strict';

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "🎉 Correct Number!";

// document.querySelector(".score").textContent = 17;
// document.querySelector(".highscore").textContent = 10;

// document.querySelector(".guess").value = 20;

const rnd = function () {
    return Math.trunc(Math.random() * 20 + 1); 
}

let highscore = 0;
let secretNumber = rnd();
let score = 20;
document.querySelector(".flip-card-back").textContent = secretNumber;


document.querySelector('.check').addEventListener ('click', function () {
    const myGuessNum  = Number(document.querySelector(".guess").value);
    
    let textMessage = document.querySelector(".message");

    if (!myGuessNum) {
        textMessage.textContent = "⛔ No Number!";
    } else if (myGuessNum < 0) {
        textMessage.textContent = "⛔ No negative number...";
    } else if (myGuessNum === secretNumber) {
        
        textMessage.textContent = "🏆 Correct number!!";
        debugger;
        document.querySelector(".flip-card-back").classList.add("numberFlip");
        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
            document.querySelector(".highscore-desktop").textContent = highscore;
        }
    } else if (myGuessNum > secretNumber) {
        textMessage.textContent = "📈 Too high!!";
        score--
        document.querySelector(".score").textContent = score;
        document.querySelector("#score-desktop").textContent = score;
    } else if (myGuessNum < secretNumber) {
        textMessage.textContent = "📉 Too low!!"
        score--
        document.querySelector(".score").textContent = score;
        document.querySelector("#score-desktop").textContent = score;
    }
});

document.querySelector("#again").addEventListener('click', function() {

    document.querySelector(".flip-card-back").classList.remove("numberFlip"); // remove class from secret number box
    score = 20 // reset score;
    document.querySelector(".score").textContent = score;
    document.querySelector("#score-desktop").textContent = score;
    secretNumber = rnd(); // new random secret number;
    document.querySelector(".guess").value = "";
    document.querySelector(".message").textContent = "Start guessing...";

})

