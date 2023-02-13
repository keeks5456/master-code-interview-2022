console.log("hello")

//Example of )(n) Linear Time algo
const nemo = ['nemo'];
function findNemo1(array) {
  let t0 = performance.now()
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
  let t1 = performance.now()

  console.log(`${t1-10} milliseconds`)
}

// findNemo1(nemo); --> O(n) linear Time

/*note:
- performance.now() method returns a DOMHighResTimeStamp, measured in milliseconds.
*/

//Example of O(1) Constant Time 

function compressFirstBox(boxes){
  console.log(boxes[0]) // O(1)
  console.log(boxes[1]) // O(2)
}

// compressFirstBox([1,2,3,4,5])

/*notes:
this is very scalable, we want this.
  doesnt matter how big inputs are, will always going to do constant amount of time on a funct.
*/

//Challenge 
// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; //O(1)
  a = 50 + 3; //O(1)

  for (let i = 0; i < input.length; i++) { //loops are O(n == the input)
    anotherFunction(); //O(n) depending on how many times its being called 
    let stranger = true; //O(n)
    a++; //O(n) depending on how many times the input is ran
  }
  return a;
}
// funChallenge([22,33,44])

/*notes:
  - I see that theres a for loop, which always O(n) b/cause it iterates through the elements 
  - not sure what the heck anotherFunction() is doing

 
 Big O( 3 + 4n ) === O(n)
*/

//Challenge.2
// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; //O(1)
  let b = 10; //O(1)
  let c = 50; //O(1)
  for (let i = 0; i < input; i++) { //for loop == O(n)
    let x = i + 1;
    let y = i + 2;
    let z = i + 3;

    //these inputs depend on the input variable of the loop so thats O(n) each

  }
  for (let j = 0; j < input; j++) { // another for loop === O(n)
    let p = j * 2;
    let q = j * 2;

    //these inputs depend on the input variable of the loop so thats O(n) each

  }
  let whoAmI = "I don't know";// O(1)
}

/*notes:
- i see that we now have two loops but they are still O(n)

 Big O( 4 + 7n ) === O(n)
*/

//Remove Constants Section 

function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]); //O(1)

  var middleIndex = Math.floor(items.length / 2);  //split in half -> n/2
  var index = 0;  

  while (index < middleIndex) { //O(n/2) logging half the items array
      console.log(items[index]); 
      index++; 
  }

  for (var i = 0; i < 100; i++) { //no matter how big array is, this is aways 100
      console.log('hi'); 
  }
}

/*
 Big O === 1 + 1 + 1 + (n*5) = O(n) X wrong
right --> O(1 + n/2 + 100) ==> O(n) 
we can drop the constant that is n/2 ==> just be n

*/

//Different Terms for inputs:

function compressBoxesTwice(boxes, boxes2){
  boxes.forEach(function(boxes){
    console.log(boxes)
  })

  boxes2.forEach(boxes => console.log(boxes))
}

/*
 - this is actually O(n + m)
 - the two for loops are independent, so the terms will apply differntly to them
*/

// O(n^2) Quadratic time

//Log all pairs of array

const boxes = ['a', 'b', 'c', 'd', 'e'];
function logAllPairsOfArray(array) {
  for(let i = 0; i < array.length; i++){ //O(n)
    for(let j = 0; j < array.length; j++){ //O(n)
      console.log(array[i], array[j])
    }
  }
}

// logAllPairsOfArray(boxes)

/*notes:
- this is O(n^2) ==> O(n * n)
- b/c when you see nested loops we must multiply the loops nested.
- they are working simultaniously together
*/

// Drop Non-dominants

function printAllNumbersThenAllPairSums(numbers) {

  console.log('these are the numbers:');
  numbers.forEach(function(number) {  //O(n)
    console.log(number);
  });

  console.log('and these are their sums:'); 
  numbers.forEach(function(firstNumber) {  //O(n)
    numbers.forEach(function(secondNumber) { //O(n)
      console.log(firstNumber + secondNumber);
    });
  });
}

// printAllNumbersThenAllPairSums([1,2,3,4,5])

/*
  - out Big O => O(n^2)
  - breaking this down we have O(n + n*n).
  - however since we have to drop non dominant we can focus on the most important term --> O(n^2)
  - O(n^2) as this increases in size that is more important to focus on.

*/

// Space Complexity

function booo(n){
  for(let i = 0; i < n.length; i++){
    console.log("boooo!")
  }
}

// booo([1,2,3,4,5]) //==> O(1) space complex

/*
notes:
- the space complex is O(1) b/c there is no additional space being taken up in the algo. 
- there is no space being added
*/

function arrayOfNTimes(n){
  let hiArray = []

  for(let i = 0; i < n; i++){
    hiArray[i] = "hi"
  }
  return hiArray
}

// arrayOfNTimes(6)

/*
notes:
- space complexity is O(n) b/c we created an array 
- & with every iteration in the loop we add a variable into our array making it bigger depending on the parameter passed in
-  
*/


