

//Object containing css note that it must use Camal case 

var style = {
	backgroundColor: "red",
	color: "white",
	textDecoration: "underline",
	border: "1px solid blue"
}


//Jquery Selector

$("li").css(style); //Will apply style to all li elements




 //  Assignment 
	// 1. Correctly include jQuery
	// 2. Select all divs and give them a purple background
	// 3. Select the divs with class "highlight" and make them 200px wide
	// 4. Select the div with id "third" and give it a orange border 
	// 5. Bonus: select the first div only and change its font color to pink

$("div").css("background", "purple");
$("div.highlight").css("width", "200px");
$("div#third").css("border", "2px solid orange");
$("div:first-of-type").css("color","pink");