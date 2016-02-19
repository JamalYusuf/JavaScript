/*

Select first p tag 

*/


//first way

var firstWay = document.body.querySelector("p");

//second way 
var secondWay = document.body.getElementsByTagName("p")[0];

 //third way
var thirdWay = document.body.querySelectorAll("h1 + p");

 //fourth way 
 var fourthWay = document.body.querySelector("p:first-of-type");


 console.log(firstWay);
 console.log(secondWay);
 console.log(thirdWay);
 console.log(fourthWay);