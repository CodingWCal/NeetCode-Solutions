class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0;
        let right = height.length - 1;
        
        let maxLeft = 0;
        let maxRight = 0;
        let totalWater = 0;

        while(left < right){

            if(height[left] <= height[right]){
                if(height[left] >= maxLeft){
                maxLeft = height[left];
            } else{
                totalWater += maxLeft - height[left];
            } 
            left ++;
            } else{    
                if(height[right] >= maxRight){
                    maxRight = height[right];
                } else{
                    totalWater += maxRight - height[right];
                } 
                right --;
            }
        }
        return totalWater;
    } 
}

// PREP
// Param: Given array of positive integers height
// Return: Max area of water that can be held inbetween/across the bars
// Example:
// Input: height = [0,2,0,3,1,0,1,3,2,1]
// Output: 9

// Pseudocode:
//start left pointer at 0
//right pointer at last index, and at end of array

// set starting maxleft to 0, tallest wall so far on left
// set starting maxright to 0, tallest wall so far on right

// set starting totalwater to 0

// loop logics
// while left point is less than right so no overlap
    // if bar at left is shorter or equal to right
    // if bar at left is taller or equal to right
        //update new maxleft to new taller bar
    
    //else left bar is shorter
        //amount of water that can sit = maxleft minus height of this bar 
        // add this to our new overall total water
    // move left pointer one step forward

    //otherwise right bar is shorter 
            // if bar at right is taller or equal to maxright
            //update new maxright to new taller bar
    
// else the right bar is shorter
            // water can sit here = maxRight minus height of this bar
            // add that water to totalWater
        // move right pointer one step backward
// after loop ends, return totalWater which is added from all checks