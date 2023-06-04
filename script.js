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

// function getUserChoice() {
//     let userChoice = prompt("Please choose: rock || paper || scissors").toLowerCase();
//     return userChoice;
// }

function playGame(computer, user) {
    let output;
    let userScore = 0;
    let computerScore = 0;

    if (computer === "rock" && user === "paper") {
        output = `PC chose ${computer} and user chose ${user}. User wins!`
        userScore++;
    }
    else if (computer === "rock" && user === "scissors") {
        output = `PC chose ${computer} and user chose ${user}. PC wins!`
        computerScore++;
    }
    else if (computer === "paper" && user === "rock") {
        output = `PC chose ${computer} and user chose ${user}. PC wins!`
        computerScore++;
    }
    else if (computer === "paper" && user === "scissors") {
        output = `PC chose ${computer} and user chose ${user}. User wins!`
        userScore++;
    }
    else if (computer === "scissors" && user === "rock") {
        output = `PC chose ${computer} and user chose ${user}. User wins!`
        userScore++;
    }
    else if (computer === "scissors" && user === "paper") {
        output = `PC chose ${computer} and user chose ${user}. PC wins!`
        computerScore++;
    }
    else {
        output = `PC chose ${computer} and user chose ${user}. It is a tie!`
    }
    return { output, userScore, computerScore };
}

// function game(){
//     let gameCounter = 5;
//     let userScore = 0;
//     while(gameCounter){

//     let roundResult = playGame(getComputerChoice(),getUserChoice());
//     console.log(roundResult.output);
//     // userScore += roundResult.roundScore;
//     // gameCounter--;

//     }
//     // if(userScore < 0){
//     //     console.log("Pc wins the game!")
//     // }
//     // else if (userScore > 0){
//     //     console.log("user wins the game!")
//     // }
//     // else{
//     //     console.log("It is a tie game!")
//     // }
// }

// // game();

const buttons = document.querySelectorAll('.button')
const result = document.querySelector('#result')
const userScoreElement = document.querySelector('#user-score');
const computerScoreElement = document.querySelector("#comp-score");

result.innerText = "Result placeholder"
userScoreElement.innerText = 0;
computerScoreElement.innerText = 0;

buttons.forEach(button => button.addEventListener('click', e => {

    let computer = getComputerChoice();
    let user = e.target.innerText.toLowerCase();
    let roundResult = playGame(computer, user);
    let userPlusOne = roundResult.userScore;
    let computerPlusOne = roundResult.computerScore;





    result.innerText = roundResult.output
    userScoreElement.innerText = userPlusOne + parseInt(userScoreElement.innerText);
    computerScoreElement.innerText = computerPlusOne + parseInt(computerScoreElement.innerText);


}))





