 function collect_same_elements(collection_a, collection_b) {

  var newArray = [];

  for (var i = 0; i < collection_a.length; i++){
         var item = collection_a[i] ;
         if(Isexit(item,collection_b)){
           newArray.push(item);
         }
  }

return newArray;
}



function Isexit(element,collection){

  for (var i = 0; i < collection.length; i++) {
    if (element === collection[i]) {
        return true;
    }
  }

    return false;
 }

//1.挨个取出A中的元素
//2.与集合B元素中的每个元素进行比较
//3.如果A元素与B元素相等，就把这个A元素添加到新数组中
//4.如果A中元素比较完了，返回新的数组。



	

function say(something){
		return something();
	}


conslole.log(say(function(){
	return "hello world!"
} ));






collection_a.forEach(function(element)){
	 if(Isexit(item,collection_b)){
           newArray.push(item)

	}
}
