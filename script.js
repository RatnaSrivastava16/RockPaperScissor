let userScore=0;
let compScore=0;


const genComputerChoice = () => {
const option=["rock","paper","scissors"];
const randind =Math.floor(Math.random()*3);
return option[randind];
}

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const msgParagraph=document.querySelector("#msg");
const drawGame = () => {
    console.log("Drawgame");
    msg.innerText="Draw";
    msg.style.backgroundColor="blue";

}
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("UserWon");
        msg.innerText=`You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("Userlost");
        msg.innerText=`You Lost! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";

    }
}

const playGame = (userChoice) => {
    console.log("user choice =",userChoice);
    const compChoice=genComputerChoice();
    console.log("comp choice = ",compChoice);
    if(userChoice==compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock")
            {
                userWin=compChoice === "paper" ?false:true;
            }
        else if(userChoice === "paper")
            {
                userWin=compChoice === "scissors" ?false:true;

            }
        else{
            userWin=compChoice === "rock" ?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}


const choices=document.querySelectorAll(".choice");
choices.forEach((choice) =>  {
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
})