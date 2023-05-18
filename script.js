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

function playGame(computer, user) {/* 
    if (computer === user) {
        console.log(`Computer chose ${computer} and you chose ${user}. It is a tie!`);
    }
     */
    let output;

    if(computer === "rock" && user === "paper"){
        output = `PC chose ${computer} and user chose ${user}. User wins!`
    }
    else if(computer === "rock" && user === "scissors"){
        output = `PC chose ${computer} and user chose ${user}. PC wins!`
    }
    else if (computer === "paper" && user === "rock"){
        output = `PC chose ${computer} and user chose ${user}. PC wins!`
    }
    else if (computer === "paper" && user === "scissors"){
        output = `PC chose ${computer} and user chose ${user}. User wins!`
    }
    else if (computer === "scissors" && user === "rock"){
        output = `PC chose ${computer} and user chose ${user}. User wins!`
    }
    else if (computer === "scissors" && user === "paper"){
        output = `PC chose ${computer} and user chose ${user}. PC wins!`
    }
    else{
        output = `PC chose ${computer} and user chose ${user}. It is a tie!`
    }
    return output;
}

let result = playGame(getComputerChoice(),getUserChoice());
console.log(result);