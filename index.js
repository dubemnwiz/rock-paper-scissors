function getComputerChoice() {
    let val = Math.random();
    if (val <= 0.33) {
        return 'rock';
    } else if (val > 0.33 && val <= 0.66) {
        return 'scissors';
    } else {
        return 'paper';
    }
}

function getHumanChoice(c) {
    if (c.toUpperCase() == 'R') {
        return 'rock';
    } else if (c.toUpperCase() == 'S') {
        return 'scissors';
    } else if (c.toUpperCase() == 'P') {
        return 'paper';
    } else {
        console.log("Invalid input!");     
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log('Tie!');
    } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        humanScore += 1;
        console.log('You win! Rock beats scissors!');
    } else if (humanChoice == 'rock' && computerChoice == 'paper') {
        computerScore += 1;
        console.log('Computer wins! Paper beats rock!');
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        humanScore += 1;
        console.log('You win! Paper beats rock!');
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        computerScore += 1;
        console.log('Computer wins! Rock beats scissors!');
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        computerScore += 1;
        console.log('Computer wins! Scissors beats paper!');
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        humanScore += 1;
        console.log('You win! Scissors beats paper!');
    }
}

for (let i = 0; i < 5; i++) {
    let choice = prompt("Choose rock ('R'), scissors ('S'), or paper ('P')!");
    playRound(getHumanChoice(choice), getComputerChoice());
}

if (humanScore > computerScore) {
    console.log('You win!');
    console.log("You: " + humanScore);
    console.log("Computer: " + computerScore);
} else if (computerScore > humanScore) {
    console.log('Computer wins!');
    console.log("You: " + humanScore);
    console.log("Computer: " + computerScore);
} else {
    console.log('It was a draw!');
    console.log("You: " + humanScore);
    console.log("Computer: " + computerScore);
}