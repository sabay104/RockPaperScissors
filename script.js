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



let humanScore = 0;
let computerScore = 0;

const div = document.createElement("div");
document.body.appendChild(div);

function playRound(humanChoice, computerChoice){

    if(
        humanChoice === "Rock" && computerChoice === "Scissors" ||
        humanChoice === "Paper" && computerChoice === "Rock" ||
        humanChoice === "Scissors" && computerChoice === "Paper"
    ){
        div.textContent = `You win this round! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    }
    else if(humanChoice === computerChoice){
        div.textContent = "Its a tie"
    }

    else{
        div.textContent = `Computer win this round! ${humanChoice} beats ${computerChoice}`;
        computerScore++;
    }

    div.textContent += ` | Score: You ${humanScore} - ${computerScore} Computer`;

    if(humanScore == 5){
        div.textContent = "Player wins the game"
        div.textContent += ` | Score: You ${humanScore} - ${computerScore} Computer`;
        disableButtons();
    }

    else if(computerScore == 5){
        div.textContent = "Player loses the game"
        div.textContent += ` | Score: You ${humanScore} - ${computerScore} Computer`;

        disableButtons();

    }

}



   const buttonRock = document.createElement("button");
   const buttonScissors = document.createElement("button");
   const buttonPaper = document.createElement("button");

buttonRock.textContent = "Rock";
buttonPaper.textContent = "Paper";
buttonScissors.textContent = "Scissors";

    document.body.appendChild(buttonRock);
    document.body.appendChild(buttonScissors);
    document.body.appendChild(buttonPaper);

    buttonRock.addEventListener("click", ()=>
        playRound("Rock", getComputerChoice()));

    buttonScissors.addEventListener("click", ()=>
    playRound("Scissors", getComputerChoice()));

    buttonPaper.addEventListener("click", ()=>
    playRound("Paper", getComputerChoice()));



    function disableButtons() {
        buttonRock.disabled = true;
        buttonScissors.disabled = true;
        buttonPaper.disabled = true;
    }
