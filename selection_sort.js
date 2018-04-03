function selectionSort(nums) {
  let arr = []
  for (let i = 0; i < nums.length; i++) {
    let min = 999;
    let counter = 0;
    for (let j = i+1; j < nums.length; j++) {
      if (nums[j] < min) {
        min = nums[j]
        counter = j;
      }
    }
    if(i === nums.length-1) {
      arr.push(nums[i])
    }else {
      if(nums[i] >= nums[counter]) {
        let temp = nums[i];
        nums[i] = nums[counter];
        nums[counter] = temp;
      }
      arr.push(nums[i])
    }
  }
  return arr
}

console.log(selectionSort([33,2,52,106,73]));
// [2,33,52,73,106]
console.log(selectionSort([13,5,22,99,11])); //13,5,22,99,11 -> 5,13,22,99,11 -> 5,11,22,99,13 -> 5,11,13,99,22 -> 5,11,13,22,99
// [5,11,13,22,99]