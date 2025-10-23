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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let p1 = list1;
        let p2 = list2;

        const dummy = new ListNode(0);
        let tail = dummy;

        while (p1 !== null && p2 !== null) {
            if (p1.val <= p2.val){
                tail.next = p1;
                p1 = p1.next;
            }else{
                tail.next = p2;
                p2 = p2.next;
            }
            tail = tail.next;
        }
        tail.next = (p1 !==null) ? p1 : p2;
        return dummy.next;
    }
}

// PREP
// Given heads of 2 sorted linked lists list1 & list2
// Merge 2 lists into 1 sorted linked list and return the new head

// New list - should be made up of nodes from both lists

// Ex)
// Input: list1 = [1,2,4], list2 = [1,3,5]
// Output: [1,1,2,3,4,5]

// Create temp node. Keep pointer to last node in merged list so far.
// Keep two pointers, p1 on list1 & p2 on list2.
// While both p1 & p2 are not null, compare p1.val & p2.val.
// Take smaller node attach to next tail. Move list pointer forward to next node. 
// Move tail fwd to new attached node.
// When one list runs out, attach remaining nodes from other list to next tail
// Return node that comes after temp starter node. That is real head of merged list.