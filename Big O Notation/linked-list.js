const basket = ['apples', 'grapes', 'pears']

//linked list: apples --> grapes --> pears

// apples 
// 8890 --> grapes 
//           8330 --> pears 
//                     332 --> null

let obj1 = {a: true}
let obj2 = obj1 //example of a pointer
obj1.a = "jaaaah"
// console.log(obj1, '1')
// console.log(obj2, '2')

//optional instead of making a new instance of a node in every function

class Node {
  constructor(value){
    this.value = value,
    this.next = null
  }
}

class DoublyLinkedList{
  constructor(value){
    this.head = {
      value: value,
      next: null,
      prev: null
    }
    this.tail = this.head
    this.length = 1
  }

  append(value){ // O(1)
    const newNode = new Node(value)

    if(this.head == null){
      this.head = newNode 
      this.tail = newNode
    } else {

      newNode.prev = this.tail// 15 -> null b/c 7(prev) =. null
      this.tail.next = newNode // 15 -> null is now 15 -> 7
      this.tail = newNode // reassign tail to point to 7 
      console.log(newNode.prev)
    }

    this.length ++
    return this
  }

  prepend(value){ // O(1)
    const newNode = new Node(value)
    newNode.next = this.head // 12 -> 10
    this.head.prev = newNode // 12 <-> 10
    this.head = newNode // 12 is new head
    this.length ++
    return this
  }

  // null - 10 - 5 - 15 - null
  // <-> 10 <-> 5 <-> 15 <-> 7 -> null!


  printList(){
    const array = []
    let currentNode = this.head 
    while(currentNode !== null){
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array
  }


} //end


  const myLinkedList = new DoublyLinkedList(10)
  // myLinkedList.append(5)
  // myLinkedList.append(15)
  myLinkedList.append(7)
  myLinkedList.prepend(12)
  console.table(myLinkedList)

 class LinkedList {
  constructor(value){
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head 
    this.length = 1
  }
  append(value){ // O(1)
    const newNode = new Node(value)

    this.tail.next = newNode
    this.tail = newNode
    this.length ++
    return this
  }
  prepend(value){ // O(1)
    // const newNode = {
    //   value: value, 
    //   next: null
    // }
    const newNode = new Node(value)

    newNode.next = this.head 
    this.head = newNode
    this.length ++
    return this
  }
  printList(){
    const array = []
    let currentNode = this.head 
    while(currentNode !== null){
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array
  }

   insert(index, value){ //traversing & check params
    const newNode = new Node(value) //create a new node
    
    if(index === 0){
      this.prepend(value)
      return this.printList
    }

    if(index >= this.length){
     return this.append(value)
     //push to back if index is greater than our node length
    }

    const leader = this.traverseToIndex(index - 1) 
    //new method that traverses through the given node
    // here we are saying grab the value behind the value that index 2 holds.
    //visually //7 -> 10 -> 5 -> 15 // index 2 == 5, index 1 == 10
    // console.log(leader)
    const holdPointer = leader.next //a reference to 5
    // console.log(holdPointer)
    leader.next = newNode 
    // now 10 points to 99
    // ou will also notice that we deleted the nodes that 5 was pointing to, we need that back
    newNode.next = holdPointer // now 99 points to 5 and its other nodes
    this.length ++
    return this.printList
   }

   traverseToIndex(index){
    //check for params
    let counter = 0;
    let currentNode = this.head

    while(counter != index){
      currentNode = currentNode.next 
      counter ++
    }
    return currentNode
   }

   delete(index){
    if(this.head == null){
      return this.printList
    }

    let leader = this.traverseToIndex(index - 1) //7
    console.log(leader)
    const unwantedNode = leader.next //10
    console.log(unwantedNode, "unwanted")
    leader.next = unwantedNode.next
    this.length --
    return this.printList
   }

 } //ennd

//7 -> 10 -> 5 -> 15
//7 -> 10 -> 99 -> 5 -> 15


//  const myLinkedList = new LinkedList(10)
 //  myLinkedList.prepend(7)
//  myLinkedList.insert(2, 99)
//  myLinkedList.delete(1)
//  console.log(myLinkedList)