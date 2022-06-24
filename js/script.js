// Generate rock/paper/scissors for computer to play

function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    switch (randomNum) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
        default:
            computerPlay();
    }
}

// Ask for player rock/paper/scissors choice

function playerPlay() {
    let playerInput = prompt("Rock, paper or scissors?").toLowerCase();
    if (playerInput === "rock" || playerInput === "paper" || playerInput === "scissors") {
        return playerInput;
    } else alert("Wrong input. Refresh this page to begin anew.");
}

// Play round of the game

function playRound(playerSelection = playerPlay(), computerSelection = computerPlay()) {
    let roundWinner;
    alert(playerSelection + " VS " + computerSelection);
    if (playerSelection === computerSelection) {
        roundWinner = 0;                                                    // No one wins. Tie. 0
    } else if ((playerSelection === "rock" && computerSelection != "paper") 
    || (playerSelection === "scissors" && computerSelection != "rock")
    || (playerSelection === "paper" && computerSelection != "scissors")) {
        roundWinner = 1;                                                    // Player wins. 1
    } else {
        roundWinner = 2;                                                    // Computer wins. 2
    }
    if (roundWinner == 1) {
        alert("You won, " + playerSelection + " beats " + computerSelection);
    } else if (roundWinner == 2) {
        alert("Computer won, " + computerSelection + " beats " + playerSelection);
    } else alert("It's a tie!");
    return roundWinner;
}
