/*


Movie database project 


Create an array of movie objects,  Each movie should have a title, rating, and hasWatched properties.
Iterate through the array and print out message. 

Title string
Rating number
hasWatched boolean

print out a line


You have watched "movie title" - rating stars
You have not seen "movie title" - rating stars


*/

var movies = [
	{
		title: "In Bruges", 
		hasWatched: true, 
		rating: 5
	},

	{
		title: "Frozen", 
		hasWatched: false, 
		rating: 4.5

	},
	{
		title: "Agent 47", 
		hasWatched: true, 
		rating: 3.5

	}
]


movies.forEach(function(movie){
	var results = "You have";
	var movieTitle = '\"' + movie["title"] + '\"';

	if(movie["hasWatched"] == true){

	results += " watched ";
	
	}
	else{
	results += " not watched ";
	}

	console.log(results + movieTitle + " "+ movie["rating"] + " stars")
})