class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const counter = new Map();
        let result = 0,
            majority = 0;

        for (let num of nums){
            counter.set(num, (counter.get(num) || 0) + 1);

            if (counter.get(num) > majority){
                result = num;
                majority = counter.get(num);
            }
        }
            return result;
    }
}

// PREP
// Given array nums of size n
// return majority element, that appears more than n/2 times in array

// EX)
// Input: nums = [5,5,1,1,1,5,5]
// Output: 5

// PSEUDO
// declare variables for new empty hashpmap, starting res and count at 0
// create for loop to iterate thru array w hash set to store nums and starting, + 1 for full length
// if condo when get value is retrieved is greater than our count
    // then update res to num and majority to get num
// return res majority element