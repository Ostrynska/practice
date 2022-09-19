// 01 Shortest Word
// Simple, given a string of words, return the length of the shortest word(s).

function findShort(s) {
  const longestWord = s.split(' ').sort(function (a, b) {
    return a.length - b.length;
  });
  return longestWord[0].length;
}

// console.log(
//   findShort(
//     'turns out random test cases are easier than writing out basic ones'
//   )
// );

// 02 Keep Hydrated!
// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5

function litres(time) {
  let wPerHour = ((time * 60) / 60) * 0.5;
  return Math.floor(wPerHour);
}

// console.log(litres(1.4)); // , 0, 'should return 0 litres');
// console.log(litres(12.3)); // , 6, 'should return 6 litres');

// 03 List Filtering
// In this kata you will create a function that takes a list of non-negative integers
// and strings and returns a new list with the strings filtered out.
// filter_list([1, 2, 'a', 'b']) == [1, 2];
// filter_list([1, 'a', 'b', 0, 15]) == [1, 0, 15];
// filter_list([1, 2, 'aasf', '1', '123', 123]) == [1, 2, 123];

function filter_list(l) {
  const numbers = [];
  for (const item of l) {
    if (typeof item === 'number' && !isNaN(item)) {
      numbers.push(item);
    }
  }
  return numbers;
}

// console.log(filter_list([1, 2, 'aasf', '1', '123', 123]));

// 04 Highest and Lowest
// In this little assignment you are given a string of space
// separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"

function highAndLow(numbers) {
  numbers = numbers.split(' ').map(Number);
  // console.log(numbers);
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  return `${max} ${min}`;
}
// console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'));

// 05 Beginner Series #2 Clock
// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since
// midnight in milliseconds.
// Example:
// h = 0
// m = 1
// s = 1
// result = 61000
// Input constraints:
// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59
function past(h, m, s) {
  return (h * 3600 + m * 60 + s) * 1000;
}

// console.log(past(0, 1, 1));

// 06 Volume of a Cuboid
// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}
// console.log(Kata.getVolumeOfCuboid(1, 2, 2));

// 07 Vowel Count
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
  const vowelsCount = 0;
  for (index in str) {
    switch (str[index]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        vowelsCount++;
        break;
    }
  }
  return vowelsCount;
}
// console.log(getCount('abracadabra'));

// 08 How good are you really?
// 1. Написати ф-цію яка повертає чи ти здав тест в порівнянні з оцінками твого класу
// 2. Порахувати середню оцінку зданих робіт
// додати
// поділити на кількість
// порівняти з твоїми балами
// тру - якщо в тебе більше
// фолс - якщо в тебе менше
function betterThanAverage(classPoints, yourPoints) {
  let total = 0;
  let totalClass = classPoints.length;

  for (const point of classPoints) {
    total += point / totalClass;
  }

  if (total > yourPoints) {
    return false;
  }
  return true;
}

// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
function sumMix(x) {
  let total = 0;
  for (const item of x) {
    if (typeof item === 'string' || typeof item === 'number') {
      total += Number(item);
    }
  }
  console.log(total);
  return total;
}

// console.log(sumMix([9, 3, '7', '3']));

function reverseSeq(n) {
  let newArr = [];

  for (let i = n; i > 0; i -= 1) {
    newArr.push(i);
  }
  return newArr;
}
// console.log(reverseSeq(5));

function opposite(number) {
  if (number != 0) {
    number = number * -1;
  }
  return number;
}

// console.log(opposite(-12525220.3325));
// console.log(opposite(0));
// console.log(opposite(1));
// console.log(opposite(4.25));
// console.log(opposite(3.3333333));
function stray(numbers) {
  let uniqueNum = numbers[0];

  for (const number of numbers) {
    if (uniqueNum !== number) {
      uniqueNum = number;
      return uniqueNum;
    }
  }
  return 0;
}

