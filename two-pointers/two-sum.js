class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;

        while(left < right){
            const numSum = numbers[left] + numbers[right];

            if(numSum === target){
                return [left +1, right + 1];
            } else if(numSum < target){
                left ++;
            } else{
                right --;
            }
        }
    }
}



//PREP

//PARAMETERS - Given ARRAY of NUMBERS and a TARGET NUMBER 

//RETURN - return indices of 2 nums that add up to given target

//EXAMPLES: There will always be exactly one valid solution.
// solution must use O(1) space complexity

// Input: numbers = [1,2,3,4], target = 3
// Output: [1,2]

//PSEUDOCODE
