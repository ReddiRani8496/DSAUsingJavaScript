let stack = [];

// push operation - adds elements at the end of the array
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);

stack.pop();
console.log(stack);

// get peek element - last element
console.log(stack[stack.length - 1]);
