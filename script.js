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
        disableButtons();
    }

    else if(computerScore == 5){
        div.textContent = "Player loses the game"
        disableButtons();

    }

}



    const buttonPaper = document.createElement("button");
    const buttonSci = document.createElement("button");
    const buttonRock = document.createElement("button");

    buttonRock.textContent = "Rock";
    buttonSci.textContent = "Sci";
    buttonPaper.textContent = "Paper";

    document.body.appendChild(buttonSci);
    document.body.appendChild(buttonPaper);
    document.body.appendChild(buttonRock);

    buttonRock.addEventListener("click", ()=>
        playRound("Rock", getComputerChoice()));

    buttonPaper.addEventListener("click", ()=>
    playRound("Paper", getComputerChoice()));

    buttonSci.addEventListener("click", ()=>
    playRound("Scissors", getComputerChoice()));


function disableButtons(){
    buttonRock.disabled = true;
    buttonPaper.disabled = true;
    buttonSci.disabled = true;
}



