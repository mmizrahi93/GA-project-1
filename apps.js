const container = document.querySelector('.container')
const table = document.querySelector('table')
container.append(table)

//array method for switching players I got from the tic tac toe hw
const playerOne = [];
const playerTwo = [];

// click method was also code i wrote in the tic tac toe hw
const click = (ev) => {
        if ((ev.currentTarget.classList.contains("red")) || (ev.currentTarget.classList.contains("black"))) {
            return;
        } else if(playerOne.length === playerTwo.length) {
            // ev.currentTarget.querySelector(`#${7}`).classList.add(".row1")
            // ev.currentTarget.style.backgroundColor = "red"
            playerOne.push(ev)
            ev.currentTarget.classList.add("red")
            console.log(ev.currentTarget)
           
        } else if(playerOne.length > playerTwo.length) {
            // ev.currentTarget.querySelector(`#${+ 7}`).classList.add(".row1")
            // ev.currentTarget.style.backgroundColor = "black"
            playerTwo.push(ev)
            ev.currentTarget.classList.add("black")
            console.log(ev.currentTarget)
        }

     else {
        alert("Cant go there!")
    }
    
}



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

const clickSpot = document.querySelectorAll('.spot')
clickSpot.forEach((element) => element.addEventListener('click',click))

// (ev.currentTarget.querySelector(`#(id ${+ 7})`).style.backgroundColor === "beige")
// && (ev.currentTarget.querySelector('.upper-row'))
// (ev.currentTarget.querySelectorAll('.upper-row'))
// && (ev.currentTarget.querySelector(`#(id ${> 0})`))
// else if(redPlayer.length === blackPlayer.length) {
//     // ev.currentTarget.classList.add(".row1")
//     ev.currentTarget.style.backgroundColor = "red"
//     redPlayer.push(ev)
   
// } else if(redPlayer.length > blackPlayer.length) {
//     // ev.currentTarget.classList.add(".row1")
//     ev.currentTarget.style.backgroundColor = "black"
//     blackPlayer.push(ev)