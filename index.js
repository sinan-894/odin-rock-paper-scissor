


function getComputerChoice(){
    let randomNum=Math.floor(Math.random()*3);
    if (randomNum==0){
        return 'Rock';
    }
    else if (randomNum==1){
        return "Paper";
    }
    else{
        return "Scissor";
    }
}

function getHumanChoice(){
    let humanChoice=parseInt(prompt("choose one from below\n1-Rock\n2-Paper\n3-Scissor"))
    if (humanChoice==1){
        return 'Rock';
    }
    else if (humanChoice==2){
        return "Paper";
    }
    else if(humanChoice==3){
        return "Scissor";
    }
    else{
        console.log("enter a valid choice");
        return getHumanChoice();
    }
}

function playRound(humanChoice,computerChoice){
    humanChoice = humanChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();
    switch(humanChoice){
        case "ROCK":
            if (computerChoice=='PAPER'){
                winnerHeading.textContent="You lose! Paper beats Rock"
                return -1
            }
            else if(computerChoice=='SCISSOR'){
                winnerHeading.textContent=("You win! Rock beats Scissor");
                return 1
            }
            else{
                winnerHeading.textContent=("DRAW!");
                return 0
            }
            break;
        case "PAPER":
            if (computerChoice=='SCISSOR'){
                winnerHeading.textContent=("You lose! Scissor beats Paper");
                return -1
                
            }
            else if(computerChoice=='ROCK'){
                winnerHeading.textContent=("You win! Paper beats Rock");
                return 1
            }
            else{
                winnerHeading.textContent=("DRAW!")
                return 0
            }
            break;
        case "SCISSOR":
            if (computerChoice=='ROCK'){
                winnerHeading.textContent=("You lose! Rock beats Scissor");
                return -1;
            }
            else if(computerChoice=='PAPER'){
                winnerHeading.textContent=("You win! Scissor beats Paper");
                return 1;
            }
            else{
                winnerHeading.textContent=("DRAW!");
                return 0
            }
            break;


    }

}
function calcScore(result){
    if (result===1) humanScore++;
    else if (result===-1) computerScore++;

    numberOfGamesPlayed++;
}


function displayScore(){
    scoreBoardHuman.textContent = `Human : ${humanScore}`;
    scoreBoardComputer.textContent = `Computer : ${computerScore}`;
    if (numberOfGamesPlayed===5){
        const resultHeading = document.createElement('h1');
        resultHeading.textContent = humanScore>=computerScore?'YOU WIN':"YOU LOSE";
        winnerHeading.textContent = " ";
        resultDiv.appendChild(resultHeading);


        
    }

}
function playGame(choice){
    if (numberOfGamesPlayed<5){
        const humanSelection=choice;
        const computerSelection = getComputerChoice();
        const result=playRound(humanSelection,computerSelection);
        calcScore(result);
        displayScore();

    }
}


let humanScore = 0;
let computerScore = 0;
let numberOfGamesPlayed = 0;
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const resultDiv = document.querySelector('div.result');
const winnerHeading = document.querySelector('#game-result');
const scoreBoardHuman = document.querySelector('#human');
const scoreBoardComputer = document.querySelector('#computer');
rock.addEventListener("click",()=>{
    playGame('rock');
});

paper.addEventListener("click",()=>{
    playGame('paper');

});

scissor.addEventListener("click",()=>{
    playGame('scissor');
})