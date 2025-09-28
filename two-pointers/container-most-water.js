class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0
        let right = heights.length - 1;

        let maxArea = 0;

        while(left < right){
            let width = right - left;
            let minHeights = Math.min(heights[left], heights[right]);
            let area = (width * minHeights);
            maxArea = Math.max(maxArea, area);
            
        if(heights[left] < heights[right]){
            left ++;
        } else{
            right --;
        }
        }
        return maxArea;
    }
}

//PREP
//given integer array called heights, heights[i] rep height of the iTH bar
    // choose any two bars to form a container that holds max water
    //so we should find the widest spread out bars to set as our 2 pointer end points 

// PseudoCode

// set left pointer to first index
// set right pointer to last index
// set maxArea = 0

// while left < right
    // calculate width = right - left
    // calculate height = min(nums[left], nums[right])
    // calculate area = width * height
    // update maxArea if area is bigger

    // move pointer at shorter bar:
        // if nums[left] < nums[right], left++
        // else right--

// return maxArea