// console.log(stray([1, 1, 8]));
// console.log(stray([1, 7, 1]));
// console.log(stray([17, 17, 3, 17, 17, 17, 17]));
function updateLight(current) {
  switch (current) {
    case 'green':
      return 'yellow';
      break;
    case 'yellow':
      return 'red';
      break;

    case 'red':
      return 'green';
      break;
  }
}
// console.log(updateLight('green'));
// console.log(updateLight('yellow'));
// console.log(updateLight('red'));
const countSheep = function (num) {
  let sheepCounting = ``;

  for (let i = 1; i <= num; i += 1) {
    let sheep = i;
    sheepCounting += `${sheep}` + ' sheep...';
  }
  return sheepCounting;
};

// console.log(countSheep(3));

function findNeedle(haystack) {
  if (haystack.includes('needle')) {
    let haystackPossition = haystack.indexOf('needle');
    return `found the needle at position ${haystackPossition}`;
  }
  return "Your function didn't return anything";
}

const haystack_1 = [
  '3',
  '123124234',
  undefined,
  'needle',
  'world',
  'hay',
  2,
  '3',
  true,
  false,
];
const haystack_2 = [
  '283497238987234',
  'a dog',
  'a cat',
  'some random junk',
  'a piece of hay',
  'needle',
  'something somebody lost a while ago',
];
const haystack_3 = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  8,
  7,
  5,
  4,
  3,
  4,
  5,
  6,
  67,
  5,
  5,
  3,
  3,
  4,
  2,
  34,
  234,
  23,
  4,
  234,
  324,
  324,
  'needle',
  1,
  2,
  3,
  4,
  5,
  5,
  6,
  5,
  4,
  32,
  3,
  45,
  54,
];

// console.log(findNeedle(haystack_1));
// // undefined, "Your function didn't return anything";
// console.log(findNeedle(haystack_1));
// // 'found the needle at position 3';
// console.log(findNeedle(haystack_2));
// // 'found the needle at position 5';
// console.log(findNeedle(haystack_3));
// // 'found the needle at position 30;
function min(list) {
  return Math.min(...list);
}

const max = function (list) {
  return Math.max(...list);
};

// console.log(min([-52, 56, 30, 29, -54, 0, -110]));
// // , -110);
// console.log(min([42, 54, 65, 87, 0]));
// // , 0);
// console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));
// // , 566);
// console.log(max([5]));
// // , 5);

function correct(string) {
  let stringNew = string;
  if (string.includes(('5' && '0' && '1') || ('1' && '0'))) {
    stringNew = string
      .replaceAll('5', 'S')
      .replaceAll('0', 'O')
      .replaceAll('1', 'I');
  }
  return stringNew;
}

// console.log(correct('L0ND0N'));
// console.log(correct('DUBL1N'));
// console.log(correct('51NGAP0RE'));
// console.log(correct('BUDAPE5T'));
// console.log(correct('PAR15'));

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

var pairs = { A: 'T', T: 'A', C: 'G', G: 'C' };

function DNAStrand(dna) {
  return dna
    .split('')
    .map(function (v) {
      return pairs[v];
    })
    .join('');
}

function sum(numbers) {
  let total = 0;

  for (const number of numbers) {
    total += number;
  }
  return total;
}

// function sum(numbers) {
//   return numbers.reduce((a, b) => a + b, 0);
// }

// console.log(sum([]));
// console.log(sum([1, 5.2, 4, 0, -1]));

// Count the number of divisors of a positive integer n.
// Random tests go up to n = 500000.

function getDivisorsCnt(n) {
  let count = 0;
  for (let i = 1; i <= n; i += 1) {
    if (n % i == 0) {
      count += 1;
    }
  }
  return count;
}

// getDivisorsCnt(1);
// // 1
// console.log(getDivisorsCnt(10));
// 4
// console.log(getDivisorsCnt(11));
// // 2
// console.log(getDivisorsCnt(54));
// 8
