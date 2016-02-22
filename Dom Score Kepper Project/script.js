

/*

Simple app to keep score of any game for two players

*/

var playerOneBtn = document.querySelector("#p1");
var playerTwoBtn = document.getElementById("p2");
var scoreResetBtn = document.getElementById("reset");
var winningScoreInput = document.querySelector("#winningScore");


var Player1Display =  document.querySelector("#p1Display");
var Player2Display =  document.querySelector("#p2Display");
var winningScoreDisplay = document.querySelector("#winningScoreDisplay");


var gameOver = false;
var winningScore = 5;
winningScoreInput.valueAsNumber = winningScore;
var player1Score = 0;
var player2Score = 0;


playerOneBtn.addEventListener("click", function(){
	if(!gameOver)
	{		
	player1Score++;

	if(player1Score === winningScore){
		gameOver = true;
		isWinner(Player1Display);
		isLoser(Player2Display);
	}

	Player1Display.textContent = player1Score;
	}

});

playerTwoBtn.addEventListener("click", function(){
	if(!gameOver)
	{
	player2Score++;
	if(player2Score === winningScore){
		gameOver = true;	
		isWinner(Player2Display);
		isLoser(Player1Display);
	} 
	Player2Display.textContent = player2Score;

	}

});


scoreResetBtn.addEventListener("click", function(){

resetGame();





});

winningScoreInput.addEventListener("change", function(){

winningScore = winningScoreInput.valueAsNumber;
winningScoreDisplay.textContent = winningScore;

});

function resetGame(){


//Udpate variables
player1Score = 0;
player2Score = 0;
gameOver = false;
winningScore = winningScoreInput.valueAsNumber;



//Update Page view
Player1Display.textContent = player1Score;
Player2Display.textContent = player2Score;
winningScoreDisplay.textContent = winningScore;
isNeitherWinnerOrLoser(Player1Display);
isNeitherWinnerOrLoser(Player2Display);




}

function isWinner(arg){

	arg.classList.add("winner");

}

function isLoser(arg){
	arg.classList.add("loser");
}

function isNeitherWinnerOrLoser(arg){
	arg.classList.remove("loser");
	arg.classList.remove("winner");
}


