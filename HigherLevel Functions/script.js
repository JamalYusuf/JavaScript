function sing() {

	console.log("Hello my darling, hello my darling");
}


//set interval
setInterval(sing, 1000); //Will set the sing func to repeat every 1second

//clear interval
// clearInterval(); takes in an argument as an int that the console supplies

/*
aparently it's possible in JS to create a function within a function call... and not even give it a name.
*/

setInterval(function(){console.log("hello World!")}, 1000);