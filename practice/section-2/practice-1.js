function  count_same_elements(collection){

  var elementCount =  1;
  var newArray = [];
  for(var i = 0;i < collection.length;i++){
    if(collection[i] === collection[i+1]){
              elementCount++;
    }
    else{
              newArray.push({key:collection[i],count:elementCount});
              elementCount = 1;
    }
  }
  return newArray;

  }

