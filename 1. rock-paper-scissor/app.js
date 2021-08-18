let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice()
{
    const choices=['r','p','s'];
    const index=Math.floor(Math.random()*3);
    return choices[index];
}

function showResult(result)
{
    result_p.innerHTML=result;
}

function convertToWord(letter)
{
    if(letter=="r") return "Rock";
    if(letter=="p") return "Paper";
    return "Scissors";
}

function win(userChoice,computerChoice)
{
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    showResult(convertToWord(userChoice)+" Beats "+convertToWord(computerChoice)+". You Win!!!");
}

function lose(userChoice,computerChoice)
{
    computerScore++;
    computerScore_span.innerHTML=computerScore;
    userScore_span.innerHTML=userScore;
    showResult(convertToWord(userChoice)+" loses to "+convertToWord(computerChoice)+". You lose...");
}

function draw(userChoice)
{
    showResult("Draw");
}

function game(userChoice){
    const computerChoice=getComputerChoice();
    switch(userChoice+computerChoice)
    {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice);
            break;
    }
}

function main()
{
    rock_div.addEventListener("click",function(){
        game("r");
    })

    paper_div.addEventListener("click",function(){
        game("p");
    })

    scissor_div.addEventListener("click",function(){
        game("s");
    })
    
}

main();
