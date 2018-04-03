function selectionSort(array) {
  let subs = 0
  for (var i = 0 ; i < array.length; i++) {
    subs = array[i]
    let idxMin = i
    let temp = array[i]
    for (var k = i; k <= array.length; k++) {
      if (array[k] < temp) {
        temp = array[k]
        idxMin = k
      }
    }
    array.splice(i,1,temp)
    array.splice(idxMin,1,subs)
  }
  return array;
}
console.log(selectionSort([33,2,52,106,73]));
