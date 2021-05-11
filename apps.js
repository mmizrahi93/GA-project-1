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
    // getting column and row values 
    const columnList = ev.currentTarget.classList[1]
    const rowList = ev.currentTarget.classList[2]
    const columnValue = parseInt(columnList[columnList.length - 1]);
    const rowValue = parseInt(rowList[rowList.length - 1]);


    for (let i = 5; i >=0; i--) {
       
        if ((ev.currentTarget.classList.contains("red")) || (ev.currentTarget.classList.contains("black"))) {
            return;
        } else if ((gameBoard[i][columnValue] === "") && (playerOne.length === playerTwo.length)){
            // letting players know whos turn it is
            let player = 2;
            playerTurn.textContent = `Player ${player}'s Turn!`
            // switching between players
            playerOne.push(ev)
            ev.currentTarget.classList.add("red")
            // clicking on a column and getting it into gameBoard  
            gameBoard[i][columnValue] = `1`
            //pushing color down game board
            const boardLocation = columnValue.toString() + i.toString()
            const redChip = document.getElementById(boardLocation)
            redChip.classList.add('red')
            // removing color class on clicked spot
            if (ev.currentTarget.id === boardLocation) {
                // dont remove class on current clicked spot
            } else {
            ev.currentTarget.classList.remove('red')
            }
            
            
            console.log(gameBoard)
            return

        } else if ((gameBoard[i][columnValue] === "") && (playerOne.length > playerTwo.length)) {
            // letting players know whos turn it is
            let player = 1;
            playerTurn.textContent = `Player ${player}'s Turn!`
            // switching between players   
            playerTwo.push(ev)
            ev.currentTarget.classList.add("black")
            // clicking on a column and pushing it into gameBoard[]
            gameBoard[i][columnValue] = `2`
            // pushing color down to game board
            const boardLocation = columnValue.toString() + i.toString()
            const blackChip = document.getElementById(boardLocation)
            blackChip.classList.add("black")
            // removing color class on clicked spot
            if (ev.currentTarget.id === boardLocation) {
                // dont remove class on current clicked spot
            } else {
            ev.currentTarget.classList.remove('black')
            }
            
            console.log(gameBoard)
            return
        }
        
    }
    
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
// https://dev.to/fakorededamilola/building-a-connect-four-game-with-javascript-1f45
let winningArray = [ 
    [0, 1, 2, 3], [41, 40, 39, 38],[7, 8, 9, 10], 
    [34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24], 
    [21, 22, 23, 24], [20, 19, 18, 17], [28, 29, 30, 31], 
    [13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3], 
    [0, 7, 14, 21], [41, 34, 27, 20], [1, 8, 15, 22], 
    [40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18], 
    [3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25], 
    [37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15], 
    [6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], 
    [41, 33, 25, 17], [7, 15, 23, 31], [34, 26, 18, 10], 
    [14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17], 
    [6, 12, 18, 24], [28, 22, 16, 10], [13, 19, 25, 31], 
    [21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], 
    [5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22], 
    [2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25], 
    [40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32], 
    [11, 7, 23, 29], [12, 18, 24, 30], [1, 2, 3, 4], 
    [5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9],
    [15, 16, 17, 18], [19, 18, 17, 16], [22, 23, 24, 25], 
    [26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30], 
    [36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28], 
    [8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], 
    [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34] 
    ];

const gameFunction = (ev) => {
    if(gameBoard[i][n].length !== 0) {

    }
}


clickSpot.forEach((element) => element.addEventListener('click',click))
