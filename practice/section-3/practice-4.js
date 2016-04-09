function create_updated_collection(collection_a, object_b) {

  var cNewArray = buildNewArray(collection_a);

  for (var i = 0; i < cNewArray.length; i++) {
    var element = cNewArray[i];
    if (IsExit(element, object_b)) {
      element.count = element.count - parseInt(element.count / 3);
      cNewArray[i].count = element.count;
    }
  }
  return cNewArray;

}


function IsExit(element, object_b) {
  for (var i = 0; i < object_b.value.length; i++) {
    if (element.key === object_b.value[i]) {
      return true;
    }
  }
  return false;
}


function buildNewArray(collection) {
  var newArray = [];
  var element_count = 1;

  for (var i = 0; i < collection.length; i++) {


    if (collection[i] === collection[i + 1]) {
      element_count++;
    }

    else if (collection[i].length > 1) {
      newArray.push({key: collection[i].charAt(0), count: parseInt(collection[i].slice(2))});
      element_count = 1;
    }
    else {
      newArray.push({key: collection[i], count: element_count});
      element_count = 1;
    }
  }
  return newArray;
}



