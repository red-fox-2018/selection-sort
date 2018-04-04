function selectionSort(arr) {
  var temp = 0
  for(var i = 0; i < arr.length; i++) {
    var min = i
    for(var j = i+1; j < arr.length; j++) {
      if(arr[j] < arr[min]) {
        min = j
      }
    }
    temp = arr[i]
    arr[i] = arr[min]
    arr[min] = temp
  }
  return arr
}

console.log(selectionSort([33, 2, 52, 106, 73]));
console.log(selectionSort([13, 5, 22, 99, 11]));
