//Define a function logBetween(lowNum, highNum)
//that will print every number from lowNum to highNum, inclusive.
//Inclusive means that the range includes lowNum and highNum.
function logBetween(lowNum, highNum) {
  for (let i = lowNum; i <= highNum; i += 1) {
    console.log(i);
  }
}

function logBetweenWhile(lowNum, highNum) {
  let i = lowNum;
  while (i <= highNum) {
    console.log(i);
    i++;
  }
}
logBetween(-1, 2);

//Write a function printFives(max)
//that prints out the multiples of 5 that are less than max.
function printFives(max) {
  for (let i = 0; i < max; i += 1) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
}

printFives(20) // prints out:

//function takes in 3 numbers as parameters. The function should print
//out numbers between min and max at step intervals.

function logBetweenStepper(min, max, step) {
    for(let i = min; i <= max; i+=step) {
        console.log(i);
    }
}

// Examples:
logBetweenStepper(5, 9, 1);

//that takes a number and prints every number from 0 to max
//(not inclusive) that is divisible by either 3 or 5, but not both.
function fizzBuzz(max) {
    for (let i = 0; i < max; i += 1) {
      if (i % 3 === 0 && i % 5 !== 0) {
        console.log(i);
      } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log(i);
      }
    }
  }
  // Examples:

  fizzBuzz(20);

  //function dynamicFizzBuzz that accepts three arguments
  //(max, num1, and num2). The function should return an array
  //containing positive numbers less than max that are divisible
  //by num1 or num2, but not both.
  let dynamicFizzBuzz = function(max, num1, num2) {
    let nums = [];
    for (let i = 1; i < max; i++) {
        if ((i % num1 === 0 || i % num2 === 0) && !(i % num1 === 0 && i % num2 === 0 )) {
            nums.push(i);
        }
    }
    return nums;
}

console.log(dynamicFizzBuzz(20, 3, 5));

//function leastCommonMultiple(num1, num2) that accepts two numbers as arguments.
//The functions should return the smallest number that is divisible by both num1 and num2.
let leastCommonMultiple = function(num1, num2) {
    for (let i = 1; i <= (num1 * num2); i++) {
        if (i % num1 === 0 && i % num2 === 0) {
            return i;
        }
    }
};

console.log(leastCommonMultiple(4, 6));

// function isPrime(number) that returns true if number is prime.
//Otherwise, false.A number is prime if it is only divisible by 1 and itself.
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

  //function isPerfectSquare that accepts a number as an argument.
  //The method should return a boolean indicating whether or not the
  //argument is a perfect square. A perfect square is a number that is the product of some number multiplied by itself. For example, since 64 = 8 * 8 and 144 = 12 * 12, 64 and 144 are perfect squares; 35 is not a perfect square.
  let isPerfectSquare = function(n) {
    for (let i = 1; i <= n; i++) {
        if (i * i === n) {
            return true;
        }
    }
    return false;
};

console.log(isPerfectSquare(1))


//The fibonacci sequence is a sequence of numbers whose first and second
//elements are 1. To generate further elements of the sequence we take
// the sum of the previous two elements. For example the first 6
//fibonacci numbers are 1, 1, 2, 3, 5, 8. Write a function fibonacci t
//that takes in a number length and returns the fibonacci sequence up to the given length
function fibonacci(length) {
    if (length === 0) {
        return [];
    } else if (length === 1) {
        return [1];
    }

    let seq = [1,1];

    while (seq.length < length) {
        let last = seq[seq.length - 1];
        let secondToLast = seq[seq.length - 2];
        let nextEle = last + secondToLast;
        seq.push(nextEle);
    }

    return seq;
}

console.log(fibonacci(0));

