
let humanScore=0;
let computerScore=0;


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
    else if(humanChoice=3){
        return "Scissor";
    }
    else{
        console.log("enter a valid choice");
        getHumanChoice();
    }
}

function playRound(humanChoice,computerChoice){
    humanChoice = humanChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();
    switch(humanChoice){
        case "ROCK":
            if (computerChoice=='PAPER'){
                console.log("You lose! Paper beats Rock");
                computerScore+=1;
            }
            else if(computerChoice=='SCISSOR'){
                console.log("You win! Rock beats Scissor");
                humanScore+=1;
            }
            else{
                console.log("DRAW!");
            }
            break;
        case "PAPER":
            if (computerChoice=='SCISSOR'){
                console.log("You lose! Scissor beats Paper");
                computerScore+=1;
            }
            else if(computerChoice=='ROCK'){
                console.log("You win! Paper beats Rock");
                humanScore+=1;
            }
            else{
                console.log("DRAW!");
            }
            break;
        case "SCISSOR":
            if (computerChoice=='ROCK'){
                console.log("You lose! Rock beats Scissor");
                computerScore+=1;
            }
            else if(computerChoice=='PAPER'){
                console.log("You win! Scissor beats Paper");
                humanScore+=1;
            }
            else{
                console.log("DRAW!");
            }
            break;


    }

}