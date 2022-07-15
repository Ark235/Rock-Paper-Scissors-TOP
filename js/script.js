//** Select rack/paper/scissors buttons in html */

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

rockBtn.addEventListener('click', () => {
    playRound('rock', computerPlay());
});

paperBtn.addEventListener('click', () => {
    playRound('paper', computerPlay());
});

scissorsBtn.addEventListener('click', () => {
    playRound('scissors', computerPlay());
});

//** Get computer choice (rock/paper/scissors) */

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
        default:
            computerPlay();
    }
}

//** Play one round of the game */

function playRound(playerSelection, computerSelection) {
    let roundWinner;
    if (playerSelection === computerSelection) {
        roundWinner = 0;                                             // tie
    } else if ((playerSelection == 'rock' && computerSelection != 'paper')
        || (playerSelection == 'paper' && computerSelection != 'scissors')
        || (playerSelection == 'scissors' && computerSelection != 'rock')) {
        roundWinner = 1;                                             // player win
    } else roundWinner = 2;                                          // computer win
    logEntry(playerSelection, computerSelection, roundWinner);       // add entry to the log
    scoreCheck(roundWinner);
    return roundWinner;
}

//** Add new entry to the log */

function logEntry(playerSelection, computerSelection, roundWinner) {
    const container = document.querySelector('.combat-log');
    const choiceEntry = document.createElement('p');
    const winnerEntry = document.createElement('p');
    winnerEntry.setAttribute('style', 'border-bottom: 1px dashed red; padding-bottom: 5px; margin-bottom: 5px;')
    choiceEntry.textContent = `You chose ${playerSelection}, computer chose ${computerSelection}`;
    container.appendChild(choiceEntry);
    winnerEntry.textContent = `${roundWinner == 0 ? "It's a tie!" : (roundWinner == 1 ? "You win this round!" : "Computer wins this round!")}`;
    container.appendChild(winnerEntry);
}

//** Display round score entry */

function scoreCheck(roundWinner) {
    const displayPlayerScore = document.querySelector('.score-player');
    const displayComputerScore = document.querySelector('.score-computer');

    const newPlayerScore = document.createElement('p');
    const newComputerScore = document.createElement('p');

    let playerScore = 0;
    let computerScore = 0;
    if (roundWinner === 1) {
        playerScore++;
    } else if (roundWinner === 2) {
        computerScore++;
    }
    newPlayerScore.textContent = `player ${playerScore}`;
    newComputerScore.textContent = `${computerScore} computer`;
    displayPlayerScore.appendChild(newPlayerScore);
    displayComputerScore.appendChild(newComputerScore);
}

//** Play game until one player gets 5 points */

function playGame(playRound) {
    
}
