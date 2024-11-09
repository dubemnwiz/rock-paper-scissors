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

const results = document.querySelector('#results');
const player = document.querySelector('#pscore');
const computer = document.querySelector('#cscore');
const winner = document.querySelector('#winner');

player.textContent = 'Player: ' + humanScore;
computer.textContent = 'Computer: ' + computerScore;


function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        results.textContent = 'Tie';
    } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        humanScore += 1;
        player.textContent = 'Player: ' + humanScore;
        results.textContent = 'You win! Rock beats scissors!';
    } else if (humanChoice == 'rock' && computerChoice == 'paper') {
        computerScore += 1;
        computer.textContent = 'Computer: ' + computerScore;
        results.textContent = 'Computer wins! Paper beats rock!';
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        humanScore += 1;
        player.textContent = 'Player: ' + humanScore;
        results.textContent = 'You win! Paper beats rock!';
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        computerScore += 1;
        computer.textContent = 'Computer: ' + computerScore;
        results.textContent = 'Computer wins! Rock beats scissors!';
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        computerScore += 1;
        computer.textContent = 'Computer: ' + computerScore;
        results.textContent = 'Computer wins! Scissors beats paper!';
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        humanScore += 1;
        player.textContent = 'Player: ' + humanScore;
        results.textContent = 'You win! Scissors beats paper!';
    }
}

if (humanScore == 5) {
    winner.textContent = 'You win!';
} else if (computerScore == 5) {
    winner.textContent = 'Computer wins!';
}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

rockBtn.addEventListener('click', () => {
    playRound(getHumanChoice('R'), getComputerChoice())
    console.log('rock clicked');
});

paperBtn.addEventListener('click', () => {
    playRound(getHumanChoice('P'), getComputerChoice())
    console.log('paper clicked');
});
scissorsBtn.addEventListener('click', () => {
    playRound(getHumanChoice('S'), getComputerChoice())
    console.log('scissors clicked');
});

