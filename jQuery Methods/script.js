/*

Html
text
attr
val
addClass
removeClass
toggleClass
*/


$("h1").css("color", "pink");
$("h1").html("<em>Text</em> Has been changed!");
$("img:first-of-type").attr("src", "https://www.petfinder.com/wp-content/uploads/2012/11/140272627-grooming-needs-senior-cat-632x475.jpg");

$("li:nth-of-type(1)").addClass("correct");
$("li:nth-of-type(2)").toggleClass("wrong");
$("li:nth-of-type(3)").addClass("done");

$("li:nth-of-type(2)").removeClass("wrong");
$("li:nth-of-type(2)").addClass("done");

$("h1").text("jQuery Methods Demo Page");

