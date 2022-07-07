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
- examples: a waitlist for reservations in restaurant

enqueue - add to queue 0(1)
dequeue - remove first element from  queue 0(1)
peek - peek - peek at top of queue 0(1)
look up - traverse stack 0(n) 

Q: Why would you not want to use an array to build a queue?
A: inifficient --> removing an element shifts the other indexes
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
- whereas linked list just have pointer indcators along with a head & tail
removing & added does effect anything after.
*/
//creates a stack overflow
function foo() {
  foo();
}

//async stuff come back too this @ stacks and queues section
// console.log("hello")
// setTimeout(() =>{
//   console.log("wth?")
// },0)
// console.log("nothing changed lol")

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.top = null;
//     this.bottom = null;
//     this.length = 0;
//   }

//   // The function first checks whether the length of the array is 0,
//   //  If it is true then it will make an Error,
//   //  if its false then it will return the last element.
//   peek() {
//     if (this.length === 0) {
//       console.log("out of bounds");
//     }
//     // return this[this.length - 1];
//     return this.top;
//   }

  // push(value) {
  //   const newNode = new Node(value); //create a new node that can hold our values
  //   if (this.length === 0) {
  //     // check if length of stack is empty
  //     //if empty, the top/(head) & bottom/(tail) will now have values
  //     this.top = newNode;
  //     this.bottom = newNode;
  //   } else {
  //     //if the stack is not empty, meaning there is something at the top
  //     const holdPoint = this.top; //assign a holding point to hold the head
  //     this.top = newNode; // move down to the next elemnt & make it the head
  //     this.top.next = holdPoint; // push the holding point behind new "head" of stack ==> ["udymy", "google"]
  //   }
  //   this.length++; //increment the length to add more space for new element
  //   return this;
//   }
  // pop() {
  //   if (!this.top) {
  //     return null;
  //   }
  //   if (this.top === this.bottom || this.length === 0) {
  //     //if somehow there is just one element in stack make bottom null
  //     //after removing only node left we want bottom to be null
  //     this.bottom = null;
  //   }
  //   // const holdPoint = this.top;
  //   this.top = this.top.next;
  //   this.length--; // decrement the lenght of the elemnt
  //   // return holdPoint
  //   return this; //return our stack
//   }
// }

/*Converted into array*/
class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    if (this.array.length === 0) {
      console.log("out of bounds");
    }
    return this.array[this.array.length - 1];
  }

  push(item) {
    this.array.push(item);
    return this.array;
  }
  pop(){
    return this.array.pop()
  }
  
}

const myStack = new Stack();
// console.log(myStack.push("google"));
// console.log(myStack.push("twitter"));
// console.log(myStack.push("instagram"));
// console.log(myStack.pop(), 'pop');
// console.log(myStack.peek());


/*implement Queues

*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//FIFO
class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  //get first item
  peek() {
    if(this.length === 0){
      console.log("nothing to see here")
    }
    return this.first
    // return this[this.length - 1]
  }
  //add to behind of queue
  enqueue(value){
    const newNode = new Node(value)

    if(this.length === 0){
      this.first = newNode
      this.last = newNode
    } else {
      //here we whatever is last is pointing to null so we update it to the node value
      this.last.next = newNode
      // then we want to update last to equal newNode
      this.last = newNode
    }
    this.length ++
    return this

  }
  //removes from the front
  dequeue(){
    if(!this.first){
      return null
    }

    if(this.first === this.last || this.length === 0){
      return this.last = null
    } 
    this.first = this.first.next  
    length --
    return this
  }
  //isEmpty;
}

const myQueue = new Queue();
console.log(myQueue)
// console.log(myQueue.peek())
console.log(myQueue.enqueue("apple"), "1")
console.log(myQueue.enqueue("banana"), "2")
console.log(myQueue.dequeue(), "3")
console.log(myQueue.enqueue("orange"), "4")
console.log(myQueue.enqueue("cherry"), "5")
console.log(myQueue.enqueue("kiwi"), "6")
console.log(myQueue.dequeue(), "7")
console.log(myQueue.dequeue(), "7")
console.log(myQueue.dequeue(), "7")

