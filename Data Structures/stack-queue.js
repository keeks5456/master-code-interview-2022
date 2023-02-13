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
  constructor(value){
    this.value = value;
    this.next = null
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0
  }
  peek(){
    
    if(this.length == 0){
      return "nothing in stack"
    } else {
      return this.top
    }
  }
  push(value){
    const newNode = new Node(value)

    if(this.length === 0){
      // if we find that length is empty, we make the newNode top & bottom
      this.top = newNode
      this.bottom = newNode
    } else {

      const holdPointer = this.top //null
      this.top = newNode //netflix == top
      this.top.next = holdPointer// netflix --> null
    }
      this.length ++
      return this
  }

  //amazon -> netflix
  pop(){
    //if top doesn't exist, return null
    if(!this.top){
      return null
    } 
      const hold = this.top 
      this.top = this.top.next
    this.length --
    return this

  }
}

const myStack = new Stack()
myStack.peek()
myStack.push("netflix")
myStack.push("amazon")
myStack.pop()
console.table(myStack)