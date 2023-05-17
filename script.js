function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    var computerChoice;


    switch (randomNumber) {
        case 0:
            computerChoice = "rock"
            break;
        case 1:
            computerChoice = "paper"
            break;
        case 2:
            computerChoice = "scissors"
            break;
        default:
            console.log("Something aint right!")
    }

    return computerChoice;
}

function getUserChoice(){
    let userChoice = prompt("Please choose: rock || paper || scissors").toLowerCase();
    return userChoice;
}

