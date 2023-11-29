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
    return randomPick; //gets the randomly selected answer. 
}
//Write a function that plays a single round of rock paper scissors.
const playRound = (playerSelection , computerSelection) => {
    //I need a way to bring in the player pick as well.
    //create logic to find a winner given a player and computer input.
    //remember rock beats scissor scissor beats paper and paper beats rock.
    switch (computerSelection.getComputerChoice()){ //testing switch case to check players picks and returning the winner.
        case 'rock': {
            playerSelection === "scissor"
            console.log("computer wins rock crushes scissor")
            computerSelection === 'scissor'
            console.log('Player wins rock crushes scissor')
        } break;
        case 'scissor': {
            playerSelection === 'paper'
            console.log('computer wins scissor cuts paper')
            computerSelection === 'paper'
            console.log('Player wins scissor cuts paper.')
        } 
        break;
        case 'paper': {
            playerSelection === 'rock'
            console.log('computer wins paper covers rock')
            computerSelection === "rock"
            console.log('Player wins paper covers rock')
        }
        ;

    }
}




// playGame = (playerSelection, computerSelection) {
//     // plays the game by putting the choices against each other
//     //results will be compared to each other through conditionals.
// }

// game = () => {
//     for (i=1 ; i <= 5; i++)
//     playGame()
// }