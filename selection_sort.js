function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let currentIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[currentIndex] > arr[j]) currentIndex = j;
        }

        let temp = arr[i];
        arr[i] = arr[currentIndex];
        arr[currentIndex] = temp;
    }

    return arr;
}

console.log(selectionSort([33, 2, 52, 106, 73]));
console.log(selectionSort([13, 5, 22, 99, 11]));