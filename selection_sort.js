function selectionSort(input){
    var temp=0
    for(var i=0; i<input.length; i++){
        for(var j=0; j<input.length; j++){
            if(input[j]>input[i] && j!==i){
                temp=input[i]
                input[i]=input[j]
                input[j]=temp
            }
        }
    }
    return input
}
console.log(selectionSort([33,2,52,106,73]))
console.log(selectionSort([13,5,52,106,73]))