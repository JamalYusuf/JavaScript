var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(6);


	//pick a new random color from our array 
	pickedColor =pickColor();
	//Change color display to match picked Color 
	colorDisplay.textContent = pickedColor; 

	//change the colors of the squares on the page 
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}

	h1.style.background = "#232323";


});
colorDisplay.textContent = pickedColor;


for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listener to squares
	squares[i].addEventListener("click", function(){

	//grab color of linked square
	 var clickedColor = this.style.background;
	 	console.log(clickedColor);

	//compare color to pickedColor 
	console.log(clickedColor, pickedColor);
	if(clickedColor === pickedColor){
		resetButton.textContent = "Play Again?";
	 messageDisplay.textContent = "Correct!";
	 changeColors(clickedColor);
	 h1.style.background = clickedColor;
	}
	else{
		this.style.background = "#232323";
		messageDisplay.textContent = "Try Again!";
	}

	});
}
function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
	//change each color to match given color 
	squares[i].style.background = color;
		
	}



}

function pickColor(){
	var random = Math.floor((Math.random() * colors.length ));
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random color to array 
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor());

	}
	
	//return array
	return arr;
}

function randomColor(){

	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	
	//pick a "blue"  from 0 - 255 
	var b = Math.floor(Math.random() * 256);


	return "rgb("+ r + ", " + g + ", " + b + ")";


}
