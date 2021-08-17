//selectors
const cards = document.querySelectorAll(".card");
const match = document.querySelector("#match");
const remaining = document.querySelector("#flip-remaining");

const start = document.querySelector("#start");
const restart = document.querySelector("#restart");
const gameOver = document.querySelector("#game-over");

//variables
let matches = 0;
let remains = 10;
let hasFlipped = false;
let lockBoard = true;
let firstCard, secondCard;

remaining.innerHTML = `${remains}`;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flip");

  if (!hasFlipped) {
    //firstCard
    hasFlipped = true;
    firstCard = this;
    return;
  }
  //secondCard
  hasFlipped = false;
  secondCard = this;

  checkMatch();
}

function checkMatch() {
  //matching
  let firstVal = firstCard.dataset.company;
  let secondVal = secondCard.dataset.company;
  let isMatch = firstVal === secondVal;

  isMatch ? disable() : unflip();
  if (matches == 6 || remains <= 0) {
    gameOver.classList.add("visible");
    lockBoard = true;
  }
}

//avoid double clicking and match
function disable() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  matches++;
  match.innerHTML = `${matches}`;
  remains--;
  remaining.innerHTML = `${remains}`;

  reset();
}

//not a match
function unflip() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    remains--;
    remaining.innerHTML = `${remains}`;

    reset();
  }, 1000);
}

//return to inital state
function reset() {
  [hasFlipped, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function shuffle() {
  cards.forEach((card) => {
    let randomNum = Math.floor(Math.random() * 12);
    card.style.order = randomNum;
  });
}

start.addEventListener("click", () => {
  lockBoard = false;
  start.classList.remove("visible");
  shuffle();
});

cards.forEach((card) => card.addEventListener("click", flipCard));

// //IIFE for shuffle
// // (function shuffle() {
// //   cards.forEach((card) => {
// //     let randomNum = Math.floor(Math.random() * 12);
// //     card.style.order = randomNum;
// //   });
// // })();
