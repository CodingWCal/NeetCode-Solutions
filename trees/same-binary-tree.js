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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
    if (!p && !q) return true;

    if (!p || !q) return false;

    if (p.val !== q.val) return false;

    return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
    }
}

// PREP
// Given roots of 2 binary trees p & q
// return true if trees are equal
// otherwise return false

// Ex)
// Input: p = [1,2,3], q = [1,2,3]
// Output: true

// PSEUDO
// if both trees empty, return true
// if one tree is empty & other isn’t, return false
// if values differ, return false
// recursively check left right subtrees
// return true if both left & right checks true