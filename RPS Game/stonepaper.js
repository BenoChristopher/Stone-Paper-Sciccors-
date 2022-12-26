

const totalScore={computerScore:0,playerScore:0}

function getComputerChoice() {
  const computerChoice=["rock","paper","scissor"]
 //for( rcc of computerChoice)
 rcc=[Math.floor( Math.random()*3)]
 return computerChoice[rcc]
    
  
}

//console.log(getComputerChoice(computerChoice))
//console.log( typeof computerChoice)


function getResult(playerChoice, computerChoice) {
 
  let score
  if(playerChoice==computerChoice){
    score=0 ;
  }
  else if(playerChoice =='rock' && computerChoice=='scissor'){
    score=1
  }
  else if(playerChoice =='paper' && computerChoice=='rock'){
    score=1
  }
  else if(playerChoice =='scissor' && computerChoice=='paper'){
    score=1
  }
  else{  
    score=-1
  }
  return score

  


  
}


function showResult(score, playerChoice, computerChoice) {

const resultdiv=document.getElementById('result')
const handsDiv=document.getElementById('hands')
const playerScoreDiv=document.getElementById('player-score')
switch (score) {
  case -1:
    result.innerText = `You Lose Bro!`
    break;
  case 0:
    result.innerText = `It's a Draw!`
    break;
  case 1:
    result.innerText = `You Win Bro!`
    break;
}
handsDiv.innerText=`Me:${playerChoice}  vs  Computer:${computerChoice}`
playerScoreDiv.innerText= totalScore['playerScore']

}


function onClickRPS(playerChoice ) {
  console.log({playerChoice})
  const computerChoice = getComputerChoice()
  console.log({computerChoice})
  
  const score=getResult(playerChoice, computerChoice)
  totalScore['playerScore']+=score
  //console.log({PlayScore})
  //totalScore['computerScore']-=score
  console.log({score})
  console.log(totalScore)
  showResult(score,playerChoice,computerChoice )
  
}



function playGame() {
 

let rpsButtons=document.querySelectorAll('.rpsButton')
 
// console.log(rpsButtonS)
// rpsbuttons[0].onclick=()=>{console.log(rpsbuttons[0].value)}
//  rpsbuttons[1].onclick=()=>{console.log(rpsbuttons[1].value)}
//  rpsbuttons[2].onclick=()=>{console.log(rpsbuttons[2].value)}

 rpsButtons.forEach(rpsButton=>{
  rpsButton.onclick = () => onClickRPS(rpsButton.value)
 })

  // Add a click listener to the end game button that runs the endGame() function on click
  const endGameButtom=document.getElementById('endGameButton')
  endGameButtom.onclick=()=>endGame(totalScore)
  }



function endGame(totalScore) {
  totalScore['playerScore']=0
  totalScore['computerScore']=0

  
const resultdiv=document.getElementById('result')
const handsDiv=document.getElementById('hands')
const playerScoreDiv=document.getElementById('player-score')
 
resultdiv.innerText=''
handsDiv.innerText=''
playerScoreDiv.innerText=''
}

playGame()