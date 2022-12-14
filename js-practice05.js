const calculateYears = (P, I, T, D) => {
  let year = 0;
  while ((P < D, ++year)) P += P * I - P * I * T;
  return year;
};
// console.log(calculateYears(1000, 0.05, 0.18, 1100));

String.prototype.isUpperCase = function () {
  return this.toUpperCase() === this.toString();
};

// property('', 'isUpperCase', 'Must define the prototype isUpperCase');
// strictEqual('c'.isUpperCase(), false, 'c is not upper case');
// strictEqual('C'.isUpperCase(), true, 'C is upper case');
// strictEqual(
//   'hello I AM DONALD'.isUpperCase(),
//   false,
//   'hello I AM DONALD not is upper case'
// );
// strictEqual(
//   'HELLO I AM DONALD'.isUpperCase(),
//   true,
//   'HELLO I AM DONALD is upper case'
// );
// strictEqual(
//   'ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase(),
//   false,
//   'ACSKLDFJSgSKLDFJSKLDFJ not is upper case'
// );
// strictEqual(
//   'ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase(),
//   true,
//   'ACSKLDFJSGSKLDFJSKLDFJ is upper case'
// );

function oddOrEven(array) {
  let total = 0;
  for (const arr of array) {
    total += arr;
  }
  if (total % 2 === 0) {
    return 'even';
  }
  return 'odd';
}
// console.log(oddOrEven([0, 1, 5]));
// console.log(oddOrEven([0, 1, 3]));
// console.log(oddOrEven([1023, 1, 2]));

// Complete the square sum function so that it squares each number passed
// into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers) {
  let total = 0;
  for (const number of numbers) {
    total += Math.pow(number, 2);
  }
  return total;
}

// console.log(squareSum([1, 2]));
// 5
// console.log(squareSum([0, 3, 4, 5]));
// 50
// console.log(squareSum([]));
// 0

function reverseWords(str) {
  return str.split('').reverse().join('').split(' ').reverse().join(' ');
}

// console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
// // 'ehT kciuq nworb xof spmuj revo eht yzal .god'
// console.log(reverseWords('apple'));
// // 'elppa'
// console.log(reverseWords('a b c d'));
// // 'a b c d'
// console.log(reverseWords('double  spaced  words'));
// // 'elbuod  decaps  sdrow'

function move(position, roll) {
  let result = roll * 2 + position;
  return result;
}
// console.log(move(3, 6));

// ???????????????????? ??????????????, ?????? ?????????????? 3 ?????????? ???????????????? a, b, c.?????????????? ?????? ?????????????????? true,
//   ???????? ?????????? ???????????????????? ?????????????????? ???? ?????????????????? ?????????????? ??????????????,
//     ?? false ?? ???????? - ?????????? ???????????? ??????????????.
// (?? ?????????? ?????????????? ?????? ???????????????????? ?????????????? ???????? ???????????????? ???????????? 0, ?????? ???????? ????????????????????).

function isTriangle(a, b, c) {
  return a + b > c, a + c > b, b + c > a;
}

let number = a => a.map((v, i) => `${i + 1}: ${v}`);

// console.log(number([]));
// console.log(number(['a', 'b', 'c']));

function removeEveryOther(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 2) {
    newArr.push(arr[i]);
  }
  return newArr;
}

// console.log(removeEveryOther(['Keep', 'Remove', 'Keep', 'Remove', 'Keep']));

function powersOfTwo(n) {
  let result = [];
  for (let i = 0; i <= n; i += 1) {
    result.push(Math.pow(2, i));
  }
  return result;
}
// console.log(powersOfTwo(4));
const strCount = (str, letter) => str.split(letter).length - 1;
// console.log(strCount('Hello', 'l'));

const sequenceSum = (begin, end, step) => {
  let result = 0;

  for (let i = begin; i <= end; i += step) {
    result += i;
  }
  return result;
};
// console.log(sequenceSum(2, 6, 2));
// console.log(sequenceSum(1, 5, 1));
// console.log(sequenceSum(1, 5, 3));

// Now you have to write a function that takes an argument and returns the square of it.

function square(s) {
  return Math.pow(s, 2);
}

// console.log(addSquare(3));
// 9

function roundToNext5(n) {
  return Math.ceil(n / 5) * 5;
}

// console.log(roundToNext5(-1));
// console.log(roundToNext5(0));
// console.log(roundToNext5(2));
// console.log(roundToNext5(12));

// ???????????????? 1
function anagrams(word, words) {
  word = word.split('').sort().join('');
  return words.filter(function (a) {
    return word === a.split('').sort().join('');
  });
}

// console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));

// ???????????????? 2
function anagram(word1, word2) {
  word1 = word1.toLowerCase().split('').sort().join('').length;
  return word1 === word2.toLowerCase().split('').sort().join('').length;
}
// console.log(anagram('finder', 'Friend'));
// console.log(anagram('hello', 'bye'));

// ??????????????????

function palindrome(word) {
  // ???????????? ??????????????
  word = word.toLowerCase();
  // ???????????? ?? ???????????? - ???????????????????? ?????????? - ???????????????????? ?? ????????????
  let palindromeWord = word.split('').reverse().join('');
  // ????????????????
  if (word === palindromeWord) {
    return true;
  }
  return false;
}

// ----?????? ---
const palindromeTest = word => {
  word = word.toLowerCase();
  return word === word.split('').reverse().join('');
};

// console.log(palindrome('racecar'));
// console.log(palindrome('table'));

// FizzBuzz
function fizzbuzz(n) {
  let result = [];

  for (let i = 1; i <= n; i += 1) {
    if ((i % 3 === 0, i % 5 === 0)) {
      result.push(i);
    }
  }
  return result;
}
// console.log(fizzbuzz(5));

// ?????????? ??????????????

function findVowels(word) {
  let result = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (const w of word.toLowerCase()) {
    if (vowels.includes(w)) {
      result = w.split('').length + 1;
    }
  }
  return result;
}

// console.log(findVowels('hello'));
// console.log(findVowels('why'));

// ??????????????????
const fibonacci = num => {
  // const result = [0, 1];

  // for (let i = 2; i <= num; i += 1) {
  //   const prevNum1 = result[i - 1];
  //   const prevNum2 = result[i + 2];
  //   result.push(prevNum1 + prevNum2);
  // }
  // return result[num];
  if (num < 2) {
    return num;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};
// console.log(fibonacci(3));

function isUnique(str) {
  return new Set(str).size === str.length;
}

// function isUnique(str) {
//   let result = {};
//   for (let i = 0; i < str.length; i++) {
//     if (result[str[i]]) {
//       return false;
//     }
//     result[str[i]] = true;
//   }
//   return true;
// }

// console.log(isUnique('abcdef')); // -> true
// console.log(isUnique('1234567')); // -> true
// console.log(isUnique('abcABC')); // -> true
// console.log(isUnique('abcadef')); // -> false

function flatten(array) {
  const flattened = array
    .flatMap(arr => arr)
    .flatMap(arr => arr)
    .flatMap(arr => arr);
  return flattened;
}

// console.log(flatten([[1], [[2, 3]], [[[4]]]])); // -> [1, 2, 3, 4]
