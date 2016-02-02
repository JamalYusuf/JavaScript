//Print all numbers between -10 and 19
console.log("Printing all numbers between -10 and 19");
for(var i = -10; i <= 19; i++) console.log(i);

//print all even numbers between 10 and 40
console.log("printing all even numbers between 10 and 40");
for(var i = 10; i <= 40; i+=2) console.log(i);

//print all odd numbers between 300 and 333
console.log("printing all odd numbers between 300 and 333");
for(var i = 300; i <= 333; i++) if(i%2) console.log(i);

//print all numbers divisible by 5 and 3 between 5 and 50 
console.log("printing all numbers divisible by 5 and 3 between 5 and 50");
for(var i = 5; i <= 50; i++) if(!(i%15)) console.log(i);