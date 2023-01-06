// Given 2 arrays, create a function that let's a user know (true/false) 
// whether these two arrays contain any common items.
// For example:
const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'b', 'i']
// should return false
// --------------

// const array1 = ['a', 'b', 'c', 'x']
// const array2 = ['z', 'y', 'x']
// should return true

// 2 paramters - no size limit
//return true or false

//how large will this array get? 
//is our goal here to be efficient as possible? Is time or space more important?

// go for the brute force approach --> just speak about it first not code it yet
// its giving nested 4 loop O(a*b)  [not the same array sizes so use a*b]-- dont have to code this
//this isnt the best becasue inefficient, to slow 

// a better way

//convert first array[] to object {}
//array1 ==> obj {
//   a: true
//   b: true
//   c: true
//   d:true
// }

//check array2 if any existing items match array1
// array2[index] === obj.properties ? true : false

// pseudocode:

//potentially O(a + b) Time Complexity --> better
//good example of modularized code 
function containsCommons(arr1,arr2){

  //loop through arr1 & create obj where properties === itens in array
  let map = {}
  for(let i = 0; i < arr1.length; i++){
    if(!map[arr1[i]]){ //if this isnt in the map already
      const item = array1[i] //assign that item to a variable
      map[item] = true //add the item to the map w/ key of true
    }
  }
  //loop through arr2 & check if item in arr2 exist on arr1

  for(let j = 0; j < arr2.length; j++){
    if(map[array2[j]]){
      return true
    }
  }
  return false 
}

//how could we break this code?
//what if we dont recieve a 2nd array?
//can we assume always 2 params? 

//naming conventions & i & j unless its for loops (its a standard for indices)


//Naive solution
let array3 = [2,3,4,6]
let num = 12

function hasPairWithSum(arr,sum){
  var len = arr.length;
  for(var i = 0; i < len - 1; i++){
    for(var j = i+1; j < len; j++){
      if(arr[i] + arr[j] === sum){
        return true 
      }
    }
  }
  return false 
}

// Better solution
function hasPairWithSum(arr, sum){
  const mySet = new Set()
  
  const len = arr.length
  
  for(let i = 0; i < len; i++){
    if(mySet.has(arr[i])){
      return true
    }
  }
  return false
}



console.log(hasPairWithSum(array3, num))