/* Define a function isPrime(number) that returns true if number
  is prime. Otherwise, false. A number is prime if it is only divisible
   by 1 and itself.*/
   function isPrime(number) {
    if (number < 2) {
      return false;
    }

    let i = 2;
    while (i < number) {
      if (number % i === 0) {
        return false;
      }
      i++;
    }

    return true;
  }

  function isPrime(number) {
    if (number <= 1) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }

    return true;
  }

console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true

/*a function choosePrimes(nums) that takes in an array of numbers as args.
 The function should return a new array containing the primes from the
 original array. A prime number is a number that is only divisible by 1
 and itself. Hint: consider creating a helper function to check if a
 number is prime!*/
 // Helper function to check if a number is prime
function isPrime(number) {
    if (number <= 1) {
      return false;
    }

    // Iterate from 2 up to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      // If number is divisible evenly by any divisor, it's not prime
      if (number % i === 0) {
        return false;
      }
    }

    // If none of the divisors evenly divide the number, it's prime
    return true;
  }

  // Function to choose prime numbers from an array
  function choosePrimes(nums) {
    var primes = [];

    // Iterate over each number in the input array
    for (let i = 0; i < nums.length; i++) {
      // Check if the number is prime using the helper function
      if (isPrime(nums[i])) {
        // If the number is prime, add it to the primes array
        primes.push(nums[i]);
      }
    }

    // Return the array containing only the prime numbers
    return primes;
  }

//app academy solution
 let isPrime = function(num) {
    if (num < 2) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

let choosePrimes = function(nums) {
    let primes = [];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (isPrime(num)) {
            primes.push(num);
        }
    }

    return primes;
}

// using while
// let choosePrimes = function(nums) {
//     let primes = [];
//     let i = 0;

//     while (i < nums.length) {
//         let num = nums[i];
//         if (isPrime(num)) {
//             primes.push(num);
//         }
//         i++;
//     }

//     return primes;
// }

console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]

/*function nextPrime that accepts a number as an argument.
 The function should return the nearest prime number that is greater
 than the given number. */

 function isPrime(number) {
    if (number <= 1) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }

    return true;
  }

  function nextPrime(number) {
    // Initialize the next number to check
    let nextNumber = number + 1;

    // Keep checking numbers until a prime number is found
    while (!isPrime(nextNumber)) {
      nextNumber++;
    }

    return nextNumber;
  }


  console.log(nextPrime(2)); // 3
  console.log(nextPrime(3)); // 5
  console.log(nextPrime(7)); // 11
  console.log(nextPrime(8)); // 11
  console.log(nextPrime(20)); // 23
  console.log(nextPrime(97)); // 101

/* function primeFactors that accepts a number as an argument.
The function should return an array containing all of the prime numbers
that can divide the given number.*/
  function isPrime(number) {
    if (number <= 1) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }

    return true;
  }

  function primeFactors(number) {
    var factors = [];

    for (let i = 2; i <= number; i++) {
      if (isPrime(i) && number % i === 0) {
        factors.push(i);
      }
    }

    return factors;
  }



  console.log(primeFactors(12));  // [2, 3]
  console.log(primeFactors(7));   // [7]
  console.log(primeFactors(16));  // [2]
  console.log(primeFactors(30));  // [2, 3, 5]
  console.log(primeFactors(35));  // [5, 7]
  console.log(primeFactors(49));  // [7]
  console.log(primeFactors(128)); // [2]

  /*function isAntiPrime that accepts a number as an argument.
  The method should return true if the given number has more divisors than
  all positive numbers less than the given number. For example, 24 is an a
  nti-prime because it has more divisors than any positive number less than
   24. */

   function getDivisorsCount(number) {
    let count = 0;

    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        count++;
      }
    }

    return count;
  }

  function isAntiPrime(number) {
    const divisorsCount = getDivisorsCount(number);

    for (let i = 1; i < number; i++) {
      if (getDivisorsCount(i) >= divisorsCount) {
        return false;
      }
    }

    return true;
  }



  console.log(isAntiPrime(24))   // true
  console.log(isAntiPrime(36))   // true
  console.log(isAntiPrime(48))   // true
  console.log(isAntiPrime(360))  // true
  console.log(isAntiPrime(1260)) // true
  console.log(isAntiPrime(27))   // false
  console.log(isAntiPrime(5))    // false
  console.log(isAntiPrime(100))  // false
  console.log(isAntiPrime(136))  // false
  console.log(isAntiPrime(1024)) // false

  /*function mostVowels that takes in a sentence string and returns the word
   of the sentence that contains the most vowels. */
   function vowelCount(word){
    let count = 0;
    let vowels="aeiou";
    for (let i = 0 ; i < word.length ; i++){
        if(vowels.includes(word[i])){
            count++;
        }
    }
    return count;
}


function mostVowels(sentence) {
    let words = sentence.split(" ");
    let largest=0;

    for (let j = 0 ; j < words.length ; j++){

        if( vowelCount(words[j]) > largest){
            largest = j;
        }


    }
    return words[largest];

}
console.log(mostVowels("what a wonderful life")); // "wonderful"
