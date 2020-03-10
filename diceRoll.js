var playerScore = 0;
var computerScore = 0;
var pScoreDisp = document.getElementById('playerScore');
var cScoreDisp = document.getElementById('computerScore');

function rollTheDice()
{

  var dice1;
  var dice2;

  dice1 = Math.floor(Math.random() * 6) + 1;
  dice2 = Math.floor(Math.random() * 6) + 1;
  var theImage = document.getElementById('dice1Pic');
  var theImage2 = document.getElementById('dice2Pic');
  switch(dice1)
  {
    case 1:
      theImage.src=("onedice.jpg");
      break;
    case 2:
      theImage.src=("twodice.jpg");
      break;
    case 3:
      theImage.src=("threedice.jpg");
      break;
    case 4:
      theImage.src=("fourdice.jpg");
      break;
    case 5:
      theImage.src=("fivedice.jpg");
      break;
    case 6:
      theImage.src=("sixdice.jpg");
      break;
  }
  switch(dice2)
  {
    case 1:
      theImage2.src=("onedice.jpg");
      break;
    case 2:
      theImage2.src=("twodice.jpg");
      break;
    case 3:
      theImage2.src=("threedice.jpg");
      break;
    case 4:
      theImage2.src=("fourdice.jpg");
      break;
    case 5:
      theImage2.src=("fivedice.jpg");
      break;
    case 6:
      theImage2.src=("sixdice.jpg");
      break;
  }
  checkWin(dice1, dice2);
}

function checkWin(player, computer)
{
  if(player > computer)
  {
    playerScore++;
    pScoreDisp.innerHTML = "Player Score: " + playerScore;
  }
  if(computer > player)
  {
    computerScore++;
    cScoreDisp.innerHTML = "Computer Score: " + computerScore;
  }
  if(player == computer)
  {
    rollTheDice();
  }
  var winner;
  if(playerScore == 10)
  {
    winner = "player";
    showWinner(winner);
  }
  else if(computerScore == 10)
  {
    winner = "computer";
    showWinner(winner);
  }
}
showWinner(who)
{
  if(who == "computer")
  {

  }
  else
  {
    
  }
}
