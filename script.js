function getComputerChoice(){

    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }

}

function getHumanChoice(){

    let choice = prompt("Choose Rock Paper or Scissors");

    return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){

    if(
        humanChoice === "Rock" && computerChoice === "Scissors" ||
        humanChoice === "Paper" && computerChoice === "Rock" ||
        humanChoice === "Scissors" && computerChoice === "Paper"
    ){
        console.log(`You win ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else if(humanChoice === computerChoice){
        console.log("It's a tie");
    }

    else{
        console.log(`You loose ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

