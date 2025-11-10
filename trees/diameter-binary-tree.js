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
    diameterOfBinaryTree(root) {
    let maxDiameter = 0;

    function depth(node) {
      if (!node) return 0;

      const left = depth(node.left);
      const right = depth(node.right);

      maxDiameter = Math.max(maxDiameter, left + right);

      return Math.max(left, right) + 1;
    }

    depth(root);
    return maxDiameter;
    }
}

// PREP
// Given root of binary tree root
// return diameter (length of longest path between any 2 nodes in tree)

// ex)
// Input: root = [1,null,2,3,4,5]
// Output: 3

// PSEUDO
// if no root, return 0
// define var to track max path length
// recursive funct to get depth

// per node -
// get left depth
// get right depth

// update max diam as left + right
// return 1 + greater of two depths
// after, return max path length diam
