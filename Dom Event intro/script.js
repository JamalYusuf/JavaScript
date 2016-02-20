/*


var tag = document.querySelector("tag");

tag.addEventListner("event", function);


*/

var offBtn = document.querySelector(".offBtn");
var body = document.querySelector("body");
var isOn = true;

offBtn.addEventListener("click",lightsOff);

function lightsOff(){


	if(isOn)
	{
	body.classList.toggle("lightsOff");
	offBtn.classList.toggle("onBtn");
	offBtn.textContent = "Turn Lights On";
	isOn = !isOn;
	}
	else{
	body.classList.toggle("lightsOff");
		offBtn.classList.toggle("onBtn");
	offBtn.textContent = "Turn Lights Off";
	isOn = !isOn;

	}

}

