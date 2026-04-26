/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || head.next == null) return head;

  let size = 0;
  let cur = head;
  while (cur != null) {
    size++;
    cur = cur.next;
  }
  k = k % size;

  let first = head;
  let second = head;
  for (let i = 0; i < k; i++) {
    first = first.next;
  }

  while (first && first.next != null) {
    first = first.next;
    second = second.next;
  }

  first.next = head;
  let newHead = second.next;
  second.next = null;
  return newHead;
};
