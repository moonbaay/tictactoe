let winningCombination = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7],[1,5,9]]

let o = [];
let x = [];
let circleTurn;
var xMark = "X"
var oMark = "O"
var winner;
var message = document.querySelector('.message');

function convert2DArray(array,part) {
    let newArr = [];

    for(let i = 0; i< array.length; i+=part) {
        newArr.push(array.slice(i,i+part));
    }

    return newArr;
}

function turn(){
    return circleTurn != circleTurn;
}

let currentTurn = circleTurn ? xMark : oMark;

 
function placement(e){
    const box = e.target;
    const id = parseInt(box.id);
    
    if(currentTurn){
        box.textContent = currentTurn;
        currentTurn = currentTurn === oMark ? xMark :oMark;
    }
    if(currentTurn === oMark){
        x.push(id);
        
        
    }else if(currentTurn === xMark){
        o.push(id);
    }
    if(checkWinner()){
        message.textContent = `the winner is ${checkWinner()}`;
    }
   
}
 

function checkWinner(){
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

 const button = document.querySelectorAll("button");
 button.forEach((btn)=>{
    btn.addEventListener("click", placement,{once:true});
     
 })