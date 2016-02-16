
/* 
PrintReverse([1,2,3,4])
4,3,2,1
Write a funciton printReverse() that takes an array as an 
argument and prints out the elements in the array
in reverse order(don't actually reverse the array itself)

printReverse(["a","b", "c", "d"]);
"C", "B", "A"*/



function PrintReverse(arrayin)
{
	//JS check to makesure what was handed to us is an array

	if(typeof arrayin == "string" || typeof arrayin == "number" || typeof arrayin == "undefined"){
		//Lets makesure the parameter passed in is an actual object (which might be an array)  if it's not lets exit function
		console.log("Error you are trying to pass in an incorrect type, must be an array!");
		return 0;//execute no further code
	}
	else{ //If it is anything but a string, number or undefined it has to be an object thus we can treat it like a array
	for(var i = arrayin.length -1; i > -1; i--){

		console.log(arrayin[i]);
	}
	}

}

/*
write a function isUniform() which takes an array as an argument and returns true 
if all elements in the array are identical

isUniform([1,1,1,1,1]); //true
isUniform([2,1,1,1,1]); //false
isUniform(["a","b", "p"]); //false
isUniform(["b", "b", "b"]); /true


*/
function isUniform(arrayin)
{
	//check to makesure we have an object
	if(typeof arrayin == "number" || typeof arrayin == "string" || typeof arrayin == "undefined"){
		return 0;//We don't want no numbers, strings, or undefineds
	}
	else{//must be an array at this point, I hope so at least.
		var areTheyUniform = true;//condition to determine if they're equal
		var previousVal = arrayin[0];//init to first array member
	for(var i = 0; i < arrayin.length; i++)	//iterate through array
	{
		//test to see if they're all equal
		areTheyUniform = (previousVal === arrayin[0]);//Determines if they're uniform
		
		if(areTheyUniform === false){
		 break;//no point in continuing if we have determined they are not uniform;
		}
		previousVal = arrayin[i];//set up for next iteration

	}

		if(areTheyUniform === true){
		 console.log("They are uniform");
		 return true;
		}

		else if(areTheyUniform === false){
			console.log("they are not uniform");
			return false;
		}


	}
}


/*
Write a function sumArray() that accepts an array of numbers and returns the sum of all numbers in array

sumArray([1,2,3]); //6
sumArray([10,3,10,4]); //27
sumArry([-5,100]); //95
*/
function sumArray(arrayin){

	if(arrayin === "number" || arrayin === "string" || arrayin === "undefined"){//check to see its an array before doing anything else
	}
	else {
	var sum = 0;

	for(var i = 0; i < arrayin.length; i++){
		sum += arrayin[i]; //comute sum
	}

	return sum;//return it
}
}

/*
max()
write a function max() that accepts an array of numbers and returns the maximum 
number in the array
max([1,2,3]); //3
max([10,3,10,4]); //10
max([-5,100]); //100
*/

function max(arrayin){
	if(arrayin === "number" || arrayin === "string" || arrayin === "undefined"){//check to see its an array before doing anything else
	}
	else {
		var max = arrayin[0];//init to first array member

		for(var i = 0; i < arrayin.length; i++){//iterate through array
			if(arrayin[i] > max) max = arrayin[i];//determine max

		}
		return max;
	}

}