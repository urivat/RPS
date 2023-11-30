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
    //create prompt to get player response
    let caps = playerSelection.toLowerCase();

    switch (true){ //testing switch case to check players picks and returning the winner.
        case (computerSelection === 'rock' && caps === 'scissor'): 
        
            {
            console.log("computer wins rock crushes scissor")
            }
            break; 
        case (computerSelection === 'scissor' && caps === 'rock'):   
            {
            console.log('Player wins rock crushes scissor')
            }
            break;        

        case (computerSelection === 'scissor' && caps === 'paper') : 
            {            
            console.log('computer wins scissor cuts paper')
            }
            break; 
        case (computerSelection === "paper" && caps === 'scissor'):
            {
                console.log('Player wins scissor cuts paper.')
            }
        case (computerSelection === 'paper' && caps === 'rock'):     
            {
            console.log('computer wins paper covers rock')
            }
            break;
        case (computerSelection === 'rock' && caps === 'paper'):
            {
            console.log('Player wins paper covers rock')
            }
            break;
            default: //do i need to make this a case in order to break a tie.
            //run the playRound method to repeat prompt. 
            {
            console.log('Its a draw nobody won this round.')
            }
            break
    } playRound(playerSelection , computerSelection)
}


const computerSelection = getComputerChoice()
const playerSelection = prompt('Pick one: rock,\n paper,\n scissor.')
const game = () => {
     //create a for loop to iterate over each round.
    //running into the issue were each round has same values. 
    // need to distinguish each round somehow.
    //  playRound(computerSelection , playerSelection)
     playRound(computerSelection, playerSelection)
     playRound(computerSelection , playerSelection)   
     playRound(computerSelection , playerSelection)
     playRound(computerSelection , playerSelection)
     playRound(computerSelection , playerSelection)
}
game();