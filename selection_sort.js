function selectionSort(random){
  for(var i=0; i<random.length-1; i++) {

		var min = i
		for (var j = i + 1; j < random.length; j++) {
      debugger
      if (random[j] < random[min]) {
				min = j
			}
		}

		if (min != i) {
			debugger
      var nilaiSementara = random[i]
			random[i] = random[min]
			random[min] = nilaiSementara
		}
	}
  return random
}

console.log(selectionSort([33,2,52,106,73]))
// selectionSort([13,5,22,99,11])
