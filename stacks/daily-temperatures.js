class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = new Array(temperatures.length).fill(0);
        const stack = [];

        for(let i =0; i < temperatures.length; i++){

            while (stack.length && temperatures[i] > temperatures[stack[stack.length-1]]){
                const prevIndex = stack.pop();
                result[prevIndex] = i - prevIndex;
            } 
            stack.push(i);
        }
        return result;
    }
}

// PREP
// Given array called temperatures, temperatrues[i] reps daily temps on ith day
// Return result array where result[i] is # of days after ith day, before warmer temp days appear
//     If no future where temp is warmer, set result[i] = 0
// Basically find next higher temp day for EACH position in array

// Ex)
// Input: temperatures = [30,38,30,36,35,40,28]
// Output: [1,4,1,2,1,0,0]

// Input: temperatures = [22,21,20]
// Output: [0,0,0]

//PSEUDOCODE
// make result array starting w 0 like input temparatures array
// make starting empty stack to track days til warmer temp
// loop thru each day temp w index
    //while stack is not empty & todays temp is warmer > top index in stack
        //pop index off we found a warmer day for
        //find # days waited w difference subtraction
        //store # in result array at popped index
        // push today index onto stack
//letover indicies have no warmer future, keep as 0 in result array
// return result array