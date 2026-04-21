function Node(val) {
  this.val = val;
  this.next = null;
}

function MyNode() {}

function addNode(val) {
  let newNode = new Node(val);
  if (this.head == null) {
    this.head = newNode;
  } else {
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    this.current.next = newNode;
    this.tail = newNode;
  }
}
