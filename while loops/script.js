var rangeMax, rangeMin, count; //Variables

//Print all numbers between -10 and 19
console.log("Printing all numbers between -10 and 19");
rangeMax = 19;
rangeMin = -10;
count = rangeMin; //Calculate Count

while(count <= rangeMax)
{
console.log(count)
count++;//increment by one
}

//print all even numbers between 10 and 40
console.log("Printing all even numbers between 10 and 40");
rangeMax = 40;
rangeMin = 10;
count = rangeMin; //Calculate Count
while(count <= rangeMax)
{
        if(count%2 === 0) //if it's a positive #
        {
        console.log(count)
        }
        count++;//increment by one
}
//print all odd numbers between 300 and 333
console.log("printing all odd numbers between 300 and 333");
rangeMax = 333;
rangeMin = 300;
count = rangeMin; //Calculate Count
while(count <= rangeMax)
{
        if(count%2 !== 0) //must be odd
        {
        console.log(count)
        }
        count++;//increment by one
}

//print all numbers divisible by 5 AND 3 between 5 and 50
console.log("printing all numbers divisible by 5 AND 3 between 5 and 50")
rangeMax = 50;
rangeMin = 5;
count = rangeMin; //Calculate Count

while(count <= rangeMax)
{
if(((count%3) === 0) && ((count%5) === 0)) //divisible by 3 and 5
{
console.log(count)
}
count++
}