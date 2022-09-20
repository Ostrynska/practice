const calculateYears = (P, I, T, D) => {
  let year = 0;
  while (P < D && ++year) P += P * I - P * I * T;
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

// Реалізуйте функцію, яка приймає 3 цілих значення a, b, c.Функція має повертати true,
//   якщо можна побудувати трикутник зі сторонами заданої довжини,
//     і false у будь - якому іншому випадку.
// (У цьому випадку всі трикутники повинні мати поверхню більше 0, щоб бути прийнятими).

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
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
