// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @param {number} n
//  * @return {ListNode}
//  */
// var removeNthFromEnd = function (head, n) {
//   let cur = head;
//   let size = 0;
//   while (cur != null) {
//     size++;
//     cur = cur.next;
//   }

//   let prev = head;
//   let i = 1;
//   if (size == n) return head.next;
//   while (prev != null) {
//     if (i == size - n) {
//       if (prev && prev.next != null) {
//         prev.next = prev.next.next;
//         return head;
//       } else {
//         return head;
//       }
//     }
//     i++;
//     prev = prev.next;
//   }

//   return head;
// };


// Best Approach
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let sentinental = new ListNode();
    sentinental.next = head;
  let cur = head;
    let size = 0;
  while (cur != null) {
    size++;
    cur = cur.next;
  }

  let prevPos = size-n;
    let i =0;
    let prev = sentinental;
  while(i<prevPos) {
    prev = prev.next; 
    i++;
  }

  prev.next = prev.next.next;
  return sentinental.next;

};
