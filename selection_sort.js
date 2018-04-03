function selectionSort(value) {

    let temp = 0

    for (let i = 0; i < value.length; i++) {
        let indexMin = i

        for (let j = i+1; j < value.length; j++) {
            
            if (value[j] < value[indexMin]) {
    
                indexMin = j
            }
        }
        temp = value[i]
        value[i] = value[indexMin]
        value[indexMin] = temp
    }

    return value
}

// console.log(selectionSort([6,2,3,1,4,5,7,9,8]));
console.log(selectionSort([33,2,52,106,73]));
console.log(selectionSort([13,5,22,99,11]));


