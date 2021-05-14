const container = document.querySelector('.container')
const table = document.querySelector('table')
container.append(table)
const playerTurn = document.querySelector('.player-turn')
const clickSpot = document.querySelectorAll('.spot')
const winner = document.querySelector('.winner')
const reset = document.querySelector('.reset')
let champ = false;

//array method for switching players I got from the tic tac toe hw
let playerOne = [];
let playerTwo = [];

let player = 0;
playerTurn.textContent = `Player 1's Turn! You are red! Click on a spot to begin!`
// click method was also code i wrote in the tic tac toe hw
const click = (ev) => {
    // getting column and row values 
    const columnList = ev.currentTarget.classList[1]
    const rowList = ev.currentTarget.classList[2]
    const columnValue = parseInt(columnList[columnList.length - 1]);
    const rowValue = parseInt(rowList[rowList.length - 1]);

    if(champ) {
        return
    } else {
    
    for (let i = 5; i >= 0; i--) {
       
        if ((ev.currentTarget.classList.contains("red")) || (ev.currentTarget.classList.contains("black"))) {
            return;
        } else if ((gameBoard[i][columnValue] === "") && (playerOne.length === playerTwo.length)){
            // letting players know whos turn it is
            let player = 1;
            playerTurn.textContent = `Player 2's Turn!`
            // adding color 
            ev.currentTarget.classList.add("red")
            // clicking on a column and getting it into gameBoard  
            gameBoard[i][columnValue] = `1`
            //pushing color down game board
            const boardLocation = columnValue.toString() + i.toString()
            const redChip = document.getElementById(boardLocation)
            redChip.classList.add('red')
            playerOne.push(boardLocation)
            // removing color class on clicked spot
            if (ev.currentTarget.id === boardLocation) {
                // dont remove class on current clicked spot
            } else {
            ev.currentTarget.classList.remove('red')
            }
            winningFunction();
            return

        } else if ((gameBoard[i][columnValue] === "") && (playerOne.length > playerTwo.length)) {
            // letting players know whos turn it is
            let player = 2;
            playerTurn.textContent = `Player 1's Turn!`
            // adding color    
            ev.currentTarget.classList.add("black")
            // clicking on a column and pushing it into gameBoard
            gameBoard[i][columnValue] = `2`
            // pushing color down to game board
            const boardLocation = columnValue.toString() + i.toString()
            const blackChip = document.getElementById(boardLocation)
            blackChip.classList.add("black")
            playerTwo.push(boardLocation)
            // removing color class on clicked spot
            if (ev.currentTarget.id === boardLocation) {
                // dont remove class on current clicked spot
            } else {
            ev.currentTarget.classList.remove('black')
            }
            winningFunction();
            return
        }
        
    }
}
    
}


let gameBoard = [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""]
]
// i used the winning array shown here but had to change the values to fit my game https://dev.to/fakorededamilola/building-a-connect-four-game-with-javascript-1f"45"
let winningArray = [ 
    ["00", "10", "20", "30"], ["65", "55", "45", "35"], ["01", "11", "21", "31"], 
    ["64", "54", "44", "34"], ["02", "12", "22", "32"], ["63", "53", "43", "33"], 
    ["03", "13", "23", "24"], ["62", "52", "42", "32"], ["04", "14", "24", "34"], 
    ["61", "51", "41", "31"], ["05", "15", "25", "35"], ["60", "50", "40", "30"], 
    ["00", "01", "02", "03"], ["65", "64", "63", "62"], ["10", "11", "12", "13"], 
    ["55", "54", "53", "52"], ["20", "21", "22", "23"], ["45", "44", "43", "42"], 
    ["30", "31", "44", "33"], ["35", "34", "33", "32"], ["40", "41", "42", "43"], 
    ["25", "24", "23", "22"], ["50", "51", "52", "53"], ["15", "14", "13", "12"], 
    ["60", "61", "62", "63"], ["05", "04", "03", "02"], ["00", "11", "22", "33"], 
    ["65", "54", "43", "32"], ["01", "12", "23", "34"], ["64", "53", "42", "31"], 
    ["02", "13", "24", "35"], ["63", "52", "41", "30"], ["05", "14", "23", "32"], 
    ["60", "51", "42", "33"], ["04", "13", "22", "31"], ["61", "52", "43", "34"],
    ["03", "12", "21", "30"], ["62", "53", "44", "35"], ["15", "24", "33", "42"],
    ["50", "41", "32", "23"], ["25", "34", "43", "52"], ["40", "31", "22", "13"],
    ["20", "31", "42", "53"], ["45", "34", "23", "12"], ["10", "21", "32", "43"],
    ["55", "44", "33", "22"], ["21", "01", "43", "54"], ["11", "22", "33", "44"],
    ["41", "01", "23", "14"], ["51", "42", "33", "24"], ["10", "20", "30", "40"],
    ["50", "40", "30", "20"], ["11", "21", "31", "41"], ["51", "41", "31", "21"],
    ["12", "22", "32", "42"], ["52", "42", "32", "22"], ["13", "23", "33", "43"],
    ["53", "43", "33", "23"], ["14", "24", "34", "44"], ["54", "44", "34", "24"],
    ["15", "25", "35", "45"], ["55", "45", "35", "25"], ["01", "02", "03", "04"],
    ["11", "12", "13", "14"], ["21", "22", "23", "24"], ["31", "32", "33", "34"],
    ["41", "42", "43", "44"], ["51", "52", "53", "54"], ["61", "62", "63", "64"] 
    ];


// got advice from a friend who pointed me to this link to help me make my win function https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
const winningFunction = () => {
    for (let i = 0; i < winningArray.length; i++){
        // goes through playerOne array and sees if the values in that array match in the winningArray
        if(winningArray[i].every(space => playerOne.includes(space))) {
            winner.textContent = "Player One is the Winner! Click reset to start over!";
            champ = true;
        // goes through playerTwo array and sees if the values in that array match in the winningArray
        } else if(winningArray[i].every(space => playerTwo.includes(space))){
            winner.textContent = "Player Two is the Winner! Click reset to start over!";
            champ = true;
        // if top row is full then the game ends in a tie
        } else if(gameBoard[0].every(space => space !== "")) {
            
            winner.textContent = "It's a tie! Try again and click reset to start over!"
        }
    }  
}
// reset button function
const startOver = () => {
    gameBoard = [
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""]
    ]
    clickSpot.forEach((element) => element.classList.remove('red'))
    clickSpot.forEach((element) => element.classList.remove('black'))
    playerOne = [];
    playerTwo = [];

    player = 0;
    playerTurn.textContent = `Player 1's Turn! You are red! Click on a spot to begin!`
    champ = false
    winner.textContent = ''
}
// event listners
clickSpot.forEach((element) => element.addEventListener('click',click))
reset.addEventListener('click', startOver)
