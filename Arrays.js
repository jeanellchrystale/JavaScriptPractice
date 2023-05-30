//function named wordWithinArray(array,word) using Array.indexOf.
//The function takes in both a word and an array of words as arguments
//and returns a boolean that returns true if that string is located inside
// of the array, or false if it does not.
function wordWithinArray(array, word) {
    // your code here...
   return array.indexOf(word) !== -1
};

console.log(
  wordWithinArray(["apple", "banana", "caramel", "chocolate"], "apple")
); //=> true

console.log(wordWithinArray(
  ["dog", "cat", "camel", "bird"], "camel")
); //=> true

console.log(
  wordWithinArray(["apple", "banana", "caramel", "chocolate"], "pineapple")
); //=> false

console.log(wordWithinArray(
  ["dog", "cat", "camel", "bird"], "panther")
); //=> false


// a function firstAndLast that takes in an array of numbers and returns
//the sum of the first and last element if there is an even number of
//elements in the array. If there is an odd number of elements in the
//array, then the function should return the difference between the first
//and last elements of the array.
function firstAndLast(nums) {
    const length = nums.length;
    let first = nums[0];
    let last = nums[length-1];

    if (length % 2 === 0) {
      // Even number of elements, return the sum of the first and last element
      return first + last;
    } else {
      // Odd number of elements, return the difference between the first and last element
      return first - last;
    }
  }



  console.log(firstAndLast([1, 2, 3, 4]));    // 5
  console.log(firstAndLast([1, 2, 3, 4, 5])); // -4
  console.log(firstAndLast([12, 5]));         // 17
  console.log(firstAndLast([12]));            // 0
  console.log(firstAndLast([7, 11, 3]));      // 4

  //a function combineArray(array1, array2) that takes in two arrays of
  //numbers and returns the two arrays combined into a single array.

  function combineArray(array1, array2) {
    return array1.concat(array2)
}

console.log(combineArray([1, 2], [3, 4])); // => [1, 2, 3, 4]
console.log(combineArray([17, 5], [6, 7]));  // => [17, 5, 6, 7]

//function threeIncreasing that accepts an array of numbers as an argument.
// The function should return a boolean indicating whether or not the array
// contains three consecutive numbers in consecutive increasing order, like
// 7, 8, 9.
let threeIncreasing = function(nums) {
    for (let i = 0; i < nums.length -2; i++) {
        if (nums[i] + 1 === nums[i + 1] && nums[i + 1] + 1 === nums[i + 2]) {
            return true;
        }
    }
    return false
};
/*Since we are comparing three adjacent elements, we need to stop the
loop at the third-to-last element, because accessing elements at indices
i, i + 1, and i + 2 requires the array to have at least i + 3 elements.
Hence, we stop the loop at length - 2.*/

console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));     // true
console.log(threeIncreasing([2, 7, 8, 9]));                 // true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));        // false
console.log(threeIncreasing([1, 2, 4, 5, 2, 7, 8]));        // false



/*function myIncludes(arr, target) that accepts an array and a target
value as args. The function should return a boolean indicating whether
the target is found in the array. Solve this without Array.includes or
Array.indexOf.*/
function myIncludes(arr, target) {
    for (let i = 0; i < arr.length; i++) {
   if (arr[i] === target) {
     return true;
   }
 }
 return false;
}

let myIndexOf = function(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        if (target === el) {
            return i;
        }
    }

    return -1;
};

function myIndexOf(arr, target) {

    if (arr.indexOf(target) !== -1) {
      return true;
    }

  return false;
 }

console.log(myIncludes(['a', 'b', 'c', 'e'], 'c')); // true
console.log(myIncludes(['a', 'b', 'c', 'e'], 'a')); // true
console.log(myIncludes(['a', 'b', 'c', 'e'], 'z')); // false
console.log(myIncludes([43, -7, 11, 13], 11)); // true
console.log(myIncludes([43, -7, 11, 13], 1)); // false

/* function sumArray(array) that takes in an array of numbers and returns
 the total sum of all the numbers. */
 function sumArray(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }

    return sum;
  }

  const numbers = [1, 2, 3, 4, 5];

  console.log(sumArray(numbers));  // Returns: 15

  /*function productWithReduce(nums) that takes in an array of numbers.
  The function should return the total product of multiplying all numbers
  of the array together. You can assume that nums will not be an empty
  array. */

  // your code here
function productWithReduce(nums) {
    let product = 1;

    for (let i = 0; i < nums.length; i++) {
      product *= nums[i];
    }

    return product;
  }

  function productWithReduce(nums) {
    const product = nums.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
    return product;
  }

  console.log(productWithReduce([10, 3, 5, 2]));  // Returns: 300
  console.log(productWithReduce([4, 3]));         // Returns: 12

  //a function doubler(numbers) that takes an array of numbers and returns
  // a new array where every element of the original array is multiplied
  //by 2.
  function doubler(nums) {
    let doubledArray = [];
    for (let i = 0; i < nums.length; i++) {
      byTwo = nums[i] *2;
      doubledArray.push(byTwo);
    }

    return doubledArray;
  }


  function doubler(numbers) {
    let doubledNums = [];

    let i = 0;
    while (i < numbers.length) {
      let oldNum = numbers[i];
      let newNum = oldNum * 2;
      // this step is important because concat does NOT change the original array
      doubledNums = doubledNums.concat(newNum);

      i += 1;
    }

    return doubledNums;
  }


  console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
  console.log(doubler([7, 1, 8])); // => [14, 2, 16]

  /* function allElseEqual that takes in an array of numbers. The function
  should return the element of the array that is equal to half of the sum
  of all elements of the array. If there is no such element, the method
  should return null. */
  function sum(arr) {//The function takes in an array of numbers.
    // The function should return the element of the array that is
    //equal to half of the sum of all elements of the array.
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }return sum;
}
    //If there is no such element, the function should return null
   function allElseEqual(arr) {
       let totSum = sum(arr);
       for (let i = 0; i < arr.length; i++) {
       if (arr[i] === totSum / 2) {
            return arr[i];
       }
        }return null;
   }


console.log(allElseEqual([2, 4, 3, 10, 1])); // 10
console.log(allElseEqual([6, 3, 5, -9, 1])); // 3
console.log(allElseEqual([1, 2, 3, 4]));// null
