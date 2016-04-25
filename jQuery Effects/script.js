/*

jQuery Animation effects

$("").fadeOut(time, callback)
$("").fadeIn(time, callback)
$("").fadeToggle(time, callback)

$("").slideUp(time,callback)
$("").slideDown(time, callback)

*/
$("#fadeout").on("click", function(){

	$("div").fadeOut(2000, function(){
		console.log("IS GONE");
		
	});
});


$("#fadein").on("click", function(){

	$("div").fadeIn(2000, function(){
		console.log("IS BACK");
		
	});
});

$("#fadetoggle").on("click", function(){

	$("div").fadeToggle(2000, function(){
		console.log("FADE TOGGLED");
		
	});
});

$("#slidetoggle").on("click", function(){

	$("div").slideToggle(2000, function(){
		console.log("SLIDE TOGGLED");
		
	});
});