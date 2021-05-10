const container = document.querySelector('.container')
const table = document.querySelector('table')
container.append(table)

//array method for switching players I got from the tic tac toe hw
const redPlayer = [];
const blackPlayer = [];

// click method was also code i wrote in the tic tac toe hw
const click = (ev) => {
    if ((ev.currentTarget.style.backgroundColor === "red") || (ev.currentTarget.style.backgroundColor === "black")) {
        return;

    } else if((ev.currentTarget.querySelector('.column1')) && (ev.currentTarget.querySelector(`.row1`).style.backgroundColor === "beige")) {
        return;

    }else if(redPlayer.length === blackPlayer.length) {
        ev.currentTarget.style.backgroundColor = "red"
        redPlayer.push(ev)
       
    } else if(redPlayer.length > blackPlayer.length) {
        ev.currentTarget.style.backgroundColor = "black"
        blackPlayer.push(ev)
    }
}

const clickSpot = document.querySelectorAll('.spot')
clickSpot.forEach((element) => element.addEventListener('click',click))

// (ev.currentTarget.querySelector(`#(id ${+ 7})`).style.backgroundColor === "beige")
// && (ev.currentTarget.querySelector('.upper-row'))
// (ev.currentTarget.querySelectorAll('.upper-row'))
// && (ev.currentTarget.querySelector(`#(id ${> 0})`))