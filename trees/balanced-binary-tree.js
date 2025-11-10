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
     * @return {boolean}
     */
    isBalanced(root) {
    let balanced = true;

    function height(node) {
      if (!node) return 0;

      const left = height(node.left);
      const right = height(node.right);

      if (Math.abs(left - right) > 1) balanced = false;

      return Math.max(left, right) + 1;
    }

    height(root);
    return balanced;
    }
}

// PREP
// Given binary tree
// return true if height is balanced, false if not

// height balance is tree where left & right of every node different in height by 1 or less

// Ex)
// Input: root = [1,2,3,null,null,4]
// Output: true

// PSEUDO
// if no root, return true (empty tree balanced)
// define recursive helper check height
// if subtree is null, return 0 (height 0)
// get left & right height
// if difference > 1, mark tree unbalanced
// return 1 + max(left, right) to parent
// if unbalanced flag triggered, return false
// else return true