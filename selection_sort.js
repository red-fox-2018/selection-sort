/*jshint esversion:6*/
const testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];
const testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];


function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let first = arr[i];
    arr[i] = arr[min];
    arr[min] = first;
  }
  return arr;
}

console.log(selectionSort(testArrayGenap));
console.log(selectionSort(testArrayGanjil));
