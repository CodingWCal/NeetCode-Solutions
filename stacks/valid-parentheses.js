class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const map = {
            ')' : '(',
            '}' : '{',
            ']' : '['
        };

        for(let char of s){
            if (char === '(' || char === '{' || char === '['){
                stack.push(char);
            } else{
                if (stack.length === 0) return false;

                const top = stack.pop();

                if (map[char] !== top){
                    return false;
                }
            }
        } 
        return stack.length === 0;
    }
}

// PREP
// Given string s of brackets
// Return true if s is valid if every bracket is closed w its same bracket type & order

// Examples:
// Input: s = "[]"
// Output: true

// Input: s = "([{}])"
// Output: true

// Input: s = "[(])"
// Output: false


// Pseudocode

// make empty stack []

// map out matching pairs:
//   ) : (
//   ] : [
//   } : {

// loop thru check each char in string s:
//   if char is same as our opening bracket types → push on stack
//   else if char is closing:
//       if stack empty → return false
//       if stack top not matching opening → return false
//       else pop stack

// after loop → 
//   if stack empty → return true
//   else return false
