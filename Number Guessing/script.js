//create secret number
var secretNum = 4;

//ask user for guess
var userGuess = Number(prompt("Guess a number"));

if (secretNum === userGuess) alert("You got it right!");

//Otherwise, check if higher
else if (userGuess > secretNum) alert("Your number is greater than the secret number");

//Otherwise, check if lower
else  alert("Your number is smaller than the secret number");