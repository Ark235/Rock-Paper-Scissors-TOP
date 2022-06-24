function computerPlay() {
    let item;
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum == 1) {
        item = "rock";
    } else if (randomNum == 2) {
        item = "paper";
    } else if (randomNum != "" && randomNum != null) item = "scissors";
    return item;
}

