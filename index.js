let userScore = 0;
let computerScore = 0;

let userName = prompt("Please, enter your name") || "User";

while (userScore < 3 && computerScore < 3) {
  const userChoice = prompt("Rock, Scissors, Paper... Please make your move");
  if (
    !userChoice ||
    !["rock", "scissors", "paper"].includes(userChoice.toLowerCase())
  ) {
    alert("Invalid choice. Please select rock, scissors, or paper.");
    continue;
  }

  const computerChoice = ["rock", "scissors", "paper"][
    Math.floor(Math.random() * 3)
  ];
  alert(`Computer move is: ${computerChoice}`);

  if (userChoice.toLowerCase() === computerChoice) {
    alert("It's a tie! Try again.");
  } else if (
    (userChoice.toLowerCase() === "rock" && computerChoice === "scissors") ||
    (userChoice.toLowerCase() === "scissors" && computerChoice === "paper") ||
    (userChoice.toLowerCase() === "paper" && computerChoice === "rock")
  ) {
    userScore++;
    alert(
      `You won this round: Current count is ${userName}: ${userScore} - Computer ${computerScore}`
    );
  } else {
    computerScore++;
    alert(
      `Computer won this round: Current count is ${userName}: ${userScore} - Computer ${computerScore}`
    );
  }
}

if (userScore === 3) {
  alert(
    `Congratulations. You won this game. Count - You: ${userScore} : Computer ${computerScore}`
  );
} else {
  alert(
    `Sorry. You lost this game. Count - You: ${userScore} : Computer ${computerScore}`
  );
}

const playAgain = confirm("Do you want to start a new game?");
if (playAgain) {
  userScore = 0;
  computerScore = 0;
}
