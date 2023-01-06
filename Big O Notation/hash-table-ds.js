//Hash Tabes

let user ={
  age: 54,
  name:'kyle',
  magic: true,
  scream: function(){
    console.log("AAHHHHH!!!")
  }
}

user.spell = "kadabra" //O(1)
user.scream() //O(1)

console.log(user)

// hash table collision
/*
   when you have a collision, it slows down reading and writing with a hash table with O(n/k)
   Where K is the size of the hash table. B/c we removed constants, it just becomes O(n)
   there are diff ways to solve collisions
*/

//Hash tables in Diff langs

/*
- Map:
  - Const a = new Map()
  - allows you to save any data type as a key
  - maintains insertion order -->

- Sets:
  - const b = new Set()
  - its stores the keys and not values.
*/

class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  //adds to this.data
  set(key, value){
    let address = this._hash(key)
    if(!this.data[address]){
      this.data[address] = []
    } 
    this.data[address].push([key,value])
    console.log(this.data)
    return this.data
  }
  // retrieve from this.data
  get(key){

  }
}
const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')

/*
_hash <-- private property should not be accessed
*/