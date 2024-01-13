"use strict"
//create a function to get the choice from the computer.
// create a implementation of rock, paper, scissors.
// the game rules are simple rock over scissor scissor over paper and paper over rock are win condditions. 
// winner is best of 5 wins.
// each player selects one item per round. 
// at the end of the round players compare choices made. 
// winner is decidded based on priority over other choice.

// run through the game step by step in as much detail as possible to translate to the computer your intentions.
// varibles required.
// get the players choice. ask the player which selection they will chose.
// take player response and use it in the round. 
// get computer response and use it in the round. 
// Get a different response for each round. 
// create functions to capitalize player response so that it is case insensetive.
// remember functions are actions.
// 1 create prompt variable for player choice. make sure you make case insensitive.
// 2create a varible that holds the computers choice. compChoice 
// 3create helper functions to capitalize and select a random number.
// capString + randomNum
// use string methods to get just first letter capitalized and the rest should be lowercase.
// Use math . random for the random number generator. Numbers also need to be assigned to a string which are the results of the player choices.
// 4 create a function that allows rounds to be played with the result of the match being returned.
// round will consist of player and computer choice and will compare them to each other.
// create a log variable to store the result of the round in the return statement.
// create a variable for score that will keep track of each rounds tally. also make sure to account for ties in the mathch.
// make a function that calls the round into action such as Game(). The game function should display results of the round and continue play. 
let playerChoice;
let computerChoice;
function capString (string) {
    let newString = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    return newString
}
function random (){
    let num = Math.floor(Math.random() * 3)
    return num;
}
function getCompChoice () {
    let numChoice = random()
    let stringChoice = ''
    if (numChoice === 0){
        stringChoice = 'Rock'
    }else if (numChoice === 1){
        stringChoice = 'Scissor'
    }else if (numChoice === 2){
        stringChoice = 'Paper'
    }
    return stringChoice;
}
function getPlayerChoice () {
    playerChoice = prompt('Choose one brave one: \n Rock\n Paper\n Scissor\n')
    return capString(playerChoice)
}
function playRound (playerChoice , computerChoice) {
    let message = ''
    
        if (playerChoice === 'Rock' && computerChoice === 'Scissor'||   
            playerChoice === 'Paper' && computerChoice === 'Rock' ||
            playerChoice === 'Scissor' && computerChoice === 'Paper'){
            message = `Player Wins this round ${playerChoice} beats ${computerChoice}`

       }else if (computerChoice === 'Rock' && playerChoice === 'Scissor' || 
                computerChoice === 'Paper' && playerChoice === 'Rock' ||
                computerChoice === 'Scissor' && playerChoice === 'Paper'){
                message = `Computer Wins this round ${computerChoice} beats ${playerChoice}.`
                }else 
                   {
                    message = `Its a draw computer choice${computerChoice} and player choice ${playerChoice} are the same play again!`
                   } if (computerChoice === playerChoice){
                    playRound(getPlayerChoice(), getCompChoice())
                    message = ``
                   }
                   return message
    }
function game () {
    const div = document.querySelector('div');
    const button = document.createElement('button');
    const button2 = document.createElement('button');
    const button3 = document.createElement('button');
    button.textContent = ('rock');
    button2.textContent = ('paper');
    button3.textContent = ('scissor');
    div.appendChild(button);
    div.appendChild(button2);
    div.appendChild(button3);
    const btns = document.querySelectorAll('button')
    btns.forEach( (btn) => {
        btn.addEventListener('click', () => {
            playRound();
        })
    })
   
    // let roundCount = 1
    
    // for(let i = 1; i <= 5 ; i++){
    //     console.log(playRound(getPlayerChoice() , getCompChoice()))
    //     roundCount = i
    //     console.log(`Round ${roundCount}`)
    // }return 
}
game()


























// let randomNum = (num) => {
//     Math.floor(Math.random()* 3)
// }
// let capitalizeSting = (string) => {
//     string.toLowerCase().charAt(0).toUpperCase() + string.toLowerCase().slice(1)
// }




// const getComputerChoice = () => {
//     // The choice needs to be one of these selected randomly. would it be wiser to make them ints.
//     // let choice = Math.floor(Math.random() * 3)
//     let randomPick;
//     let num; //create a variable to hold on to the choice varibles random number.
//     switch (randomNum) {
//         case (randomNum(0)):
                
//                 randomPick = "Rock" // compares the choice number to nubmers 0 to 2 then gives string answer back.
//         break;
//         case (randomNum(1)):
                 
//                 randomPick = 'Paper'
//         break;
//         case (randomNum(2)): 
//                 randomPick = 'Scissor'
//         break;
//         default : alert("error")
//     }
//     return randomPick; //gets the randomly selected answer. 
// }
// //Write a function that plays a single round of rock paper scissors.
// const playRound = (playerSelection , computerSelection) => {
//     //I need a way to bring in the player pick as well.
//     //create logic to find a winner given a player and computer input.
//     //remember rock beats scissor scissor beats paper and paper beats rock.
//     //create prompt to get player response
//     let roundMessage = '';
    

//     switch (true){ //testing switch case to check players picks and returning the winner.
        
//         case (computerSelection === 'Rock' && playerSelection === 'Scissor'): 
        
//             {
//             roundMessage = ("computer wins rock crushes scissor")
           
//             }
//             break; 
//         case (computerSelection === 'Scissor' && playerSelection === 'Rock'):   
//             {
//             roundMessage = ('Player wins rock crushes scissor')
            
//             }
//             break;        

//         case (computerSelection === 'Scissor' && playerSelection === 'Paper') : 
//             {            
//             roundMessage = ('computer wins scissor cuts paper')
//             }
//             break; 
//         case (computerSelection === "Paper" && playerSelection === 'Scissor'):
//             {
//                 roundMessage = ('Player wins scissor cuts paper.')
//             }
//         case (computerSelection === 'Paper' && playerSelection === 'Rock'):     
//             {
//             roundMessage = ('computer wins paper covers rock')
            
//             }
//             break;
//         case (computerSelection === 'Rock' && playerSelection === 'Paper'):
//             {
//             roundMessage = ('Player wins paper covers rock')
            
//             }
//             break;
//             case (computerSelection === playerSelection):
//             { 
//             roundMessage = ('Its a draw replay the round') 
//             //do i need to make this a case in order to break a tie.
//             //run the playRound method to repeat prompt. 
//             break;
//         }    
// }           
//             return roundMessage
// }



// const game = () => {
//     let computerSelection = getComputerChoice()
//     let playerSelection = prompt('Pick one:\n rock,\n paper,\n scissor.')
//      //create a for loop to iterate over each round.
//     //running into the issue were each round has same values. 
//     // need to distinguish each round somehow.
//     //  playRound(computerSelection , playerSelection)
//      playRound(playerSelection.capitalizeSting(), computerSelection)
//      playRound(playerSelection.capitalizeSting() , computerSelection)   
//      playRound(playerSelection.capitalizeSting() , computerSelection)
//      playRound(playerSelection.capitalizeSting() , computerSelection)
//      playRound(playerSelection.capitalizeSting() , computerSelection)
// }
// game();