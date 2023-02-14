/*
Stacks:
- LIFO: Last in First out
- Think of stacks like a stack of plates
- example: browser history - store prev state of memory

pop - pop off element 0(1)
push - push in element 0(1)
peek - peek at top of stack 0(1)
look up - traverse stack 0(n) 
*/

/*
Queues:
- FILO: First in Last out
- think of it like roller coaster: first person in is also first person out
- examples: a wait-list for reservations in restaurant

enqueue - add to queue 0(1)
dequeue - remove first element from  queue 0(1)
peek - peek - peek at top of queue 0(1)
look up - traverse stack 0(n) 

Q: Why would you not want to use an array to build a queue?
A: Inefficient --> removing an element shifts the other indexes
*/

/*
Stacks:
we can use both Array && Linked List to implement Stacks
Array --> have cache locality which makes them faster when accessing its items memory
  -> either have static or dynamic memory
  -> only has certain amount of memory
Linked list --> have scattered all over memory, they also have extra memory
 -> however they have dynamic memory
*/

/*
Queues:
Linked list are the way to go here
- if we were to use an array, if we wanted to remove or add an element,
we would also have to remove / add an index for that element.
- whereas linked list just have pointer indicator along with a head & tail
removing & added does effect anything after.
*/
//creates a stack overflow
// function foo() {
//   foo();
// }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    if (this.length == 0) {
      return "nothing in stack";
    } else {
      return this.top;
    }
  }
  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      // if we find that length is empty, we make the newNode top & bottom
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdPointer = this.top; //null
      this.top = newNode; //netflix == top
      this.top.next = holdPointer; // netflix --> null
    }
    this.length++;
    return this;
  }

  //amazon -> netflix
  pop() {
    //if top doesn't exist, return null
    if (!this.top) {
      return null;
    }
    if(this.top === this.bottom){
      this.bottom = null
    }
    const hold = this.top; //hold current top value
    this.top = this.top.next; // top will now be
    this.length--;
    return hold; //return the new top
  }
}

const myStack = new Stack();
myStack.peek();
myStack.push("netflix");
myStack.push("amazon");
myStack.push("safeway");
myStack.pop();
// console.table(myStack);


class Array{
  constructor(){
    this.item = []
  }

  push(element){
    this.item.push(element)
  }

  pop(){
    this.item.pop()
  }

  peek(){
    return this.item[this.item.length - 1]
  }
  isEmpty(){
    return this.item.length == 0
  }
}

const myArray = new Array()
myArray.push("hello")
myArray.push("meow")
// console.log(myArray.peek())
myArray.push("woof")
myArray.pop()
// console.log(myArray.isEmpty())
// console.log(myArray)

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0
  }
  peek(){
  return  !this.first ? "she empty" : this.first
  }
  // add to the front
  enqueue(value){
    const newNode = new Node(value)
    if(!this.first){
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode //tell the last element to point to newNode
      this.last = newNode // tell last element that it is now newNode..?
    }
    this.length ++
    return this
  }
  //remove from front 
  dequeue(){

    if(this.length === 0){
      return null
    } else {
      let nextInLine = this.first.next //have a reference to the next person in line
      this.first = nextInLine // make next person in line now first
      //alternative
      // this.first = this.first.next
    }
    this.length --
    return this

  }
}

const myQueue = new Queue()
myQueue.peek()
myQueue.enqueue("susan")
myQueue.enqueue("jack")
myQueue.enqueue("mary")
myQueue.dequeue()
myQueue.enqueue("jane")
// myQueue.enqueue("sam")
myQueue.enqueue("steve")
myQueue.enqueue("joan")
myQueue.dequeue()
// console.table(myQueue)

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



var MyQueue = function() {
  this.firstStack = []
  this.secondStack = []
};

/** 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(x) {
  if(this.secondStack.length === 0){
      this.firstStack.push(x)
      
  } else {
      this.secondStack.push(x)
  }


};

/**
* @return {number}
*/
MyQueue.prototype.pop = function() {
if(this.secondStack.length === 0){
      let first = this.firstStack[0]
      this.secondStack = this.firstStack.slice(1)
      this.firstStack = []
      console.log(first)
      return first
  }else{
      let first = this.secondStack[0]
      this.firstStack = this.secondStack.slice(1)
      this.secondStack = []
      return first
  }
};

/**
* @return {number}
*/
MyQueue.prototype.peek = function() {
  if(!this.secondStack.length){
      return this.firstStack[0]
  } else {
      return this.secondStack[0]
  }
};

/**
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
 return !this.firstStack.length && !this.secondStack.length
};

/** 
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/