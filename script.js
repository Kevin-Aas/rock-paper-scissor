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
    document.querySelector("#playerchoice").textContent = playerSelection;
    document.querySelector("#computerchoice").textContent = computerSelection;

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
    let playerScore = 0;
    let compuerScore = 0;
    //for (i=0; i<5; i++) {
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
    //}
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
// set up scores:
playerScore = 0;
computerScore = 0;

// get all buttons:
let buttons = document.querySelectorAll('button');

// set event listener for each button:
buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        if (playerScore < 5 && computerScore < 5) {
            let playerSelection = e.target.innerHTML;
            let computerSelection = getComputerChoice();
            let resultMsg = playRound(playerSelection, computerSelection);
            // document.querySelector("#resultDisplay").textContent = resultMsg;
            // count scores:
                if (resultMsg.includes("win")) {
                    document.querySelector("#comparer").textContent = ">";
                    playerScore++;
                }
                else if (resultMsg.includes("lose")) {
                    document.querySelector("#comparer").textContent = "<";
                    computerScore++;
                }
                else {
                    document.querySelector("#comparer").textContent = "=";
                }
            document.querySelector("#playerscore").textContent = playerScore;
            document.querySelector("#computerscore").textContent = computerScore;
            if (playerScore > 4) {
                document.querySelector("#winnertext").textContent = "You Won!";
            }
            else if (computerScore > 4) {
                document.querySelector("#winnertext").textContent = "You Lost";
            }
        }
    });
});