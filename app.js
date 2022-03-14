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

function checkWinner(){
    
if(winningCombination.some(item => item.every((val,index) => val === o[index]))){
    winner = oMark;
}else if (winningCombination.some(item => item.every((val,index) => val === x[index]))){
    winner = xMark;
}
return winner;
}

function placement(e){
    const box = e.target;
    const id = parseInt(box.id);
    
    if(currentTurn){
        box.textContent = currentTurn;
        currentTurn = currentTurn === oMark ? xMark :oMark;
    }
    if(currentTurn === oMark){
        x.push(id);
        
    }
    if(currentTurn === xMark){
        o.push(id);
    }
    message.textContent = checkWinner();
    console.log(x);
}

//compare array
// console.log(winningCombination.some(item => item.every((val,index) => val === x[index])));
// console.log(topRow.every((val,index) => val === x[index]));

 const button = document.querySelectorAll("button");
 button.forEach((btn)=>{
     btn.addEventListener("click", placement,{once:true});
     
 })