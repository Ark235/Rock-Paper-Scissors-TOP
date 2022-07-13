


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
    } else {
        playerInput = 0;
        return playerInput;
    }
}

// Play round of the game

function playRound(playerSelection = playerPlay(), computerSelection = computerPlay()) {
    if (playerSelection != 0) {
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
            alert("Computer won this round, " + computerSelection + " beats " + playerSelection);
        } else alert("It's a tie!");
        return roundWinner;
    } else return -1;                                                           // Wrong input
}

// Play the game

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 1; i <= 5; i++) {
        alert(`It's ${i} round!`);
        let counter = playRound();

        // Add to score

        if (counter == 1) {
            playerScore++;
        } else if (counter == 2) {
            computerScore++;
        } else if (counter == -1) {
            alert("Wrong input. Refresh this page or type 'game()' in the console to begin anew.");
            break;
        }

        // Check the score

        if (i > 3 && (computerScore > playerScore)) {
            alert(`Computer wins with score ${computerScore + " : " + playerScore}`);
            break;
        } else if (i > 3 && (computerScore < playerScore)) {
            alert(`You win with score ${playerScore + " : " + computerScore}`);
            break;
        } else if (i > 3 && (computerScore == playerScore)) {
            alert(`It's a tie! Score is ${"Computer " + computerScore + " : " + playerScore + " Player"}`);
        }
    }
}