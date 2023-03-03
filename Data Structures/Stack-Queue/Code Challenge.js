// Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

// Implement the MyQueue class:

// void push(int x) Pushes element x to the back of the queue.
// int pop() Removes the element from the front of the queue and returns it.
// int peek() Returns the element at the front of the queue.
// boolean empty() Returns true if the queue is empty, false otherwise.
// Notes:

// You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
// Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

// Example 1:

// Input
// ["MyQueue", "push", "push", "peek", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 1, 1, false]

// Explanation
// MyQueue myQueue = new MyQueue();
// myQueue.push(1); // queue is: [1]
// myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
// myQueue.peek(); // return 1
// myQueue.pop(); // return 1, queue is [2]
// myQueue.empty(); // return false

// --------------------------------------------------------------------------------------------------------------------

var MyQueue = function () {
  this.pushStack = [];
  this.popStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.pushStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.popStack.length === 0) {
    while (!this.popStack) {
      this.popStack.push(this.pushStack.pop());
    }
    return this.popStack;
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (!this.popStack) {
    return this.popStack[this.popStack.length - 1];
  }
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.pushStack.length && !this.popStack.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

//   --------------------------------------------------------------------------------------------------------------------------------
/*
  Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).
  
  Implement the MyStack class:
  
  void push(int x) Pushes element x to the top of the stack.
  int pop() Removes the element on the top of the stack and returns it.
  int top() Returns the element on the top of the stack.
  boolean empty() Returns true if the stack is empty, false otherwise.
  Notes:
  
  You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
  Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or `deque` (double-ended queue) as long as you use only a queue's standard operations.
   
  
  Example 1:
  
  Input
  ["MyStack", "push", "push", "top", "pop", "empty"]
  [[], [1], [2], [], [], []]
  Output
  [null, null, null, 2, 2, false]
  
  // Explanation
  MyStack myStack = new MyStack();
  myStack.push(1);
  myStack.push(2);
  myStack.top(); // return 2
  myStack.pop(); // return 2
  myStack.empty(); // return False
  */

var MyStack = function () {
  this.queueOne = new Queue();
  this.queueTwo = new Queue();
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queueTwo.enqueue(x);

  while (!this.queueOne.isEmpty()) {
    this.queueTwo.enqueue(this.queueOne.dequeue());
  }

  let temp = this.queueTwo;
  this.queueTwo = this.queueOne;
  this.queueOne = temp;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.queueOne.dequeue();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  if (!this.queueOne.isEmpty) {
    return this.queueOne.peek();
  } else {
    return null;
  }
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queueOne.isEmpty();
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

//   --------------------------------------------------------------------------------------------------------------------------------

var MyStack = function () {
  this.q1 = [];
  this.q2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  //The new element is always added to the rear of queue q1 and it is kept as top stack element
  this.q1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  //We need to remove the element from the top of the stack. This is the last inserted element in q1
  let size = this.q1.length - 1;

  for (let i = 0; i < size; i++) {
    //we need to maintain additional queue q2, which will serve as a temporary storage to enqueue the removed elements from q1. The last inserted element in q2 is kept as top
    this.q2.push(this.q1.shift());
  }
  // removes the last element in q1. We swap q1 with q2 to avoid copying all elements from q2 to q1.
  let temp = this.q1.shift();
  this.q1 = this.q2;
  this.q2 = [];
  return temp;
};

/**
 * @return {number}
 */

MyStack.prototype.top = function () {
  //The top element is kept in constant memory and is modified each time when we push or pop an element.
  //here we do length - 1 to return the last element of the array which is technically the first element that was put into the queue (?)
  return this.q1[this.q1.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  //Queue q1 always contains all stack elements, so the algorithm checks q1 size to return if the stack is empty.
  return this.q1.length !== 0 ? false : true;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
