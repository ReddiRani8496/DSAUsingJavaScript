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
    let first  = head;
    let second = sentinental;
    for(let i=1;i<n;i++) {
        first = first.next;
    }

    while(first && first.next!=null) {
        second = second.next;
        first = first.next;
    }

    second.next = second.next.next;
    return sentinental.next;
};