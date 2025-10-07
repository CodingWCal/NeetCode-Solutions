class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);

        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]){
            this.minStack.push(val);
        } else{
            this.minStack.push(this.minStack[this.minStack.length -1]);
        }
    }
    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

// PREP
// Design stack that does push, pop, top and get min/smallest number in stack

// Ex)
// Input: ["MinStack", "push", 1, "push", 2, "push", 0, "getMin", "pop", "top", "getMin"]
// Output: [null,null,null,null,0,null,2,1]
// Explanation:
// MinStack minStack = new MinStack();
// minStack.push(1);
// minStack.push(2);
// minStack.push(0);
// minStack.getMin(); // return 0
// minStack.pop();
// minStack.top();    // return 2
// minStack.getMin(); // return 1

//PSEUDO
// Need 2 stacks → main + minStack

// constructor()
//    make main = []  
//    make minStack = []

// push(val)
//    push val into main
//    if minStack empty → push val
//    else → push smaller of (val, top of minStack)

// pop()
//    pop from main
//    pop from minStack (keep same length)

// top()
//    return top of main (last item)

// getMin()
//    return top of minStack (smallest so far)
