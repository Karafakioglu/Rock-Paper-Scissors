const userScore=0;
const computerScore=0;
const humanScore_span = document.getElementById("human-score");
const compScore_span= document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock")
const paper_div = document.getElementById("paper")
const scissors_div = document.getElementById("scissors")

function game(userChoice) {
	alert(userChoice);
}

// Computer chooses randomly out of defined const array

function compChoice(){
	const choices = ['rock','paper','scissors'];
	let choice = choices[Math.floor(Math.random()*choices.length)];
	return choice;
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

	console.log(compChoice());
}

main();