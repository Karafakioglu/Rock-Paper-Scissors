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

const buttons = document.querySelectorAll('.button')
const result = document.querySelector('#result')
const userScoreElement = document.querySelector('#user-score');
const computerScoreElement = document.querySelector("#comp-score");
const endResult = document.querySelector("#end-result");

let UserScoreText = userScoreElement.innerText;
let computerScoreText = computerScoreElement.innerText;

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

    if ((userScoreElement.innerText || computerScoreElement.innerText) == 5) {
        if (userScoreElement.innerText > computerScoreElement.innerText) {
            endResult.innerText = "User wins the game!";
        }
        else if (computerScoreElement.innerText > userScoreElement.innerText) {
            endResult.innerText = "Computer wins the game!";
        }
        else {
            endResult.innerText = "The game is a tie!";
        }
    }


}))





