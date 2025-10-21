/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let previous = null;
        let current = head;

        while (current) {
            let temp = current.next;
            current.next = previous;
            previous = current;
            current = temp;
        }
        return previous;
    }
}

// PREP
// Given beginning of single linked list head, reverse this list
// return the new beginning of the list

// Ex)
// Input: head = [0,1,2,3]
// Output: [3,2,1,0]

// Input: head = []
// Output: []

// Start w two pointers: one for previous (null) & one for current (head)
// Loop while there’s still a node to visit.
// Temp store next node.
// Point current node backward to previous.
// Move previous to where current is.
// Move current to next node (the one you stored).
// When done, previous is now new head — return it.
