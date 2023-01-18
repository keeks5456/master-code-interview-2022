const basket = ['apples', 'grapes', 'pears']

//linked list: apples --> grapes --> pears

// apples 
// 8890 --> grapes 
//           8330 --> pears 
//                     332 --> null

let obj1 = {a: true}
let obj2 = obj1 //example of a pointer
obj1.a = "jaaaah"
// delete obj2
// console.log(obj1, '1')
// console.log(obj2, '2')

 class LinkedList {
  constructor(value){
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head 
    this.length = 1
  }
  append(value){
    const newNode = {
      value: value, 
      next: null
    }
    this.tail.next = newNode
    this.tail = newNode
    this.length ++
    return this
  }
  prepend(value){
    const newNode = {
      value: value, 
      next: null
    }
    
    newNode.next = this.head 
    this.head = newNode
    this.length ++
    return this
  }
   
 }

 //head -> 10
 //next -> null 
 //tail -> null 



 const myLinkedList = new LinkedList(10)
 myLinkedList.append(5)
 myLinkedList.append(15)
 myLinkedList.prepend(7)
 console.table(myLinkedList)