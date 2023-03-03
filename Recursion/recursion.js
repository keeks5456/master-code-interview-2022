//example of recursion

let counter = 0;
function inception() {
  //   console.log(counter);
  //   debugger;
  if (counter > 3) {
    return "done";
  }
  counter++;
  return inception();
}

//stack overflow
/*2 bit problems:
- calling the function till overflowed

- if we create a base case for our function, we can prevent a stackoverflow
rules:
identify base case
identify recursive case
get closer and closer & return when needed. Usually have two returns

*/
/*Find the factorial of a number
 - example: 5! = 5 * 4 * 3 * 2 * 1
 multiply each of these num till reaches 1
*/
// let answer = 0;

//O(n)
function findFactorialRecursive(number) {
  if (number === 2) {
    return 2;
  } else {
    let answer = number * findFactorialRecursive(number - 1);
    return answer;
  }
}
// console.log(findFactorialRecursive(5));

//O(n)
function findFactorialIterative(number) {
  let answer = 1;
  if (number == 2) {
    answer = 2;
  }
  for (let i = 2; i <= number; i++) {
    console.log(answer, i);
    answer = answer * i;
  }
  return answer;
}
// console.log(findFactorialIterative(5));

/////////////////////////////////////////////////////////////////////////////////////////////

// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
  //O(n)
  let array = [0, 1]; // has the initial 2 index in the sequence that can be returned if called, it is available if user asked for 0 or 1
  if (n < 2) {
    return array[n];
  }
  // start i @ 2 b/c we will start adding in the sequence
  // keep looping till is not less than n + 1
  for (let i = 2; i < n + 1; i++) {
    //pushes the next sequences to the array
    array.push(array[i - 2] + array[i - 1]);
  }
  return array[n];
  //code here;
}
console.log(fibonacciIterative(1));

//O(2^N) exponential time: increase in function calls
// time complexity gets slower as the number gets bigger
//not thew ideal solution
function fibonacciRecursive(n) {
  //base case if our number's index is less than index 2 return number
  // we dont need to iterate through  ex: 0, 1, 1, 2
  if (n < 2) {
    return n;
  }
  // Formula: Fn = Fn-1+Fn-2
  // going off this we can call the function twice
  // the answer is always the numbers 1 & 2 before it
  //add the nums before the sequence

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
fibonacciRecursive(20);

function fibStandard(n) {
  let [curr, prev, sum] = [1, 0, 0];

  for (let i = 2; i <= n; i++) {
    sum = prev + curr;
    prev = curr;
    curr = sum;
    console.log(sum, "s");
    console.log(prev, "p");
    console.log(curr, "c");
  }

  return sum;
}
console.log(fibStandard(7));

//tail call optimization ??

/*
   Every time you use a tree or convert something into a tree. 
   consider recursion. 
   1. Divided into a num of sub-problems that are small instances of the same problem
   2. Each instance of the sub-problem id identical in nature
   3. the solution of each subproblem can bee combined to solve the problem at the hand

   Divide and conquer using recursion
*/

//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringRecursive(str) {}

function reverseStringIterative(str) {}

reverseString("yoyo mastery");
//should return: 'yretsam oyoy'
