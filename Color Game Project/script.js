/*
Color picker game 

color range rgb

max = 255
min = 0

*/


//Generates a random number between the range max - min

function generateRandomRgb(max,min){
var randomRgb = (Math.random() * (max - min + 1)) + min;
return parseInt(randomRgb);
}


//generates a randomColor 
function randomColor(){
	var maximumRGB = 225;
	var minimumRGB = 0;

	var red =  generateRandomRgb(maximumRGB,minimumRGB);
	var green =  generateRandomRgb(maximumRGB,minimumRGB);
	var blue =  generateRandomRgb(maximumRGB,minimumRGB);

	return "" + red + "," + green + "," +blue
}

var ColorsBoxes = ["0,0,0","0,0,0","0,0,0","0,0,0","0,0,0","0,0,0"];// our colors array


//Fills our array with random colors
function generateBoxColors(randomColors){
	for(var i = 0; i < 6; i++){
		ColorsBoxes[i] = randomColor();
		console.log("random color for [" + i +"] is " + ColorsBoxes[i]);
	}
}



//Generates a valid number to use,  1-6 associated with box
function generateRandomRightColorChoice(){

	if(handicap === "easy")
	{
	return parseInt((Math.random() * (3 - 1 + 1)) + 1); 
	
	}
	else if (handicap === "hard")
	{
		return parseInt((Math.random() * (6 - 1 + 1)) + 1);
	}

}
var colorToGuess = "";
var randomNumberToGuess = 0;

function resetGame(){

//Generate Colors
generateBoxColors(ColorsBoxes);//lets get our colors

randomNumberToGuess = generateRandomRightColorChoice();  //random number to use from our generated colors
console.log(randomNumberToGuess);

colorToGuess = ColorsBoxes[randomNumberToGuess -1];//pick a random color to guess from array

//update view

updateBoxColor(); //lets color the boxes

updatergbText(); //lets update the text associated with the right answer

GameMessage.style.color = "white";

GameStart.textContent = "New Colors";

header.style.backgroundColor = "#3C76AE"

isWinner = false;



}


/*

Methods associated with updating document views 

*/

//Get elements

var box1 = document.querySelector("#box1");
var box2 = document.querySelector("#box2");
var box3 = document.querySelector("#box3");
var box4 = document.querySelector("#box4");
var box5 = document.querySelector("#box5");
var box6 = document.querySelector("#box6");

var GameStart = document.querySelector("#GameStart");
var GameMessage = document.querySelector("#GameMessage");

var colorValueText = document.querySelector("#colorValueText");

var header = document.querySelector("#header");

var gameHandicapEasy = document.querySelector(".game-handicap-easy");
var gameHandicapHard = document.querySelector(".game-handicap-hard");

var cheat = document.querySelector("#header-text-middle");//cheats




function updateBoxColor(){

box1.style.backgroundColor = "rgb("+ColorsBoxes[0]+")";
box2.style.backgroundColor = "rgb("+ColorsBoxes[1]+")";
box3.style.backgroundColor = "rgb("+ColorsBoxes[2]+")";

if(handicap === "hard"){


box4.style.backgroundColor = "rgb("+ColorsBoxes[3]+")";
box5.style.backgroundColor = "rgb("+ColorsBoxes[4]+")";
box6.style.backgroundColor = "rgb("+ColorsBoxes[5]+")";

}

else if(handicap === "easy")
{
box4.style.backgroundColor = "#201F21";
box5.style.backgroundColor = "#201F21";
box6.style.backgroundColor = "#201F21";
}
}


//Updates the text that holds the RGB text
function updatergbText(){
 colorValueText.textContent = colorToGuess;
}

//updates to winning message 

