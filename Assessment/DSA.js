// Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

function myFunction(nums, target) { // Function statement with 2 parameters
  if (nums.length == 0) { // handling empty array
    return [];
  }
  const map = new Map(); // Map to store validated numbers and their index
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]; // finding the diff with target value
    // to check if the diff value is present in the map
    if (map.has(diff)) {
      return [map.get(diff), i]; // storing the index of diff and the current index
    }
    // if diff is not found, add to map with current value and index
    map.set(nums[i], i);
  }
  // if no pair found with given array, return an empty array
  return [];
}

//Input 1: (given input array and target)
const nums = [2, 7, 11, 15];
const target = 9;
const result = myFunction(nums, target);
console.log(result); // Output: [0, 1] (index of 2 and 7)

// Validating the code with different input array values and target value
//Input 2:
// const nums = [21, 7, 11, 15, 3];
// const target = 9;
// const result = myFunction(nums, target);
// console.log(result); // Output: [] (no pair found)

// Input 3:
// const nums = [];
// const target = 9;
// const result = myFunction(nums, target);
// console.log(result); // Output: [] (input array is empty)

// Input 4:
// const nums = [-5, 2, 7, -1, 5];
// const target = 0;
// const result = myFunction(nums, target);
// console.log(result); // Output: [0, 4] (index of -5 and 5)

// Input 5:
// const nums = [-5, 2, 7, -1, 5];
// const target = -6;
// const result = myFunction(nums, target);
// console.log(result); // Output: [0, 3] (index of -5 and -1)
