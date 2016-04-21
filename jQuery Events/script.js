/*
There are shit ton of events in jQuery

https://api.jquery.com/category/events/

click()
keypress()
on()

Difference between click and on, click will only add event listeners to current items on page, on will add event listener to all future elements


*/
$("li").click(function(){
	alert( $(this).text() + " has attacked!");
	$(this).text( $(this).text() +" has been defeated!");
	$(this).css({
		background: "red",
		color: "white",
		textDecoration: "lineout"
	});
});

