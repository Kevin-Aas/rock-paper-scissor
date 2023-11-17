function getComputerChoice () {
    let x = Math.random();
    if (x < 1/3) {
        return "Rock";
    }
    else if (x < 2/3) {
        return "Paper";
    }
    else {
        return "Scissor";
    }
}

function testComputerChoice () {
    /*Test to see if getComputerChoice gives desired output*/
    let rock_counter = 0;
    let paper_counter = 0;
    let scissor_counter = 0;

    for (i=0; i<10000; i++) {
        let choice = getComputerChoice();
        if (choice == "Rock") {
            rock_counter++;
        }
        else if (choice == "Paper") {
            paper_counter++;
        }
        else {
            scissor_counter++;
        }
    }
    console.log("Rock: " + rock_counter/10000 * 100 + "%");
    console.log("Paper: " + paper_counter/10000 * 100 + "%");
    console.log("Scissor :" + scissor_counter/10000 * 100 + "%");
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    console.log("Player chose " + playerSelection);
    console.log("Computer chose " + computerSelection);

    if (playerSelection == "ROCK") {
        if (computerSelection == "ROCK") {
            return "It's a draw!";
        }
        else if (computerSelection == "PAPER") {
            return "You lose! Paper beats Rock"
        }
        else if (computerSelection == "SCISSOR") {
            return "You win! Rock beats Scissor"
        }
    }
    else if (playerSelection == "PAPER") {
        if (computerSelection == "ROCK") {
            return "You win! Paper beats Rock";
        }
        else if (computerSelection == "PAPER") {
            return "It's a draw!"
        }
        else if (computerSelection == "SCISSOR") {
            return "You lose! Scissor beats Paper"
        }
    }
    else if (playerSelection == "SCISSOR") {
        if (computerSelection == "ROCK") {
            return "You lose! Rock beats Scissor";
        }
        else if (computerSelection == "PAPER") {
            return "You win! Scissor beats Paper"
        }
        else if (computerSelection == "SCISSOR") {
            return "It's a draw!"
        }
    }
}

function game() {
    console.log("Welcome to the game of Rock Paper Scissor!")
    let playerScore = 0;
    let compuerScore = 0;
    for (i=0; i<5; i++) {
        let playerSelection = prompt("Do you choose Rock, Paper or Scissor?");
        let computerSelection = getComputerChoice();
        let resultMsg = playRound(playerSelection, computerSelection);
        if (resultMsg.includes("win")) {
            playerScore++;
        }
        else if (resultMsg.includes("lose")) {
            compuerScore++;
        }
        console.log("| Player score: " + playerScore);
        console.log("| Computer score " + compuerScore);
    }
    if (playerScore < compuerScore) {
        console.log("The computer wins...")
    }
    else if (playerScore > compuerScore) {
        console.log("You win! Congratulations!")
    }
    else {
        console.log("It's a tie.")
    }
}