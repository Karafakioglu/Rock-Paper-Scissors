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
    let roundScore = 0;

    if(computer === "rock" && user === "paper"){
        output = `PC chose ${computer} and user chose ${user}. User wins!`
        roundScore++;
    }
    else if(computer === "rock" && user === "scissors"){
        output = `PC chose ${computer} and user chose ${user}. PC wins!`
        roundScore--;
    }
    else if (computer === "paper" && user === "rock"){
        output = `PC chose ${computer} and user chose ${user}. PC wins!`
        roundScore--;
    }
    else if (computer === "paper" && user === "scissors"){
        output = `PC chose ${computer} and user chose ${user}. User wins!`
        roundScore++;
    }
    else if (computer === "scissors" && user === "rock"){
        output = `PC chose ${computer} and user chose ${user}. User wins!`
        roundScore++;
    }
    else if (computer === "scissors" && user === "paper"){
        output = `PC chose ${computer} and user chose ${user}. PC wins!`
        roundScore--;
    }
    else{
        output = `PC chose ${computer} and user chose ${user}. It is a tie!`
    }
    return {output,roundScore};
}

function game(){
    let gameCounter = 5;
    let userScore = 0;
    while(gameCounter){

    let roundResult = playGame(getComputerChoice(),getUserChoice());
    console.log(roundResult.output);
    // userScore += roundResult.roundScore;
    // gameCounter--;

    }
    // if(userScore < 0){
    //     console.log("Pc wins the game!")
    // }
    // else if (userScore > 0){
    //     console.log("user wins the game!")
    // }
    // else{
    //     console.log("It is a tie game!")
    // }
}

// game();

let rockBtn = document.getElementById('user-rock-btn');
let paperBtn = document.getElementById('user-paper-btn');
let scissorsBtn = document.getElementById('user-scissors-btn');


rockBtn.addEventListener('click',function(){
    console.log("clicked on rock");
})

paperBtn.addEventListener('click',function(){
    console.log("clicked on paper");
})

scissorsBtn.addEventListener('click',function(){
    console.log("clicked on scissors");
})