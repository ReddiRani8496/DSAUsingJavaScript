/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var swapPairs = function (head) {
//   if (!head || !head.next) return head;
//   let cur = head;
//   let start = head.next;
//   let prev = null;
//   while (cur && cur.next) {
//     if (prev && prev.next) {
//       prev.next = cur.next;
//     }
//     let nextNode = cur.next;
//     cur.next = cur.next.next;
//     nextNode.next = cur;

//     prev = cur;
//     cur = cur.next;
//   }
//   return start;
// };

//Recursive approach
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;

  let left = head;
  let right = head.next;

  left.next = swapPairs(right.next);
  right.next = left;
  return right;
};
