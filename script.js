'use strict';

// Function randomizer
const rnd = function () {
  return Math.trunc(Math.random() * 20 + 1);
};


// Global variable
let highscore = 0;
let secretNumber = rnd();
let score = 20;

// Primary listener
document.querySelector('.check').addEventListener('click', function () {

  const myGuessNum = Number(document.querySelector('.guess').value);
  let textMessage = document.querySelector('.message');

  // No number case
  if (!myGuessNum) {
    textMessage.textContent = '⛔ No Number!';

  // Negative number case  
  } else if (myGuessNum < 0) {
    textMessage.textContent = '⛔ No negative number...';

  // Secret number guessed case
  } else if (myGuessNum === secretNumber) {
    document.querySelector('.flip-card-back').textContent = secretNumber;
    textMessage.textContent = '🏆 Correct number!!';
    document.querySelector('.flip-card-back').classList.add('numberFlip');

    // HI-score control and update
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
      document.querySelector('.highscore-desktop').textContent = highscore;
    }

  // Case in which number is different from secret number  
  } else if (myGuessNum !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('#score-desktop').textContent = score;
      textMessage.textContent = myGuessNum > secretNumber ? '📈 Too high!!' : '📉 Too low!!'; // Ternary operatore to check if number is greater or smaller than secret number

    // Case in which score is 0  
    } else {
        textMessage.textContent = '💥 You lost the game!!';
        document.querySelector(".score").textContent = 0;
    }
  } 
});


// Secondary listener, sorta of reset
document.querySelector('#again').addEventListener('click', function () {

  // remove class from secret number box
  document.querySelector('.flip-card-back').classList.remove('numberFlip');
  // reset score;
  score = 20;
  // new random secret number;
  secretNumber = rnd();
  
  // Update Dom
  document.querySelector('.score').textContent = score;
  document.querySelector('#score-desktop').textContent = score;

  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
});
