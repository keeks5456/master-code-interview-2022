/*
Sorting:
- be careful with sorting methods
- read the docs of sort methods in your language for strings, numbers etc
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
*/

const basket = [2, 33, 44, 66, 74, 6];
// console.log("66".charAt(0)); //return 6

basket.sort(function (a, b) {
  return a - b;
});
// console.log(basket); // [2,6,33,44,66,74]

/*
BUBBLE SORT
- elementary sort
pseudo code

brute force:
two loops i & j
have i start at 0 & j start at 0
compare if j > j + 1, switch 
switch: temp = j, j = j+1, j + 1 = j
*/
//      i
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function bubbleSort(array) {
  //   for (let i = 0; i < array.length; i++) {
  //     for (let j = 0; j < array.length; j++) {
  //       if (array[j] > array[j + 1]) {
  //         //switch here
  //         let temp = array[j];
  //         array[j] = array[j + 1];
  //         array[j + 1] = temp;
  //         // console.log(i, array[j], "j");
  //         // console.log(j, array[j + 1], "j + 1");
  //         // console.log(temp, "temp");
  //       }
  //     }
  //   }
  //   return numbers;

  /**
   Helpful explanation 
   https://stackoverflow.com/questions/47529349/why-do-we-make-n-1-iterations-in-bubble-sort-algorithm
   */
  let length = array.length;
  let i, j, temp;
  let swapped;

  for (i = 0; i < length - 1; i++) {
    swapped = false;
    for (j = 0; j < length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
        // console.log(array[j], "j");
        // console.log(array[j + 1], "j + 1");
        // console.log(temp, "temp");
      }
    }
    //if no two elements were swapped in inner loop, break out opf loop
    if (swapped == false) break;
  }
}

bubbleSort(numbers);
// console.table(numbers);

/*
Selection Sort
- find the smallest number, compare to the other nums in array. if you find something smaller, that is new hold value. 
- if nothing else is smallest element assign that to respective index

need: 
place holder for smallest 
2 for loops 
first loop i @ 0 , holder
2nd loop j @ 1, scanner
compare i > j, smallest = j, j = j + 1
 once smallest is found --> i = smallest 
*/

const nums = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  let length = array.length;
  let smallest;
  let temp;
  for (let i = 0; i < length; i++) {
    //set current index to smallest
    smallest = i;
    //have a reference to array[i] element
    temp = array[i];
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[smallest]) {
        smallest = j;
        //update smallest if current is lower than what we had prev.
        console.log(smallest, "smallest");
        console.log(array[j], "array[j]");
      }
    }
    if (smallest != i) {
      array[i] = array[smallest];
      //   console.log(smallest, "smallest");
      //   console.log(array[i], "array[i]");
      array[smallest] = temp;
    }
  }
}

selectionSort(nums);
// console.log(nums);
