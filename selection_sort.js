var SelectionSort = function(arr){
    for(let i=1;i<arr.length;i++){
        let a = i-1;
        let b = i;
        while(arr[b]<arr[a]){
            let temp = arr[b];
            arr[b] = arr[a];
            arr[a] = temp;
            a--;
            b--;
        }
    }
    return arr;
}

console.log(SelectionSort([4,4,3,1,2,2]))//[1,2,2,3,4,4]
console.log(SelectionSort([9,7,75,5352,235,3,43]))//[ 3, 7, 9, 43, 75, 235, 5352 ]