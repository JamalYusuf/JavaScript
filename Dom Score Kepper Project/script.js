var playerOneBtn = document.querySelector("#p1");
var playerTwoBtn = document.getElementById("p2");
var h1 = document.querySelectr("h1");

var player1Score = 0;
var player2Score = 0;


playerOneBtn.addEventListener("click", function(){
	player1Score++;
	h1.textContent = player1Score;

});