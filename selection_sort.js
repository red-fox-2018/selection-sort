function sortselection(arr){

    for(var i=0; i<arr.length;i++){
        var min = arr[i];
        var index = i
        for(var k=i; k<arr.length;k++){
            if(arr[k]<min){
                min = arr[k]
                index = k
            }
        }
        if(i!=index){
            var tmp = arr[i]
            arr[i] = arr[index]
            arr[index] = tmp
        }
    }
    return arr


}

console.log(sortselection([33,2,52,106,73]))
console.log(sortselection([13,5,22,99,11]))