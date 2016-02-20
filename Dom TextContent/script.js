/*

tag.textContent will give us the text within the element excluding any tags
tag.innerHTML will give us all the text including the tags

*/


var tag = document.querySelector("p"); //selects first Paragraph

tag.textContent = "I am very happy";
tag.innerHTML = "I am <strong>very</strong> happy";