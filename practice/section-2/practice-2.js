function count_same_elements(collection) {

    var newArray = [];
    var element_count = 1;

    for (var i = 0; i < collection.length; i++){


        if (collection[i] === collection[i + 1]){
            element_count++;
        }

        else if (collection[i].length > 1){
            newArray.push({key:collection[i].charAt(0), count:parseInt( collection[i].slice(2))});
            element_count = 1;
         }
        else {
            newArray.push({key:collection[i], count:element_count});
            element_count = 1;
        }
    }
    return newArray;
}

