class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];

        function backtrack(openCount, closeCount, current){
            if(openCount === n && closeCount === n){
                res.push(current);
                return;
            }

            if(openCount < n){
                backtrack(openCount + 1, closeCount, current + "(");
            }

            if(closeCount < openCount){
                backtrack(openCount, closeCount + 1, current + ')');
            }
        }
        backtrack(0,0,'');
        return res;
    }
}

// PREP
// Given integer n
// Return all valid combos of parentheses strings that we can gen w n pairs 

// Ex)
// Input: n = 1
// Output: ["()"]

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// PSEUDOCODE
// start w empty current string
// count num of open close brackets so far
// if num of open close brackets reach n
    //add string to result list
    // can add open if we have < n opens used
    // can add close only if num of close is < num of opens
// make empty result list
// recursive helper function to find each path, adding open or close
// backtrack to explore all combos,  return list of valid combos
