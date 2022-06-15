//Arrays Introduction
/*
lookup O(1)
push O(1)
insert O(n)
delete O(n)

- 
*/

const strings = ['a', 'b', 'c', 'd'];
const numbers = [1,2,3,4,5];
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.


//push
strings.push('e');

//pop
strings.pop();
strings.pop();

//unshift
strings.unshift('x')

//splice
strings.splice(2, 0, 'alien');

// console.log(strings)

 //june 15 2022

//reference type
var obj1 = {value: 10}
var obj2 = obj1
var obj

// context vs scope
const object4 = {
  a: function(){
    console.log(this)
  }
}
//instantiation -->
// make copy of obj and reuse the code --> making instances of the same code

class Player{
  constructor(name, type){
    console.log(this)
    this.name = name;
    this.type = type;
  }

  introduce(){
    console.log(`Hi. I am ${this.name}, I am a ${this.type}`)
  }
}

//extends is like saying "create the wizard and add whatever player has along with it"
class Wizard extends Player{ 
  constructor(name, type){

    super(name, type)
  }
  play(){
    console.log(`Weeee I am a ${this.type}`)
  }
}

// const wizard1 = new Wizard("Gandolf", "The Powerful Wizard")
// console.log(wizard1.play())
// console.log(wizard1.introduce())
/*
in order to access the Player & make copies of it,
we run a constructor, which is all the properties & methods that you want the player to have.
*/

class MyArray{
  constructor(){
    this.length = 0;
    this.data = {}
  }
  get(index){
    return this.data
  }

  push(item){
    this.data[this.length] = item
    this.length++
    return this.length
  }

  pop(){
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length --
    return lastItem
  }

  delete(index){
    const item = this.data[index]
    this.shiftItems(index)
  }

  shiftItems(index){
    for(let i = index; i < this.length - 1; i++ ){ // --> start at index where we want to start the delete, iterate thru it.
      this.data[i] = this.data[i + 1] //take each item in the data, add the data right next to it @ + 1
    }
    delete this.data[this.length - 1]
    this.length --
  }
}

const newArray = new MyArray()
newArray.push("hi")
newArray.push("Akiko")
newArray.push("I")
newArray.push("love")
newArray.push("You")
newArray.delete(1)

console.log(newArray)
