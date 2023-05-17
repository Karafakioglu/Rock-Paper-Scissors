function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    var computerChoice;


    switch (randomNumber) {
        case 0:
            computerChoice = "Rock"
            break;
        case 1:
            computerChoice = "Paper"
            break;
        case 2:
            computerChoice = "Scissors"
            break;
        default:
            console.log("Something aint right!")
    }

    return computerChoice;
}

console.log(getComputerChoice());