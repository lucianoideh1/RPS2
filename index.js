const buttonsContainer = document.getElementById("buttons-container")
const buttons = document.querySelectorAll("button")
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const playerScoreEl = document.getElementById("player-score")
const pcScoreEl = document.getElementById("pc-score")



buttons.forEach(button => {
    button.addEventListener("click",() => {
    alert(button.id);
    })
})

let playersInput = null;
let computersInput = null;
let playerScore = 0;
let pcScore = 0;

rock.addEventListener("click",function(){
playersInput = "rock";
console.log("rock")
takeComputersInput()
playRound("rock")
}) 
paper.addEventListener("click",function(){
playersInput = "paper";
takeComputersInput()
playRound("paper")
}) 
scissors.addEventListener("click",function(){
playersInput = "scissors";
takeComputersInput()
playRound("scissors")
})


function takeComputersInput(){
const options = ["rock", "paper", "scissors"]

computersInput = options[Math.floor(Math.random() * options.length)]
console.log(computersInput)
}
function playRound(playersInput){
if(playersInput === "rock" && computersInput === "scissors"){
    console.log("you win")
    playerScore++
    playerScoreEl.textContent = `${playerScore}`
} else if(playersInput === "rock" && computersInput === "paper"){
    pcScore++
    pcScoreEl.textContent = `${pcScore}`
    console.log("you lose")
} else if(playersInput === "rock" && computersInput === "rock"){
    console.log("you tied")
} else if(playersInput === "paper" && computersInput === "rock"){
    console.log("you win")
    playerScore++
    playerScoreEl.textContent = `${playerScore}`
}else if(playersInput === "paper" && computersInput === "scissors"){
    pcScore++
    pcScoreEl.textContent = `${pcScore}`
    console.log("you lose")
}else if(playersInput === "paper" && computersInput === "paper"){
    console.log("you tied")
}else if(playersInput === "scissors" && computersInput === "rock"){
    pcScore++
    pcScoreEl.textContent = `${pcScore}`
    console.log("you lose")
}else if(playersInput === "scissors" && computersInput === "paper"){
    console.log("you win")
    playerScore++
    playerScoreEl.textContent = `${playerScore}`
}else if(playersInput === "scissors" && computersInput === "scissors"){
    console.log("you tied")
}
}

