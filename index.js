
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
    let humanChoice=parseInt(prompt("choose one from below\n1-Rock\n2.Paper\n3.Scissor"))
    console.log(humanChoice)
}