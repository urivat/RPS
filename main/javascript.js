"use strict"
//create a function to get the choice from the computer.
const getComputerChoice = () => {
    // The choice needs to be one of these selected randomly. would it be wiser to make them ints.
    let choice = Math.floor(Math.random() * 3)
    let randomPick; //create a variable to hold on to the choice varibles random number.
    switch (choice) {
        case 0:
        randomPick = "rock" // compares the choice number to nubmers 0 to 2 then gives string answer back.
        break;
        case 1: 
        randomPick = 'paper'
        break;
        case 2: 
        randomPick = 'scissor'
        break;
        default : alert("error")
        break
    }
    return randomPick;   
}
console.log(getComputerChoice())

// playGame = (playerSelection, computerSelection) {
//     // plays the game by putting the choices against each other
//     //results will be compared to each other through conditionals.
// }

// game = () => {
//     for (i=1 ; i <= 5; i++)
//     playGame()
// }