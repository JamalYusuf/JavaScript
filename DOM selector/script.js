var h1 = document.querySelector("h1");
var body = document.querySelector("body");
var isBlue = false;


h1.style.color = "red";//Changes the H1 to red

if (isBlue){

	body.style.background = "white";


}
else {

	body.style.background = "#FFDD00";
}

function randomColorBackground() {

	var colors = ["#FF0000","#FF9500","#FFD200","#74E600","#1049A9","#4212AF","#A600A6"];

var colorChoice = parseInt((0 + Math.random() * 7));


	   document.body.style.backgroundColor =  colors[colorChoice];
	   // document.body.style.backgroundColor =  "rgb(" + red + ",230,0)";


}

setInterval(randomColorBackground, 1000);



	
