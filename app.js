let Board = ['','','','','','','','',''];
let turn = document.getElementById('turn');
let reset = document.getElementById('reset');

const gameBoard = (() => {
    function createBoard() {
        Board = ['','','','','','','','',''];
        let grids = document.getElementsByClassName('grids');
        turn.textContent = 'X';
        for(i=0;i<grids.length;i++){
            grids[i].style.color = "grey";
            grids[i].style.backgroundColor ="grey";
            grids[i].textContent = "N";
            grids[i].value = i;
            grids[i].addEventListener("click",gameBoard.gridInput,true);
        };
    };
    function checkBoard(){
        if(Board[0]===Board[1]&&Board[1]===Board[2]&&Board[0]!=''){
            turn.textContent += " is the winner.";
            disable();
        }
        if(Board[3]===Board[4]&&Board[4]===Board[5]&&Board[3]!=''){
            turn.textContent += " is the winner.";
            disable();
        }
        if(Board[6]===Board[7]&&Board[7]===Board[8]&&Board[6]!=''){
            turn.textContent += " is the winner.";
            disable();
        }
        if(Board[0]===Board[3]&&Board[3]===Board[6]&&Board[0]!=''){
            turn.textContent += " is the winner.";
            disable();
        }
        if(Board[1]===Board[4]&&Board[4]===Board[7]&&Board[1]!=''){
            turn.textContent += " is the winner.";
            disable();
        }
        if(Board[2]===Board[5]&&Board[5]===Board[8]&&Board[2]!=''){
            turn.textContent += " is the winner.";
            disable();
        };
    };
    function disable(){
        let grids = document.getElementsByClassName('grids');
        for(i=0;i<grids.length;i++){
            if(grids[i].textContent === "N"){
                console.log("hello")
                grids[i].removeEventListener("click",gameBoard.gridInput,true);
            };
        };
    };
    function gridInput(e){
        e.target.removeEventListener("click",gameBoard.gridInput,true)
        if(turn.textContent==='X'){
            e.target.style.color = "white";
            e.target.style.backgroundColor = "red";
            Board[e.target.value]='X';
            e.target.textContent='X';
            checkBoard();
            if(turn.textContent ==='X'){
                turn.textContent = 'O';};
        }else{
            e.target.style.color = "white";
            e.target.style.backgroundColor = "blue";
            Board[e.target.value]='O';
            e.target.textContent='O';
            checkBoard();
            if(turn.textContent ==='O'){
                turn.textContent = 'X';
            };
        };
    };
    return {createBoard, checkBoard, gridInput};
})();


reset.onclick = gameBoard.createBoard;
gameBoard.createBoard();


