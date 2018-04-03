function selSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var ori = arr[i];   
    var temp = arr[i];  //smallest num
    var index = i;
    for (var j = i; j < arr.length; j++) {

      if (arr[j] < temp) {
        temp = arr[j];
        index = j;
      }
    }
    arr[i] = arr[index];
    arr[index] = ori;
  }
  return arr;
}

console.log(selSort([33, 2, 52, 106, 73]));
console.log(selSort([13, 5, 22, 99, 11]));
