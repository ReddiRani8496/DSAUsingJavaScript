// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} list1
//  * @param {ListNode} list2
//  * @return {ListNode}
//  */
// var mergeTwoLists = function (l1, l2) {
//   let ans = new ListNode();
//   let start = ans;
//   while (l1 != null && l2 != null) {
//     if (l1.val < l2.val) {
//       let newNode = new ListNode(l1.val);
//       ans.next = newNode;
//       ans = ans.next;
//       l1 = l1.next;
//     } else {
//       let newNode = new ListNode(l2.val);
//       ans.next = newNode;
//       ans = ans.next;
//       l2 = l2.next;
//     }
//   }
//   while (l1 != null) {
//     let newNode = new ListNode(l1.val);
//     ans.next = newNode;
//     ans = ans.next;
//     l1 = l1.next;
//   }

//   while (l2 != null) {
//     let newNode = new ListNode(l2.val);
//     ans.next = newNode;
//     ans = ans.next;
//     l2 = l2.next;
//   }
//   return start.next;
// };

// Better approach

var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  let head;

  if (l1.val < l2.val) {
    head = l1;
    l1 = l1.next;
  } else {
    head = l2;
    l2 = l2.next;
  }

  let tail = head;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }

  tail.next = l1 || l2;

  return head;
};
