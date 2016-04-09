function getSubelementCount(collection) {

    var element = [];

    for(var i = 0; i < collection.length; i++){
        if(collection[i].length === 1){
            element.push({key:collection[i],count:1});
        }
        else{
            element.push({key:collection[i].charAt(0),count:parseInt(collection[i].substr(2,2))});
        }
    }
    element.push({key:0,count:0});
    return element;
}

function count_same_elements(collection){

    var  allelement = getSubelementCount(collection);
    var newArray = [];
    var elementCount = allelement[0].count;

    for(var i = 0; i < allelement.length-1; i++){
        if(allelement[i].key === allelement[i+1].key){
            elementCount += allelement[i+1].count;
        }
        else{
            newArray.push({name:allelement[i].key,summary:elementCount});
            elementCount = allelement[i+1].count;
        }

    }
    return  newArray;
}
