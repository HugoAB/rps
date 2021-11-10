// rock beats scissors
// paper beats rock
// scissors beats paper


// - user chooses rock, paper or scissors
// - generate a random number between 0 and 2 for computer's choice
// - if computer's choice is equal to user's choice it's a draw

function computerSelection() {
    const options = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
    
}


function playerSelection() {
    let selection = prompt("Rock, paper, scissors? ");
    return selection.toLowerCase();
}

let userScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        
    } else if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") || 
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        userScore++;
    } else if(
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "paper") || 
        (playerSelection === "paper" && computerSelection === "scissors")
    ) {
        computerScore++;
    }
}

function game() {
    let user;
    let computer;
    for (let i = 0; i < 5; i++) {
        user = playerSelection();
        computer = computerSelection();
        playRound(user, computer);
        console.log(`Player: ${user}`);
        console.log(`Computer: ${computer}`);
        console.log('----------------------');
        console.log(`Player score: ${userScore}`);
        console.log(`Computer score: ${computerScore}`);
        console.log('----------------------');
    }

    if(userScore === computerScore) {
        return "It's a draw!";
    } else if(userScore > computerScore) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

console.log(game());