function collect_same_elements(collection_a, collection_b) {

	var newArray = new Array();
 	
	for(var i = 0;i < collection_a.length; i++ ){

		var item = collection_a[i];

		if(Exit(item,collection_b)){

			newArray.push(item);
		}
	}		

	return newArray;	
  		
}



function Exit(element,collection){
	
	for(var i = 0;i < collection.length; i++){
		for( var j = 0; j < collection[i].length;j++){
			if(element === collection[i][j]){
				return true;
			}
	   }
	}

	return false;
}
