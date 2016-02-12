var choice = prompt("What do you want to do?");
choice = choice.toUpperCase();//conver to uppercase

var todolist = ["Wake up", "Be Amazing"];




while(choice !== "QUIT")
{
if( typeof choice === "string") //make sure choice is a string
{

	//check condition new
	if(choice === "NEW")
	{
	 var todoitem = prompt("Please write the todo item:");//Get todo item
	 todolist.push(todoitem); //add our new item to array
	}

	else if (choice === "LIST")
	{
		for(var i = 0; i < todolist.length; i++)//for each
		{
			console.log("*********");
			console.log((i+1) + "." +todolist[i]);//print todolist item
			console.log("*********");
		}
	}
	else if(choice === "DELETE")
	{
	 var choiceDel = prompt("Which todo list item do you want to delete?");
	 while(typeof choiceDel !== "number" && (choiceDel > (todolist.length +1)) || (choiceDel < 0 )) //if choice is not a number or greater than index, and a number 
	 {
	 	choiceDel = prompt("Error: Please type a valid number:");
	 }
	 todolist.splice(choiceDel-1,1);
	 if(choice === -1) break;//quit if choice is -1

	}
	else{
		console.log("error invalid choice, ending");
		// break;
	}


}
choice = prompt("What do you want to do?");// Ask for choice
choice = choice.toUpperCase();//conver to uppercase
}