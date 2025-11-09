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
     * @return {TreeNode}
     */
    invertTree(root) {
    if (!root) return null;

    [root.left, root.right] = [root.right, root.left];

    this.invertTree(root.left);
    this.invertTree(root.right);

    return root;
    }
}

// PREP
// Given root of binary tree ROOT
// Invert binary tree return its root

// Ex)
// Input: root = [1,2,3,4,5,6,7]
// Output: [1,3,2,7,6,5,4]

// PSEUDO
// If tree is empty, return null.
// Swap left & right children of current node.
// Recursively call same function on left child.
// Recursively call  same function on right child.
// Return root when all nodes have swapped.
