function myForEach(array, func){

	for(var i = 0; i < array.length; i++){//iterate through array
		func(array[i]);//run fun on each array element, pass as argument array at index as argument
	}
}


