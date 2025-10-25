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
     * @return {void}
     */
    reorderList(head) {
  if (!head || !head.next) return;

  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let second = slow.next;
  slow.next = null; 
  second = this.reverse(second);

  let first = head;
  while (second) {
    const t1 = first.next;
    const t2 = second.next;

    first.next = second;
    second.next = t1;

    first = t1;
    second = t2;
  }
};

reverse(head) {
  let prev = null, cur = head;
  while (cur) {
    const nxt = cur.next;
    cur.next = prev;
    prev = cur;
    cur = nxt;
  }
  return prev;
}
}
// PREP

// Given head of singly linked list (0,...6)

// Only Reorder nodes of linked list to be in following order, cannot change nodes only next pointers
// [0, 6, 1, 5, 2, 4, 3]

// [0, n-1, 1, n-2, 2, n-3, ...]

// Ex)
// Input: head = [2,4,6,8]
// Output: [2,8,4,6]

//Pseudo
// If head null or headnext null return
// Find middle of slow & fast head w while loops to fast next next
// Split & reverse 2nd half w slow next, and reverse w while logic, prev to null and cur to listhead
//     while loop cur, next is cur next, then prev etc - find prev at end
// Merge again alternating, first is head, while second, point heads to reodered list
