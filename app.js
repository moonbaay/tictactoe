let winningCombination = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7],[1,5,9]]
var topRow = [1,2,3];
var middleRow = [4, 5, 6];
var bottomRow = [7, 8, 9];
var leftCol = [1,4,7];
var middleCol = [2,5,8];
var rightCol = [3,6,9];
var crossOne = [1,5,9];
var crossTwo = [3,5,7]
let o = [1,2,3];
const x = [1,3,9];
let circleTurn;
var xMark = "X"
var oMark = "O"
function turn(){
    return circleTurn == circleTurn;
}
console.log(turn())
const currentTurn = circleTurn ? xMark : oMark;

function checkWinner(){
    let winner;
if(winningCombination.some(item => item.every((val,index) => val === o[index]))){
    winner = 'O';
}else if (winningCombination.some(item => item.every((val,index) => val === x[index]))){
    winner = 'X'
}
return winner;
}

function placement(e){
    const target = e.target
   console.log(target)

}
console.log(placement())
console.log(checkWinner())


//compare array
console.log(winningCombination.some(item => item.every((val,index) => val === x[index])));
console.log(topRow.every((val,index) => val === x[index]));

 const button = document.querySelectorAll("button");
 button.forEach((btn)=>{
     btn.addEventListener("click", function () {
       turn();
       console.log(btn.id);
       btn.textContent = currentTurn;
     }, { once: false });
 })