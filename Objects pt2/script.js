/*

Review of objects: 

In Java Script Objects are like arrays only that the key value paring is up to 
the programmer, an array the key attribute is always a number starting at 0
and going up to array.length-1. 


An Object unlike an array doesn't have to be in any order since
the Key value paring is handled by the progrmamer


when you init an object you use the following syntax


var OBJECT_NAME = {
	
	key: "value",
	key: "value",
}


to access a value stored in an object use the following syntax(s):

OBJECT_NAME["key"];
OBJECT_NAME.key; 

Both ways will access the key


In contrast to Arrays Objects don't have a particular order 



dot notiation vs bracket notation


dot notiation 

cannot call keys that start with numbers, or have spaces

bracket notation 

can call keys that start numbers or have spaces

you can put a variable containing a string to use as the lookup for bracket, 

for example 

if key value is "name"

you can do 


var str = "name";

Person[str]; // Will lookup name key inside Person object



to assign to a object key value you can do 

Person.["age"] += 1; //Adds one to the persons age.



You can initialize an empty object and just add onto it example

var Person = {};
Person.name = "Jamal Yusuf";
Person["age"] = 24;


you can also use 

var Person = new Object();



objects can hold any type of data, they can hold numbers, strings, booleans and even arrays 



Questions: are objects Javascripts class?

*/


//Object of me

var Jamal  = {

	name: "Jamal",
	age:  24,
	city: "Washington DC"

}