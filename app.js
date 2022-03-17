let winningCombination = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
  [1, 5, 9],
];

let o = [];
let x = [];
let circleTurn;
var xMark = "X";
var oMark = "O";
var slot = [];
var currentColor;
var blue = '#0060AA'
var red= '#E20025'
var winner;
var message = document.querySelector(".message");
var messageModal = document.querySelector(".show-message");

let currentTurn = circleTurn ? xMark : oMark;
let color = currentColor ? blue : red;
console.log(color)
function placement(e) {
  const box = e.target;
  const id = parseInt(box.id);

  if (currentTurn) {
    box.innerHTML = currentTurn;
    box.style.color = color;
    currentTurn = currentTurn === oMark ? xMark : oMark;
    color = color === red ? blue:red;
  }
  if (currentTurn === oMark) {
    x.push(id);
    slot.push(id);
  } else if (currentTurn === xMark) {
    o.push(id);
    slot.push(id);
  }
  if (checkWinner()) {
    messageModal.style.visibility = "visible";
    message.textContent = `the winner is ${checkWinner()}`;
  } else if (slot.length == 9 && !checkWinner()) {
    messageModal.style.visibility = "visible";
    message.textContent = `It's a draw`;
  }
}

function checkWinner() {
  if (winningCombination.some((item) => item.every((val) => o.includes(val)))) {
    winner = oMark;
  } else if (
    winningCombination.some((item) => item.every((val) => x.includes(val)))
  ) {
    winner = xMark;
  }
  //shorter
  //winningCombination.some(item => item.every(o.includes)
  return winner;
}

//compare array
// console.log(winningCombination.some(item => item.every((val,index) => val === x[index])));
// console.log(topRow.every((val,index) => val === x[index]));

const button = document.querySelectorAll(".btn-cell");
button.forEach((btn) => {
  btn.addEventListener("click", placement);
});

function newGame() {
  x = [];
  o = [];
  slot = [];
  winner = "";
  messageModal.style.visibility = "hidden";
  message.textContent = winner;
  button.forEach((btn) => {
    btn.textContent = "";
    currentTurn = circleTurn ? xMark : oMark;
  });
}
const reset = document.querySelector(".reset");

reset.addEventListener("click", function () {
  newGame();
});
