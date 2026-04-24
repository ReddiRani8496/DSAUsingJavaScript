var removeElements = function (head, val) {
  let dummy = new ListNode();
  dummy.next = head;

  let curr = dummy;

  while (curr.next !== null) {
    if (curr.next.val === val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return dummy.next;
};