//The following function is named eCounter(word). The function takes in
// a string word and returns the number of e's in the word. The function
//counts both lowercase (e) and uppercase (E). Your job is to translate
//the following function to use a while loop instead of a for loop!
//If you forget the syntax for a while loop go back and check out the
//reading.
function eCounter(word) {
    let count = 0;
    let index = 0;

    while (index < word.length) {
      let char = word[index];
      if (char === "e" || char === "E") {
        count += 1;
      }
      index += 1;
    }

    return count;
  }

  console.log(eCounter("apple")); // => 1
  console.log(eCounter("appleapple")); // => 2
  console.log(eCounter("Appleee")); // => 3

  function aCounter(word) {

    let count = 0;
    for (let i=0; i < word.length; i++) {
      let char = word[i];
      if (char === "a" || char === "A") {
        count += 1;
      }

    }
    return count;
  };

  console.log(aCounter("apple")); // => 1
  console.log(aCounter("appleapple")); // => 2
  console.log(aCounter("aAapple")); // => 3

  //Write a function hasVowel(str) that takes in a string. The function
  //should return a boolean, true if the string contains at least one
  //vowel, false otherwise.

  let hasVowel = function(str) {
    let vowels = 'aeiou';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (vowels.includes(char)) {
            return true;
        }
    }

    return false;
};

console.log(hasVowel('dog')); // true
console.log(hasVowel('conventional')); // true
console.log(hasVowel('rhythm')); // false

//that takes in a string word and returns the number of vowels in the word.
function countVowels(word) {
    let count = 0;

    for (let i = 0; i < word.length; i++) {
      let char = word[i].toLowerCase();

      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        count += 1;
      }
    }

    return count;
  }

  console.log(countVowels("bootcamp")); // => 3
  console.log(countVowels("apple")); // => 2
  console.log(countVowels("pizza")); // => 2

  //Write a function pigLatinWord that takes in a word string and
  //translates the word into Pig Latin. For this problem use the
  //String.slice() method. The slice() method extracts a section of a
  //string and returns it as a new string, without modifying the original
  //string.

  function pigLatinWord(word) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];

    // Check if the word starts with a vowel
    if (vowels.includes(word[0].toLowerCase())) {
      return word + 'yay';
    } else {
      var firstVowelIndex = -1;

      // Find the index of the first vowel in the word
      for (var i = 0; i < word.length; i++) {
        if (vowels.includes(word[i].toLowerCase())) {
          firstVowelIndex = i;
          break;
        }
      }

      if (firstVowelIndex !== -1) {
        var prefix = word.slice(0, firstVowelIndex);
        var suffix = word.slice(firstVowelIndex);
        return suffix + prefix + 'ay';
      }
    }

// Return the original word if no vowel is found
    return word;
  }

  console.log(pigLatinWord("apple")); //=> "appleyay"
  console.log(pigLatinWord("eat")); //=> "eatyay"
  console.log(pigLatinWord("banana")); //=> "ananabay"
  console.log(pigLatinWord("trash")); //=> "ashtray"


  //Write a function abbreviate(word) that takes in a string arg.
  //The function should return a new string where all of its vowels
  //are removed.
  let abbreviate = function(word) {
    let vowels = "aeiou";
    let newWord = "";

    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!vowels.includes(char.toLowerCase())) {
            newWord += char;
        }
    }

    return newWord;
};

console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrdn'

function abbreviate(word) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = '';

    for (let i = 0; i < word.length; i++) {
      let char = word[i].toLowerCase();

      if (!vowels.includes(char)) {
        result += word[i];
      }
    }

    return result;
  }

  console.log(abbreviate("apple")); // => "ppl"
  console.log(abbreviate("banana")); // => "bnn"
  console.log(abbreviate("hello")); // => "hll"
  console.log(abbreviate("openai")); // => "pn"

  //that takes in a "compressed" string as an arg. A compressed string
  //consists of a character immediately followed by the number of times
  //it appears in the "uncompressed" form. The function should return the
  //uncompressed version of the string.
  let uncompress = function(str) {
    let newStr = '';

    for (let i = 0; i < str.length; i += 2) {
        let char = str[i];
        let num = Number(str[i + 1]);

        for (let times = 0; times < num; times += 1) {
            newStr += char;
        }
    }

    return newStr;
};

