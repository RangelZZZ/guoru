function collect_same_elements(collection_a, object_b) {
  
	var newArray = new Array();
	
	for(var i = 0; i < collection_a.length; i++){

		var item = collection_a[i];

		if(Exit(item,object_b)){
			newArray.push(item);
		}
	}		

	return newArray;	
 }


function Exit(element,object){
	 
	for(var i = 0; i < object.value.length;i++){

		if(element === object.value[i]){
			return true;
		}
	}
	return false;
}
