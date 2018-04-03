function selectionSort(num) {

  for (var i = 0; i < num.length; i++) {

    for (var j = i; j < num.length; j++) {

      let temp = 0

      if (num[j] < num[i]) {

        temp = num[i]
        num[i] = num[j]
        num[j] = temp
        
      }

    }

  }

  return num

}

console.log(selectionSort([33,2,52,106,73]));
console.log(selectionSort([13,5,22,99,11]));
