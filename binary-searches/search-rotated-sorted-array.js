class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        return mid;
      }

      if (nums[left] <= nums[mid]) {
        if (target >= nums[left] && target < nums[mid]) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
      else {
        if (target > nums[mid] && target <= nums[right]) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }
    return -1;    
    }
}

// Given sorted ascending unique array of length n, now rotated between 1 & n times
// Given rotated sorted unique array nums and integer target
//     Return target index within nums, or -1 if not found

// Ex)
// Input: nums = [3,4,5,6,1,2], target = 1
// Output: 4

// PSEUDOCODE
// Establish 2 pointers boundaries at start and end of nums array
// Use iterative loops
    //While left is less than or equal to right:
    //Find the middle index.
    //If nums[mid] equals target, return mid.

    //If left side is sorted:
        //If target is between nums[left] and nums[mid], move right left.
        //Else move left right.

    //Else right side is sorted:
    
        //If target is between nums[mid] and nums[right], move left right.
        //Else move right left.

    //If loop ends, return -1