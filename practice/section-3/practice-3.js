function  create_updated_collection(collection_a, object_b) {

 var cNewArray = buildNewArray(collection_a);

  for(var i = 0;i < cNewArray.length;i++){
    var element = cNewArray[i];
    if(IsExit(element,object_b)){
      element.count = element.count - parseInt(element.count/3);
      cNewArray[i].count = element.count;
    }
  }
  return  cNewArray;
}


function IsExit(element,object_b){
  for(var i = 0; i < object_b.value.length; i++){
    if(element.key === object_b.value[i]){
      return true;
    }
  }
  return false;
}


function buildNewArray(collection_a){
  var newArray = [];
  var elementCount = 1;
  for (var i = 0; i < collection_a.length; i++) {
    if (collection_a[i] === collection_a[i + 1]) {
      elementCount++;
    }
    else {
      newArray.push({key: collection_a[i], count: elementCount});
      elementCount = 1;
    }
  }
  return newArray;
}
