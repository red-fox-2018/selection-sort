function selectionsort (arr){
  for(var i = 0 ; i < arr.length ;i++){
    var min = i;
    for(var j = i ; j < arr.length ; j++){
      if(arr[j] < arr[min]){
        min = j;
      }
    }
    if(min != i){
      var tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
    }
  }
  return arr;
}

console.log(selectionsort([33,2,52,106,73]));
console.log(selectionsort([13,5,22,99,11]));