console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'

function uncompress(str) {
    var uncompressed = '';
    var i = 0;

    while (i < str.length) {
      var char = str[i];
      var count = Number(str[i + 1]);

      // Repeat the character count number of times
      for (var j = 0; j < count; j++) {
        uncompressed += char;
      }

      // Move to the next character pair
      i += 2;
    }

    return uncompressed;
  }

  console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
  console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
  console.log(uncompress('b1o2t1')); // 'boot'

 //function tripletTrue that accepts a string as an argument.
 //The function should return a boolean indicating whether or not the
 //the string contains three of the same character consecutively.
  let tripletTrue = function(str) {
    for (let i = 0; i < str.length - 2; i++) {
        if (str[i] === str[i + 1] && str[i + 1] === str[i + 2]) {
            return true;
        }
    }

    return false
};

console.log(tripletTrue('caaabb'));        // true
console.log(tripletTrue('terrrrrible'));   // true
console.log(tripletTrue('runninggg'));     // true
console.log(tripletTrue('bootcamp'));      // false
console.log(tripletTrue('e'));             // false

//function sillyString that accepts a word as an argument.
//The functions should return a new word where every vowel of the
//original word is followed by 'b' and that same vowel.
//For example, 'siren' would turn into 'sibireben'.
let sillyString = function(word) {
    let vowels = "aeiou";
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (vowels.includes(char)) {
        newWord += char + "b" + char;
      } else {
        newWord += char;
      }
    }
    return newWord;
};

console.log(sillyString('stop'));       // stobop
console.log(sillyString('that'));       // thabat
console.log(sillyString('can'));        // caban
console.log(sillyString('cats'));       // cabats
console.log(sillyString('italy'));      // ibitabaly
console.log(sillyString('scooter'));    // scobooboteber

//function moreDotLessDash that accepts a string as an argument.
//The function should return a boolean indicating whether or not the
//string contains more dots (.) than dashes (-).
function moreDotLessDash(str) {
    let dotCount = 0;
    let dashCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '.') {
            dotCount++;
        } else if (str[i] === '-') {
            dashCount++;
        }
    }
    return dotCount > dashCount;
}

console.log(moreDotLessDash('2-D arrays are fun. I think.'));           // true
console.log(moreDotLessDash('Morse code is great.'));                   // true
console.log(moreDotLessDash('.... . -.--'));                            // true
console.log(moreDotLessDash('.--. .-. --- --. .-. .- -- -- . .-.'));    // false
console.log(moreDotLessDash('high-flying acrobat.'));                   // false

// function hasThreeVowels that accepts a string as an argument.
//The function should return a boolean indicating whether or not the
//string contains at least three different vowels.
function hasThreeVowels(word) {
    const vowels = "aeiouAEIOU";
    return vowels.split('').filter(n => word.includes(n)).length >= 3;
  }

  console.log(hasThreeVowels('apple')); // true
  console.log(hasThreeVowels('hello')); // true
  console.log(hasThreeVowels('openai')); // true
  console.log(hasThreeVowels('xyz')); // false
  console.log(hasThreeVowels('cat')); // false

  function hasThreeVowels(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var vowelCount = 0;

    for (var i = 0; i < str.length; i++) {
      var char = str[i].toLowerCase();

      if (vowels.includes(char)) {
        vowelCount++;

        // If we have found at least three different vowels, return true
        if (vowelCount >= 3) {
          return true;
        }

        // Remove the vowel from the array to avoid counting it again
        vowels = vowels.filter(function(vowel) {
          return vowel !== char;
        });
      }
    }

    // Return false if less than three different vowels were found
    return false;
  }

  console.log(hasThreeVowels('apple')); // true
  console.log(hasThreeVowels('hello')); // true
  console.log(hasThreeVowels('openai')); // true
  console.log(hasThreeVowels('xyz')); // false
  console.log(hasThreeVowels('cat')); // false

  //function lastIndex that takes in a string and a character.
  //The function should return the last index where the character can
  //be found in the string.
  function lastIndex(str, char) {
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === char) {
            return i;
        }
    }
}

