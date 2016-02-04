var colors = ["red", "blue", "green", "yellow"];


//Using push to add to the end of the array
colors.push("brown");//Brown is now array index 4

console.log(colors[4] + "= Colors[4]");//Should print color brown to the console.


//now if I wanted to remove brown the last element in the array I could
//remove last element using pop

colors.pop();//doesn't take any arguments will remove the last element from the array

console.log(colors[4] + "= colors[4]");//Should be an error (not an error but undefined... js stuff), because there is no 4th index color anymore.


//Adding and removing from the begining of an array

//to add something to the begining of an array

colors.unshift("brown");//adds brown to index 0
console.log(colors[0] + "= colors[0]");//This is now brown, use to be red

//to remove first element in an array
colors.shift(); //returns the first element so we can store it if we want, then removes it
console.log(colors[0] + "= colors[0]");//returns reds

//Find the index of a color

var indexOfRed = colors.indexOf("red");
console.log(indexOfRed);// should print 0 


//To copy an array and clone it

var colorsCopy = colors.slice();//creates a carbon copy of colors array

var colorsNotClone = colors.slice(0,2); //creates a copy of colors only taking elements right of 0 and left of 2


/*
summary of array methods

push adds to the end of an array
pop removes from the end of an arra

unshift adds to the begining of an array
shift removes from the beging of an array

indexOf gives you the first index of of the array index that matches search term

slice if called without any arguments makes a complete copy of an array
slice with 2 arguments, starting index, ending index will generate an array inclusive between those two arguments

*/