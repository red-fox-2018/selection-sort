const testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];
const testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];

function selectionSort(arr) {
  // Your sorting code
  var tmp;
  for(var i=0; i<arr.length;i++){
    var min = i
    for(var j = i+1; j<arr.length;j++){
      if(arr[j]<arr[min]){
        min = j
      }
    }
    tmp = arr[i]
    arr[i] = arr[min]
    arr[min] = tmp
  }
  return arr
}

console.log(testArrayGenap);
console.log(selectionSort(testArrayGenap))
console.log(testArrayGanjil);
console.log(selectionSort(testArrayGanjil))
