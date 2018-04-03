function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var indexTerkecil = i
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexTerkecil]) {
        indexTerkecil = j;
      }
    }
    var index = arr[i];
    arr[i] = arr[indexTerkecil];
    arr[indexTerkecil] = index;
  }
  return arr;
}

console.log(selectionSort([33, 2, 52, 106, 73]));
console.log(selectionSort([13, 5, 22, 99, 11]));
