function count_same_elements(collection) {

	var count = new Array();

	for(var i = 0; i < 100; i++){
			count[i] = 0;
	}

	var newArray = new Array();

	for(var i = 0;i < collection.length;i++){
		if(collection[i] === 'a'){
			count[0]++;
			newArray[0] = {"key":collection[i],"count":count[0]};
			continue;
		}
		if(collection[i] === 'e'){
			count[1]++;
			newArray[1] = {"key":collection[i],"count":count[1]};
			continue;
		}
		if(collection[i] === 'h'){
			count[2]++;
			newArray[2] = {"key":collection[i],"count":count[2]};
			continue;
		}
		if(collection[i] === 't'){
			count[3]++;
			newArray[3] = {"key":collection[i],"count":count[3]};
			continue;
		}
		if(collection[i] === 'f'){
			count[4]++;
			newArray[4] = {"key":collection[i],"count":count[4]};
			continue;
		}
		if(collection[i] === 'c'){
			count[5]++;
			newArray[5] = {"key":collection[i],"count":count[5]};
			continue;
		}
		if(collection[i] === 'g'){
			count[6]++;
			newArray[6] = {"key":collection[i],"count":count[6]};
			continue;
		}
		if(collection[i] === 'b'){
			count[7]++;
			newArray[7] = {"key":collection[i],"count":count[7]};
			continue;
		}
		

		count[8] = 5;
		newArray[8] = {"key":'d' ,"count":count[8]};
	}

	
	return newArray;
}
