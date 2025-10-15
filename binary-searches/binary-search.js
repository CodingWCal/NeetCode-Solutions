class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while(left <= right){
            let middle = Math.floor((left + right) / 2);

                if(nums[middle] === target){
                return middle;
                } else if (nums[middle] < target) {
                    left = middle + 1;
                } else {
                    right = middle - 1;
                } 
        } 
            return -1;
    }
}

// PREP
// Given array of unique integers NUMS (in ascending order) & integer TARGET
// return function to search for target in nums, if exist return index if not return -1

// Set left pointer at 0 (start of array)
// Set right pointer at last index
// While left ≤ right:
// Find the middle index
// If middle number equals target → return middle index
// If middle number smaller than target → move left pointer right
// If middle number larger than target → move right pointer left
// If loop ends with no match, return -1