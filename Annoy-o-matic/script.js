// var answer = prompt("Are we there yet?");
// answer = answer.toUpperCase();


// while(answer !== "YES" && answer !== "YE")
// {
// 	var answer = prompt("Are we there yet?");
// 	answer = answer.toUpperCase();
// }
// alert("We made it we are there!");


//Verison 2

var answer = (prompt("Are we there yet?")).toUpperCase();

while(answer.indexOf("YES") === -1 &&  answer.indexOf("YE") === -1)
{
	var answer = (prompt("Are we there yet?")).toUpperCase();
}
alert("We are there!");