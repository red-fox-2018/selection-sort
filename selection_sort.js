function selectionSort(arr){
    
    for(let i=0;i<arr.length;i++){
        var min = arr[i]
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<min){
                min=arr[j]
            }
            if (arr[i] > min) {
                var temp = arr[i]
                arr[i] = min
                arr[j] = temp
            }
        }
    }
    return arr
}
var arr1 = [33,2,52,106,73]
var arr2 = [13,5,22,99,11]
console.log(selectionSort(arr1))
console.log(selectionSort(arr2))
