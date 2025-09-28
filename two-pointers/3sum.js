class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a - b);
        const sumTriplet = [];

    for (let i = 0; i < nums.length; i ++){
    if(i > 0 && nums[i] === nums[i-1]) continue;
    if(nums[i] > 0) break;    


    let j = i + 1;
    let k = nums.length - 1;

    while(j < k){
        let sum = nums[i] + nums[j] + nums[k];

        if (sum === 0){
            sumTriplet.push([nums[i], nums[j], nums[k]]);
            j ++;
            k --;

    while (j < k && nums[j] === nums[j -1]) j++;
    while (j < k && nums[k] === nums[k + 1]) k--;

    } else if(sum < 0){
        j++;
    } else {
        k--;
    }
            } 
        }
    return sumTriplet;
    }
}

//Given nums array
//return triples [nums[i], nums[j], nums[k]]
// Must have nums[i] + nums[j] + nums[k] == 0

//Example: 
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// PseudoCode

// sort array in order

// make empty array for triplet results to be held in

// start our first for loop
    // for loop condo, start at 0 index, end at nums length
// est a captain of line or nums[i]

// check for duplicate captains and skip them
// early check if captain > 0, then break out of loop

// declare a left and right variable
    // right variable starts at end of array length - 1
    // left variable starts after our nums[i] captain point

// set while loop w condition as left is < right so they dont overlap
// declare new variable for sum to have triplets add up to 0

// add if/else if statements to satisfy 3 scenarios
    // if sum === 0 add it to result triplet combo
        // increment our left & right variables to meet in middle ++ & --
        // skip duplicate teammates so we don’t repeat the same triplet
    
    // else if sum < 0 increment left (need bigger number)
    // else if sum > 0 decrement right (need smaller number)