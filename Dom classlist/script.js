/*

class selectors

variable.classlist.add();
varialbe.classlist.remove();
variable.classlist.toggle();

*/

var content = document.getElementById("content");

function toggleClass(){

	content.classList.toggle("highlight");
}

function makeInvisible(){
	content.classList.add("invisible");
}

function makeVisible(){
	content.classList.add("visible");
}