// Generate rock/paper/scissors for computer to play

function computerPlay() {
    let computerSelection;
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum == 1) {
        computerSelection = "rock";
    } else if (randomNum == 2) {
        computerSelection = "paper";
    } else if (randomNum != "" && randomNum != null) item = "scissors";
    return computerSelection;
}

// Ask for player rock/paper/scissors choice

function playerPlay() {
    let playerSelection = prompt("Choose your weapon: rock, paper or scissors!").toLowerCase();
    if (playerSelection != "rock"
        && playerSelection != "paper"
        && playerSelection != "scissors") {
        playerPlay();
    } else return playerSelection;
}