console.log(lastIndex("abca", "a"))        // 3
console.log(lastIndex("mississipi", "i"))  // 9
console.log(lastIndex("octagon", "o"))     // 5
console.log(lastIndex("programming", "m")) // 7

function lastIndex(str, char) {
    for (let i = str.length - 1; i >= 0; i--) {
      if (str[i] === char) {
        return i;
      }
    }
    return -1; // Character not found
  }

  console.log(lastIndex('hello', 'l')); // 3
  console.log(lastIndex('hello', 'o')); // 4
  console.log(lastIndex('hello', 'x')); // -1

//function doubleLetterCount that takes in a string and returns
//the number of times that the same letter repeats twice in a row.
  function doubleLetterCount(str) {
    let count = 0;

    for (let i = 0; i < str.length - 1; i++) {
      if (str[i] === str[i + 1]) {
        count++;
      }
    }

    return count;
  }

  console.log(doubleLetterCount("the jeep rolled down the hill"));  // 3
  console.log(doubleLetterCount("bootcamp")); // 1

//method caesarCipher that takes in a string and a number.
//The function should return a new string where every character
//of the original is shifted num characters in the alphabet.
  function caesarCipher(string, num) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newString = "";

    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        let oldIdx = alphabet.indexOf(char);
        let newIdx = oldIdx + num;
        let newChar = alphabet[newIdx % alphabet.length];
        newString += newChar;
    }
    return newString;
}

console.log(caesarCipher("apple", 1)); // "bqqmf"
console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
console.log(caesarCipher("zebra", 4)); // "difve"

function caesarCipher(str, num) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';

    for (let i = 0; i < str.length; i++) {
      let char = str[i];

      if (char.match(/[a-z]/i)) {
        const isUpperCase = char === char.toUpperCase();
        const charLower = char.toLowerCase();
        const newIndex = (alphabet.indexOf(charLower) + num) % 26;
        const shiftedChar = isUpperCase
          ? alphabet[newIndex].toUpperCase()
          : alphabet[newIndex];

        result += shiftedChar;
      } else {
        result += char;
      }
    }

    return result;
  }

  console.log(caesarCipher('abc', 1)); // 'bcd'
  console.log(caesarCipher('xyz', 2)); // 'zab'
  console.log(caesarCipher('Hello, World!', 5)); // 'Mjqqt, Btwqi!'

  //function vowelCipher that takes in a string and returns a new
  //string where every vowel becomes the next vowel in the alphabet.
  function vowelCipher(string) {
    const vowels = "aeiou";
    let newString = "";

    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (vowels.includes(char)) {
            let oldIdx = vowels.indexOf(char);
            let newIdx = oldIdx + 1;
            let newChar = vowels[newIdx % vowels.length];
            newString += newChar;
        } else {
            newString += char;
        }
    }
    return newString;
}


console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"

function vowelCipher(str) {
    const vowels = 'aeiou';
    const vowelMap = {
      a: 'e',
      e: 'i',
      i: 'o',
      o: 'u',
      u: 'a'
    };

    let result = '';

    for (let i = 0; i < str.length; i++) {
      let char = str[i];

      if (char.match(/[aeiou]/i)) {
        const isUpperCase = char === char.toUpperCase();
        const charLower = char.toLowerCase();
        const nextVowel = vowelMap[charLower];
        const shiftedChar = isUpperCase
          ? nextVowel.toUpperCase()
          : nextVowel;

        result += shiftedChar;
      } else {
        result += char;
      }
    }

    return result;
  }

  console.log(vowelCipher('hello')); // 'hillu'
  console.log(vowelCipher('openai')); // 'upina'
  console.log(vowelCipher('vowelcipher')); // 'wiwilciphir'
