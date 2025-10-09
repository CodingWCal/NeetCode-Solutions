class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (let token of tokens) {
            if (token === '+' || token === '-' || token === '*' || token === '/'){
                const a = stack.pop();
                const b = stack.pop();

                let result;

                if (token === '+') result = b + a;
                else if (token === '-') result = b - a;
                else if (token === '*') result = b * a;
                else if (token === '/') result = Math.trunc(b / a);
                stack.push(result);

            } else {
                stack.push(Number(token));
            }
        }
             return stack.pop();
    }
}

// PREP
// Given array of strings called tokens that reps Reverse Polish Notation expression
// Return integer that reps evaluation of the expression
// Reverse Polish Notation = Arithmetic Operands come after integers

// Example:
// Input: tokens = ["1","2","+","3","*","4","-"]
// Output: 5

// Explanation: ((1 + 2) * 3) - 4 = 5

//Pseudocode
// create empty stack

// loop thru every token str in tokens:
// if statements, if token is operator
    // push numbs n pop off operators
    // do all operations in reverse order, remove decimals in division

// Push result back on stack
// Finish return last item in stack