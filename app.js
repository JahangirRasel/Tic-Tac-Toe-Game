let boxs = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".rset")
let newGameBtn = document.querySelector(".newgame")
let msgContainer = document.querySelector(".msgcontainer")
let msg = document.querySelector(".msg");
let moveCount = 0;


let turnO = true;

const winnPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

const resetGame = () => {
    turnO = true;
    moveCount = 0;
    enableAllBoxs();  
    msgContainer.classList.add("hide");    
    
}
boxs.forEach((box) =>{
    box.addEventListener("click", ()=>{
        
        if(turnO){
            box.innerText = "O";
            turnO = false;
            box.style.color = "red";

        }
        else{
            box.innerText = "X";
            turnO = true;
            box.style.color = "blue";
        }
       moveCount++;
        box.disabled = true;
        checkWinner();
    });
    
} );

const dissableAllBoxs = () => {
    for(let box of boxs){
        box.disabled = true;
    }
};

const enableAllBoxs = () => {
    for(let box of boxs){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `The winner is ${winner}`;
    msgContainer.classList.remove("hide");
    dissableAllBoxs();
};


const checkWinner = () => {
    for(let pattern of winnPatterns){
       let pos1 = boxs[pattern[0]].innerText;
       let pos2 = boxs[pattern[1]].innerText;
       let pos3 = boxs[pattern[2]].innerText;

        if(pos1 !== "" && pos2 !== "" && pos3 !== ""){
            if(pos1 === pos2 && pos2 === pos3){
            showWinner(pos1);
            
            } 
        }
    }
    if(moveCount === 9){
        msg.innerText = "Game Draw!";
        msgContainer.classList.remove("hide");
        dissableAllBoxs();
    }
   
};



newGameBtn.addEventListener("click", resetGame) ;
resetBtn.addEventListener("click", resetGame) ;