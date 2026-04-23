/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head || head.next == null) return true;

  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let cur = slow;
  if (fast) cur = slow.next;
  let prev = null;
  while (cur != null) {
    let temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }

  let start = head;
  let end = prev;
  while (end) {
    if (start.val != end.val) return false;
    start = start.next;
    end = end.next;
  }
  return true;
};
