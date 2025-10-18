class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
  findMin(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] > nums[right]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return nums[left];
  }
}
// Given sorted ascending unique array of length n, now rotated inbetween 1 & n times
// return min element of this array, solution must run in o(logn) time

// Ex)
// Input: nums = [3,4,5,6,1,2]
// Output: 1

// Input: nums = [4,5,0,1,2,3]
// Output: 0

// Pseudocode
// Start w two pointers: left & right.
// While they don’t cross:
// Find middle index.
// Compare middle value to rightmost value.
// If mid value > right value → the min is on right side (shift left pointer).
// Else →  min is on left side (shift right pointer).
// When loop ends, left will be sitting at the minimum.