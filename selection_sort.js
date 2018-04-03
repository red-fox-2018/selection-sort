
function selection(array) {
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIdx]) {
        minIdx = j;
      }
    }
    let temp = array[minIdx];
    array[minIdx] = array[i];
    array[i] = temp;
  }
  return array;
}

// Driver code

let data1 = [33, 2, 52, 106, 73];
let data2 = [13, 5, 22, 99, 11];

console.log(selection(data1)); // [ 2, 33, 52, 73, 106 ]
console.log(selection(data2)); // [ 5, 11, 13, 22, 99 ]

module.exports = {
  selection
};
