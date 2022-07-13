const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors');

btnRock.addEventListener('click', () => newCombatEntry(btnRock.classList[1]));
btnPaper.addEventListener('click', () => newCombatEntry(btnPaper.classList[1]));
btnScissors.addEventListener('click', () => newCombatEntry(btnScissors.classList[1]));

/** Generate computer's turn data */

function computerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    switch (randomNum) {
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break;
        default:
            computerChoice();
    }
}

/** Check who win 1 round */

function checkWinner(playerChoice, computerChoice) {
    let winner;
    if (playerChoice === computerChoice) {
        winner = 0;
    } else if ((playerChoice == 'rock' && computerChoice != 'paper')
        || (playerChoice == 'paper' && computerChoice != 'scissors')
        || (playerChoice == 'scissors' && computerChoice != 'rock')) {
        winner = 1;
    } else winner = 2;
    return winner;
}

/** Add new entry to the combat log */

function newCombatEntry(playerChoice) {
    const combatLog = document.querySelector('.combat-log');
    const newLogEntry = document.createElement('p');
    switch (checkWinner(playerChoice, computerChoice())) {
        case 1:
            newLogEntry.textContent = `You win this round!`;
            break;
        case 2:
            newLogEntry.textContent = `Computer wins this round!`;
            break;
        case 0:
            newLogEntry.textContent = `No one wins, it\'s a tie`;
            break;
    }
    combatLog.appendChild(newLogEntry);
}