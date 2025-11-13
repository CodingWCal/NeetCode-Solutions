class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
         let i = 0;

        for (let j = 0; j < nums.length; j++) {
           if (nums[j] !== val) {
              nums[i] = nums[j];
              i++;
           }
        }
        return i;
    }
}

// PREP - Remove element 

// Given int array nums & int val
// Remove all occur of val from nums 

// After removing all val occur
// Return the num of remaining elements k
   // So that first k of nums doesnt have val

// Notes:
// Order of elements not = Val don't matter, only consider elements of first k pos of array

// First K elements of nums must contain only elements != value

// Return K as final res

// Ex)
// Input: nums = [1,1,2,3,4], val = 1
// Output: [2,3,4]

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: [0,1,3,0,4]

// PSEUDO

// Create write pointers set index to 0
   // track pos where next non val element can be

// Iterate read w J from 0 to end of array nums.length

// Inside loop if condo nums[j] not equal to value
   // keep
// Assign nums[j] to nums[k], increment k

// If nums[j] = val, do nothing & cont loop which removes it

// At end, k will rep new array.length of nums, only hold elements != val, return k