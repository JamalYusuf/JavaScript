var dogs = ["Rusty", "Lucky", "Bubba"]; //Array
console.log(dogs[1]); //accessing member, Rusty

dogs.push("James");//Adds a new dog

var doggies = {//Object like dictionary Key Value pair
	name: "Rusty",
	breed: "Lab"

}

console.log(doggies["name"]);//accessing key name
console.log(doggies.name); //accessing key name

doggies.age = 4;//adding new key 
// doggies["age"] = 4; Alternative syntax

/*

Any Array is a special type of object, where keys are numbers

*/