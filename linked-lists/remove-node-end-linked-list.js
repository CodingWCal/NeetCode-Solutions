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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
    if (!head) return head;

    const dummy = new ListNode(0, head);
    let fast = dummy;
    let slow = dummy;

    for (let i = 0; i < n; i++) {
      fast = fast.next;
    }

    while (fast.next) {
      fast = fast.next;
      slow = slow.next;
    }

    slow.next = slow.next.next || null;

    return dummy.next;
    }
}

// PREP
// Given beg of linked list head and integer n
// Remove nth node from end of list and return beg of list

// Ex)
// Input: head = [1,2,3,4], n = 2
// Output: [1,2,4]

// PSEUDO
// Check if list is empty return head.

// Create dummy node that points to head to remove real head easy

// Start fast & slow start at dummy.

// Advance fast by n steps.

// While loop fast.next exists
//     fast = fast.next
//     slow = slow.next

// Then slow.next is node to delete. 
// slow.next = slow.next.next.

// Return dummy.next.