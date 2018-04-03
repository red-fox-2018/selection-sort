# selection-sort
- CREATE function selectionSort with one parameter array
-   LOOP i equal 0 to array length and plus one for every iteration
-   INITIALIZE currentIndex to i
-       LOOP j equal i + 1 to array length and plus one for every iteration
-           IF array[currentIndex] greater than arr[j], change currentIndex with j
-       INITIALIZE temp to arr[i] for swapping number
-       CHANGE arr[i] to arr[currentIndex]
-       CHANGE arr[currentIndex] to temp
-   RETURN arr