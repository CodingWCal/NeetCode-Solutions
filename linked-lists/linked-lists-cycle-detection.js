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
     * @return {boolean}
     */
    hasCycle(head) {
        let fastPoint = head;
        let slowPoint = head;

        while (fastPoint !== null && fastPoint.next !== null) {
            fastPoint = fastPoint.next.next;
            slowPoint = slowPoint.next;

            if (fastPoint === slowPoint) {
                return true;
            }
        }
        return false;
    }
}

// PREP
// Given beg of linked list head
// Return true if cycle in list, otherwise return false

// Ex)
// Input: head = [1,2,3,4], index = 1
// Output: true

// PSEUDO
// If head is null or head.next is null return false
// Set slow to head
// Set fast to head
// While fast is not null and fastPoint.next is not null
// Move slow one step to slow.next
// Move fast two steps to fast.next.next
// If slow equals fast return true
// Loop ends return false