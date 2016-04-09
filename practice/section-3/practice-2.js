function create_updated_collection(collection_a,object_b){

  for(var i = 0; i < collection_a.length; i++){
    var element = collection_a[i];
    if(IsExit(element,object_b)){
      element.count = element.count - parseInt(element.count/3);
     collection_a[i].count = element.count;
    }
  }
  return collection_a;
}


function IsExit(element,object_b){
  for(var i = 0; i < object_b.value.length; i++){
    if(element.key === object_b.value[i]){
      return true;
    }
  }
  return false;

}

