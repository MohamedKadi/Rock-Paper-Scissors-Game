let humanScore=0;
let computerScore=0;

function getComputerChoice(){
    let Cchoice;
    if(Math.random()<=0.3){
        Cchoice="rock";
    }else if (Math.random()>0.3 && Math.random()<=0.6){
        Cchoice="paper";
    }else{
        Cchoice="scissors";
    }
    return Cchoice;
}
function getHumanChoice(){
    let Hchoice;
    do {
        Hchoice = prompt("What's your choice");
      } while (Hchoice.toLocaleLowerCase()!=="rock" && Hchoice.toLocaleLowerCase()!=="paper" && Hchoice.toLocaleLowerCase()!=="scissors");
    return Hchoice.toLocaleLowerCase();
}
function playRound(humanChoice, computerChoice) {
    console.log("the computer choses",computerChoice);
    //hc rock
    if(humanChoice==="rock"){
        if(computerChoice==="rock"){
            console.log("draw");
        }else if(computerChoice==="paper"){
            computerScore++;
            console.log("computer wins",computerScore," vs ",humanScore);
        }else {
            humanScore++;
            console.log("human wins",computerScore," vs ",humanScore);
        }
    }else if (humanChoice==="paper"){
        if(computerChoice==="rock"){
            humanScore++;
            console.log("human wins",computerScore," vs ",humanScore);
        }else if(computerChoice==="paper"){
            console.log("draw");
        }else {
            computerScore++;
            console.log("computer wins",computerScore," vs ",humanScore);
        }
    }else{
        if(computerChoice==="rock"){
            humanScore++;
            console.log("human wins",computerScore," vs ",humanScore);
        }else if(computerChoice==="paper"){
            computerScore++;
            console.log("computer wins",computerScore," vs ",humanScore);
        }else {
            console.log("draw");
        }
    }
}
  
function playGame(){
    for(let i = 1 ; i <=5;i++){
        playRound(getHumanChoice(),getComputerChoice());
    }
}
playGame();

if(humanScore>computerScore){
    console.log("you did win against the robot");
}else if(humanScore<computerScore){
    console.log("the robot win's");
}else{
    console.log("draw");
}