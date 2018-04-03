function selectionSort(arr) {
	// body...
	

	for(var i=0;i<arr.length;i++){
		var min = i;
		for(var j=i+1;j<arr.length;j++){
			if (arr[j]<arr[min]) {
				min=j
			}
			console.log(arr);
		}
		var temp = arr[i]
		arr[i]=arr[min]
		arr[min]=temp

	}
	return arr
}

console.log(selectionSort([9,7,75,5352,235,3,43]));