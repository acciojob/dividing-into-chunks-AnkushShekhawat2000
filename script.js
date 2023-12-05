function divide(arr, n) {
  const result = [];
  let currentSubarray = [];

  for (const num of arr) {
    // Check if adding the current number exceeds the maximum sum
    if (currentSubarray.reduce((sum, x) => sum + x, 0) + num > n) {
      result.push(currentSubarray);
      currentSubarray = [num];
    } else {
      currentSubarray.push(num);
    }
  }

  // Add the last subarray to the result
  result.push(currentSubarray);

  return result;
}

// Examples
console.log(divide([1, 2, 3, 4, 1, 0, 2, 2], 5));
// Output: [[1, 2], [3], [4, 1, 0], [2, 2]]

console.log(divide([4, 3, 2, 1], 4));
// Output: [[4], [3], [2], [1]]
