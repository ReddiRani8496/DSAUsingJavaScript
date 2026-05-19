let queue = [];

// enqueue add element to the array, when we add any element it will add at end, so using push

queue.push(1);
queue.push(2);
queue.push(3);
console.log(queue);

// dequeue while removing should remove from starting, so use shift
queue.shift();
console.log(queue);

// front element always 0th index
console.log(queue[0]);
