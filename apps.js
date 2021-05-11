const container = document.querySelector('.container')
const table = document.querySelector('table')
container.append(table)
const playerTurn = document.querySelector('.player-turn')
const clickSpot = document.querySelectorAll('.spot')

//array method for switching players I got from the tic tac toe hw
const playerOne = [];
const playerTwo = [];

let player = 1;
playerTurn.textContent = `Player ${player}'s Turn! You are red!`
// click method was also code i wrote in the tic tac toe hw
const click = (ev) => {
    const columnList = ev.currentTarget.classList[1]
    const rowList = ev.currentTarget.classList[2]

    const columnValue = parseInt(columnList[columnList.length - 1]);
    const rowValue = parseInt(rowList[rowList.length - 1]);

    const redChip = document.querySelector('.red')
    const blackChip = document.querySelector('.black')


    for (let i = 5; i >=0; i--) {
       
        if ((ev.currentTarget.classList.contains("red")) || (ev.currentTarget.classList.contains("black"))) {
            return;
        } else if ((gameBoard[i][columnValue] === "") && (playerOne.length === playerTwo.length)){

            let player = 2;
            playerTurn.textContent = `Player ${player}'s Turn!`
    
            playerOne.push(ev)
            ev.currentTarget.classList.add("red")
            gameBoard[i][columnValue] = `1`
            
            console.log(gameBoard)
            return
        } else if (((gameBoard[i][columnValue] === "") && (playerOne.length > playerTwo.length))) {
            
            let player = 1;
            playerTurn.textContent = `Player ${player}'s Turn!`
               
            playerTwo.push(ev)
            ev.currentTarget.classList.add("black")

            gameBoard[i][columnValue] = `2`
            console.log(gameBoard)
        }
        
    }
    

    // if ((ev.currentTarget.classList.contains("red")) || (ev.currentTarget.classList.contains("black"))) {
    //     return;
    // } else if(playerOne.length === playerTwo.length) {
    //     let player = 2;
    //     playerTurn.textContent = `Player ${player}'s Turn!`
    
    //     playerOne.push(ev)
    //     ev.currentTarget.classList.add("red")
           
    // } else if(playerOne.length > playerTwo.length) {
    //     let player = 1;
    //     playerTurn.textContent = `Player ${player}'s Turn!`
           
    //     playerTwo.push(ev)
    //     ev.currentTarget.classList.add("black")
    // }
    
}
/*
code comment block
[X]get column and row of clicked position
     - check gameboard to see if bottom row has a value []
        -check row 5 (bottom) to row 0 (top)
     - if it does check next row, if not add piece []
     - repeat two steps []
[]when a user clicks on the column chip goes to the bottom
[]loop through the column and row and see if they have any value
[]if theres a value keep going
[]there is no value put a piece in
[]figure out if that piece leads to a win

*/




const gameBoard = [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""]
]

const gameFunction = (ev) => {
    if(gameBoard[i][n].length !== 0) {

    }
}


clickSpot.forEach((element) => element.addEventListener('click',click))
