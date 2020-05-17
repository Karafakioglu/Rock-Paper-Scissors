const userScore=0;
const computerScore=0;
const humanScore_span = document.getElementById("human-score");
const compScore_span= document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock")
const paper_div = document.getElementById("paper")
const scissors_div = document.getElementById("scissors")

// Computer chooses randomly out of defined const array

function getCompChoice(){
	const choices = ['rock','paper','scissors'];
	let choice = choices[Math.floor(Math.random()*choices.length)];
	return choice;
}

// Game Logic

function game(userChoice) {
	const compChoice= getCompChoice();

	console.log(`----- user choise is ${userChoice} and computer choice is ${compChoice} -----`);

	// Checks whether user wins or not

	switch (userChoice+compChoice) {
		case "rockscissors":
		case "paperrock":
		case "scissorspaper":
		console.log("user wins!");
		break;
	}

	// Checks whether comp wins or not

	switch (compChoice+userChoice) {
		case "rockscissors":
		case "paperrock":
		case "scissorspaper":
		console.log("computer wins!");
		break;
	}

	// Checks whether it is a tie or not

	switch(compChoice+userChoice){
		case "rockrock":
		case "paperpaper":
		case "scissorsscissors":
		console.log("It is a tie!");
		break;
	}
}

// Main

function main() {
	rock_div.addEventListener("click",function(){
		game('rock');
	})

	paper_div.addEventListener("click",function(){
		game('paper');
	})

	scissors_div.addEventListener("click",function(){
		game('scissors');
	})


}

main();