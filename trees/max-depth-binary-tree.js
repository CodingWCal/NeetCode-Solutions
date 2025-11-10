/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
    if (!root) return 0;

    const leftDepth = this.maxDepth(root.left);
    const rightDepth = this.maxDepth(root.right);

    return Math.max(leftDepth, rightDepth) + 1; 
    }
}

// PREP
// Given root of binary tree
// return depth
// depth is # of nodes along longest path from root down to farthest leaf

// Ex)
// Input: root = [1,2,3,null,null,4]
// Output: 3

// PSEUDO
// if no root, return 0
// go down left & right branch find its depth
// take larger depth between the two
// add 1 for current node
// return num