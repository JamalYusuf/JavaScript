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
	content.classList.toggle("invisible");
}

function makeVisible(){
	content.classList.toggle("visible");
}