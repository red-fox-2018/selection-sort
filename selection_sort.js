/*
  Loop i sepanjang array
    tandai index saat ini sebagai nilai minimun
    loop j sepanjang array
      if array j lebih kecil dari array i
        tampung array j
      end if
    end loop
    tukar value array i dengan value array j yg ditampung
  end loop

*/
function selectionSort(arr){

  for(let i = 0; i < arr.length; i++){
    let min = i
    for(let j = i+1; j < arr.length; j++){
      if(arr[min] > arr[j]){
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]]
  }
  return arr
}
console.log(selectionSort([33, 2, 52, 106, 73,55, 32, 32, 12]));
console.log(selectionSort([13, 5, 22, 99, 11]));
