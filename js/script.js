let playerSelection = 0;
let computerSelection = 0;

let roundWinner = 0;
let gameWinner = 0;

let playerScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const newGameBtn = document.querySelector('.new-game');

rockBtn.addEventListener('click', () => {
    playerSelection = 'rock';                       //** Get player selection */
    playRound();
});
paperBtn.addEventListener('click', () => {
    playerSelection = 'paper';                      //** Get player selection */
    playRound();
});
scissorsBtn.addEventListener('click', () => {
    playerSelection = 'scissors';                   //** Get player selection */
    playRound();
});
newGameBtn.addEventListener('click', () => {
    let logEntry = document.querySelector('.log-text');
    logEntry.textContent = 'Choose your weapon to start the game!';

    let uiPlayerScore = document.querySelector('.score-player-value');
    uiPlayerScore.textContent = '0';

    let uiComputerScore = document.querySelector('.score-computer-value');
    uiComputerScore.textContent = '0';

    rockBtn.removeAttribute('disabled');
    paperBtn.removeAttribute('disabled');
    scissorsBtn.removeAttribute('disabled');

    newGameBtn.style.display = 'none';

    playerSelection = 0;
    computerSelection = 0;

    roundWinner = 0;
    gameWinner = 0;

    playerScore = 0;
    computerScore = 0;
});

//** Get computer choice (rock/paper/scissors) */

function getComputerSelection() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1:
            computerSelection = 'rock';
            return computerSelection;
        case 2:
            computerSelection = 'paper';
            return computerSelection;;
        case 3:
            computerSelection = 'scissors';
            return computerSelection;;
        default:
            computerPlay();
    }
}

//** Check round winner */

function checkRoundWinner() {
    if (playerSelection === computerSelection) {
        roundWinner = 0;                                             // tie
    } else if ((playerSelection == 'rock' && computerSelection != 'paper')
        || (playerSelection == 'paper' && computerSelection != 'scissors')
        || (playerSelection == 'scissors' && computerSelection != 'rock')) {
        roundWinner = 1;                                             // player win
    } else roundWinner = 2;                                          // computer win
}

//** Check game winner */

function checkGameWinner() {
    if (playerScore > computerScore && playerScore == 5) {
        gameWinner = 'You';
    } else if (computerScore > playerScore && computerScore == 5) {
        gameWinner = 'Computer';
    }
}

//** Update event log text */

function logUpdate(gameOver) {
    let logEntry = document.querySelector('.log-text');
    if (gameOver === false) {
        logEntry.textContent = `${playerSelection} VS ${computerSelection}! 
    ${(roundWinner === 0 ? 'It\'s a tie!' : (roundWinner === 1 ? 'You win this round!' : 'Computer win this round!'))}`;
    } else {
        logEntry.textContent = `Game is over! ${gameWinner} won!`
    }
}

//** Add to score and Update score in UI */

function addScore() {
    let uiPlayerScore = document.querySelector('.score-player-value');
    let uiComputerScore = document.querySelector('.score-computer-value');
    if (roundWinner === 1) {
        playerScore++;
        uiPlayerScore.textContent = `${playerScore}`;
    } else if (roundWinner === 2) {
        computerScore++;
        uiComputerScore.textContent = `${computerScore}`;
    }
}

//** Game over */

function gameOver() {
    if (playerScore === 5 || computerScore === 5) {
        rockBtn.setAttribute('disabled', 'disabled');
        paperBtn.setAttribute('disabled', 'disabled');
        scissorsBtn.setAttribute('disabled', 'disabled');
        newGameBtn.style.display = 'flex';
        return true;
    } else return false;
}

//** Play round of the game */

function playRound() {
    getComputerSelection();
    checkRoundWinner();
    addScore();
    checkGameWinner();
    logUpdate(gameOver());
}
