//iseven returns true false
function isEven(val)
{
	return (val%2) === 0; //checks to see if it's even
}
//factorial 4! 1x2x3x4= 4x3x2x1, 0! = 1
function factorial(val)
{

	var sum = 1;
	for(var i = 1; i <= val; i++)
		sum *= i;
	return sum;
		

}
//kebabToSnake() replace - with _ 
function kebabToSnake(str)
{


	while(str.indexOf("-") !== -1)//continues until it finds all of em
	{
	var indexOfString = str.indexOf("-");//used to make code more readiable
	var beginingOfString = 0;//used to make code more readiable
	var endOfString = str.length - 1;//used to make code more readiable
	
	//find index of character
	str = str.substr(0,indexOfString) + "_" +str.substr(indexOfString+1);//Form new string excluding 
	
	// str.charAt(indexOf("-")) = "_";//Get the index, change it from kebab to snake

	//replace character at index	
	}

return str;
}

//all are return statements