function updateToWinner(){

	//change header
	header.style.backgroundColor = "rgb("+ColorsBoxes[randomNumberToGuess-1]+")";

	//change all box backgrounds

	box1.style.backgroundColor = "rgb("+ColorsBoxes[randomNumberToGuess-1]+")";
	box2.style.backgroundColor = "rgb("+ColorsBoxes[randomNumberToGuess-1]+")";
	box3.style.backgroundColor = "rgb("+ColorsBoxes[randomNumberToGuess-1]+")";
	
	if(handicap === "hard")
	{
	box4.style.backgroundColor = "rgb("+ColorsBoxes[randomNumberToGuess-1]+")";
	box5.style.backgroundColor = "rgb("+ColorsBoxes[randomNumberToGuess-1]+")";
	box6.style.backgroundColor = "rgb("+ColorsBoxes[randomNumberToGuess-1]+")";
	}

	//change Gamestart text
	GameStart.textContent = "PLAY AGAIN?";

	//change GameMessage text
	GameMessage.textContent = "Correct!";

	isWinner = true;
}

//wrong answer
function updateIncorrect(){

		//change GameMessage text
	GameMessage.style.color = "black";
	GameMessage.textContent = "Incorrect!";

}


//Game Functionality 





//Listeners

GameStart.addEventListener("click",function(){
	resetGame();
});



//Logic to see if game#1 won
box1.addEventListener("click", function(){
if(!isWinner)//there isn't a winner yet
{

if(randomNumberToGuess === 1)
{
	updateToWinner();//you won!
}

else {
updateIncorrect()//you didn't win!
box1.style.backgroundColor = "#201F21"; //make it look invisibe
}
}

});


//Logic to see if game#2 won
box2.addEventListener("click", function(){
if(!isWinner)//there isn't a winner yet
{

if(randomNumberToGuess === 2)
{
	updateToWinner();//you won!
}

else {
updateIncorrect()//you didn't win!
box2.style.backgroundColor = "#201F21"; //make it look invisibe
}
}

});



//Logic to see if game#3 won
box3.addEventListener("click", function(){
if(!isWinner)//there isn't a winner yet
{

if(randomNumberToGuess === 3)
{
	updateToWinner();//you won!
}

else {
updateIncorrect()//you didn't win!
box3.style.backgroundColor = "#201F21"; //make it look invisibe
}
}

});

//Logic to see if game#4 won
box4.addEventListener("click", function(){
if(!isWinner & handicap === "hard")//there isn't a winner yet
{

if(randomNumberToGuess === 4)
{
	updateToWinner();//you won!
}

else {
updateIncorrect()//you didn't win!
box4.style.backgroundColor = "#201F21"; //make it look invisibe
}
}

});

//Logic to see if game#5 won
box5.addEventListener("click", function(){
if(!isWinner  & handicap === "hard")//there isn't a winner yet
{

if(randomNumberToGuess === 5)
{
	updateToWinner();//you won!
}

else {
updateIncorrect()//you didn't win!
box5.style.backgroundColor = "#201F21"; //make it look invisibe
}
}

});

//Logic to see if game#6 won
box6.addEventListener("click", function(){
if(!isWinner  & handicap === "hard")//there isn't a winner yet
{

if(randomNumberToGuess === 6)
{
	updateToWinner();//you won!
}

else {
updateIncorrect()//you didn't win!
box6.style.backgroundColor = "#201F21"; //make it look invisibe
}
}

});


//Difficulity

var handicap = "hard";
var isWinner = false;



gameHandicapEasy.addEventListener("click", function(){
	
	handicap = "easy";
				gameHandicapEasy.classList.add("game-handicap-on");
				gameHandicapHard.classList.remove("game-handicap-on");
				updateBoxColor();
				

			console.log(handicap);
});

gameHandicapHard.addEventListener("click", function(){
	

	handicap = "hard";
				gameHandicapHard.classList.add("game-handicap-on");
				gameHandicapEasy.classList.remove("game-handicap-on");
				updateBoxColor();


			console.log(handicap);

});


//cheat/hint

cheat.addEventListener('mouseenter', function(){
header.style.backgroundColor = "rgb("+ColorsBoxes[randomNumberToGuess-1]+") ";


});cheat.addEventListener('mouseout', function(){
if(isWinner)
{
	header.style.backgroundColor = "rgb("+ColorsBoxes[randomNumberToGuess-1]+") ";
}
else{
header.style.backgroundColor = "#3C76AE";
}

});

resetGame();//start game
