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

