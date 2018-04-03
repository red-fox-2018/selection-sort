function selectionSort(input){

  for(let i = 0; i < input.length; i++){
    let indexMin = i
    for(let j = i+1; j < input.length; j++){
      if(input[j] < input[indexMin]){
        indexMin = j
      }
    }

    let tmp         = input[i]
    input[i]        = input[indexMin]
    input[indexMin] = tmp
  }
  return input
}

console.log(selectionSort([33, 2, 52, 106, 73]));
//[2, 33, 52, 73, 106]

console.log(selectionSort([13, 5, 22, 99, 11]));
//[5, 11, 13, 22, 99]
