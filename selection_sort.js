/*
PSEUDOCODE

1. looping dari i = 0 sepanjang array input dengan increment sebanyak 1x
2. buat variabel untuk menampung index i saat  itu
3. looping dari j = 1 + 1 sampai sepanjang array input dengan increment sebanyak 1x
  3.a. jika array[i] lebih kecil dibanding dengan array index i saat  itu
    3.a.i. ubah variabel index i saat itu menjadi index j
4. lalu tukar posisi array[i] dengan array index ke i saat itu
5. dan tukar array index i saat itu dengan variabel penampung array[i] yang kita buat terlebih dahulu
6. return array
*/

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
