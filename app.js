let winningCombination = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7],[1,5,9]]

let o = [1,3,9];
const x = [1, 2, 3];
let circleTurn;
var xMark = "X"
var oMark = "O"
function turn(){
    return circleTurn != circleTurn;
}

console.log(turn())
const currentTurn = circleTurn ? xMark : oMark;

function checkWinner(){
    var winner;
if(winningCombination.some(item => item.every((val,index) => val === o[index]))){
    winner = oMark;
}else if (winningCombination.some(item => item.every((val,index) => val === x[index]))){
    winner = xMark
}
return winner;
}

// function placement(e){
//     const target = e.target
//    console.log(target)

// }
// console.log(placement())
console.log(checkWinner())


//compare array
// console.log(winningCombination.some(item => item.every((val,index) => val === x[index])));
// console.log(topRow.every((val,index) => val === x[index]));

 const button = document.querySelectorAll("button");
 button.forEach((btn)=>{
     btn.addEventListener("click", function () {
      
        btn.textContent = currentTurn;
         circleTurn = true;
     });
     
 })