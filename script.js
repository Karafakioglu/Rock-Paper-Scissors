 function getComputerChoice() {
     let randomNumber = Math.floor(Math.random() * 3);
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

function getUserChoice() {
    let userChoice = prompt("Please choose: rock || paper || scissors").toLowerCase();
    return userChoice;
}

function playGame(computer, user) {
    let output;
    let number = 0;

    if(computer === "rock" && user === "paper"){
        output = `PC chose ${computer} and user chose ${user}. User wins!`
        number++;
    }
    else if(computer === "rock" && user === "scissors"){
        output = `PC chose ${computer} and user chose ${user}. PC wins!`
        number--;
    }
    else if (computer === "paper" && user === "rock"){
        output = `PC chose ${computer} and user chose ${user}. PC wins!`
        number--;
    }
    else if (computer === "paper" && user === "scissors"){
        output = `PC chose ${computer} and user chose ${user}. User wins!`
        number++;
    }
    else if (computer === "scissors" && user === "rock"){
        output = `PC chose ${computer} and user chose ${user}. User wins!`
        number++;
    }
    else if (computer === "scissors" && user === "paper"){
        output = `PC chose ${computer} and user chose ${user}. PC wins!`
        number--;
    }
    else{
        output = `PC chose ${computer} and user chose ${user}. It is a tie!`
    }
    return {output,number};
}

function game(){
    let gameCounter = 5;
    let userScore = 0;
    while(gameCounter){

    let test = playGame(getComputerChoice(),getUserChoice());
    console.log(test.output);
    userScore += test.number;
    gameCounter--;

    }
    if(userScore < 0){
        console.log("Pc wins the game!")
    }
    else if (userScore > 0){
        console.log("user wins the game!")
    }
    else{
        console.log("It is a tie game!")
    }
}

game();