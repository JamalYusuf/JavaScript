/*


var tag = document.querySelector("tag");

tag.addEventListner("event", function);


*/

var offBtn = document.querySelector(".offBtn");
var onBtn = document.querySelector(".onBtn");
var body = document.querySelector("body");

offBtn.addEventListener("click",lightsOff);
onBtn.addEventListener("click", lightsOn);

function lightsOff(){
	body.classList.toggle("lightsOff");

}

function lightsOn(){
	body.classList.toggle("lightsOn")
}