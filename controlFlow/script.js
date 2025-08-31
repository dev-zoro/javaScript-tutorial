// if else else if
// switch case
// earaly return pattern

// if (loggedIn && admin) {
// } else if (loggedIn) {
// } else {
// }

// function getGrade(score) {
// 	if (score >= 90 && score <= 100) return "A";
// 	if (score >= 80 && score <= 89) return "B";
// 	if (score >= 70 && score <= 79) return "C";
// 	if (score >= 60 && score <= 69) return "D";
// 	if (score >= 33 && score <= 59) return "E";
// 	if (score >= 0 && score <= 32) return "Fail";
// 	return "Invalid marks";
// }

// swtich-case
// switch (val) {
// 	case 1:
// 		break;
// 	case 2:
// 		break;
// 	case 3:
// 		break;
// 	default:
// }

// console.log(getGrade(125));

// rock-paper-scissors logic
// let player1 = prompt("[Player1] - Enter your choice: ");
// let player2 = prompt("[Player2] - Enter your choice: ");

// function game(player1, player2) {
// 	player1 = player1.toLowerCase();
// 	player2 = player2.toLowerCase();

// 	if (player1 === "rock" && player2 === "rock") return "Game tie!";
// 	if (player1 === "rock" && player2 === "paper") return "Player2 wins!";
// 	if (player1 === "rock" && player2 === "scissors") return "Player1 wins!";
// 	if (player1 === "paper" && player2 === "rock") return "Player1 wins!";
// 	if (player1 === "paper" && player2 === "paper") return "Game tie!";
// 	if (player1 === "paper" && player2 === "scissors") return "Player2 wins!";
// 	if (player1 === "scissors" && player2 === "rock") return "Player2 wins!";
// 	if (player1 === "scissors" && player2 === "paper") return "Player1 wins!";
// 	if (player1 === "scissors" && player2 === "scissors") return "Game tie!";
// }

// console.log(game(player1, player2));

// const header = document.getElementById("header");
// header.innerText = game(player1, player2);

// rock-paper-scissors logic
// let user = prompt("Enter your choice: ");
user = user.toLocaleLowerCase();
let choices = ["rock", "scissors", "paper"];
let index = Math.floor(Math.random() * (choices.length - 1 - 0 + 1)) + 0;
let computer = choices[index];

function rps(user, computer) {
	if (!choices.includes(user)) return "Invalid Choice!"; // edge case if user input is wrong
	if (user === computer) return "draw!"; // first handle draw case were both have same choice
	// conditions were user can win
	if (user === "rock" && computer === "scissors") return "User win!";
	if (user === "scissors" && computer === "paper") return "User Win!";
	if (user === "paper" && computer === "rock") return "User win!";
	// conditions were user if winnnig apart from them in all other computer will win thats why we have return computer win!
	return "Computer Win!";
}

// printng the results
// const header = document.getElementById("header");
// const userChoice = document.getElementById("userChoice");
// const computerChoice = document.getElementById("computerChoice");
// header.innerText = rps(user, computer);
// userChoice.innerText = `User Choose: ${user}`;
// computerChoice.innerText = `Computer Choose: ${computer}`;
