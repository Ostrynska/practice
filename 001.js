function deleteNth(arr, x) {
  return arr.reduce((a, n) => {
    if (a.filter(y => y === n).length < x) a.push(n);
    return a;
  }, []);
}

// console.log(deleteNth([20, 37, 20, 21], 1));
// console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3));

function noSpace(x) {
  return x.split(' ').join('');
}
// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));

function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0) return [];

  var positive = 0;
  var negative = 0;

  for (var i = 0, l = input.length; i < l; ++i) {
    if (input[i] > 0) ++positive;
    else negative += input[i];
  }

  return [positive, negative];
}

// function countPositivesSumNegatives(input) {
//   if (input == null || input.length == 0) {
//     return [];
//   }

//   let positive = 0;
//   let negative = 0;

//   for (let i = 0, l = input.length; i < l; i += 1) {
//     if (input[i] > 0) {
//       positive += input[i];
//     } else {
//       negative += input[i];
//     }
//   }

//   return [positive, negative];
// }

// console.log(
//   countPositivesSumNegatives([
//     0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
//   ])
// );

function abbrevName(name) {
  let nameArr = name.split(' ');
  nameArr = `${nameArr[0].slice(0, 1)}.${nameArr[1].slice(0, 1)}`;
  return nameArr.toUpperCase();
}

// function abbrevName(name) {
//   return name
//     .split(' ')
//     .map(i => i[0].toUpperCase())
//     .join('.');
// }

// console.log(abbrevName('Sam Harris'));
// console.log(abbrevName('Patrick Feenan'));
// console.log(abbrevName('Evan Cole'));
// console.log(abbrevName('P Favuzzi'));
// console.log(abbrevName('David Mendieta'));

function twiceAsOld(dadYearsOld, sonYearsOld) {
  let result = dadYearsOld - sonYearsOld * 2;
  if (result < 0) {
    return (dadYearsOld - sonYearsOld * 2) / -1;
  }
  return result;
}

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   return Math.abs(dadYearsOld - 2 * sonYearsOld);
// }

// console.log(twiceAsOld(42, 21));

function removeChar(str) {
  return str.slice(1, -1);
}

// console.log(removeChar('eloquent'));

function alphabetPosition(text) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return text
    .toLowerCase()
    .split('')
    .filter(letter => {
      let index = alphabet.indexOf(letter);
      return index > -1;
    })
    .map(letter => alphabet.indexOf(letter) + 1)
    .join(' ');
}

const makeChangeColor = function () {
  const changeColor = function (color) {
    this.color = color;
    // console.log('changeColor -> this', this);
  };
  const sweater = {
    color: 'teal',
  };
  sweater.updateColor = changeColor;

  return sweater.updateColor.bind(sweater);
};
const sweatColor = makeChangeColor();
sweatColor('blue');

// let user ={
//   firstName: 'Poly',
// sayHi() {
//   let arrow = () => console.log(this.firstName);
//   arrow();
// }
// }
// user.sayHi();

const setRGB = () => {
  //const randomColor = Math.round(Math.random(0, 1) * 255);

  const red = Math.round(Math.random(0, 1) * 255);
  const green = Math.round(Math.random(0, 1) * 255);
  const blue = Math.round(Math.random(0, 1) * 255);

  return `rgb(${red},${green},${blue})`;
};

let str = '123';
// alert(typeof str); // string

let num = Number(str); // ???????? ???????????? 123

// alert(typeof num); // number

function find_average(array) {
  if (array.length == 0) return 0;
  let result = 0;
  for (num of array) {
    result += num;
  }
  return result / array.length;
}

// console.log(findAverage([1, 2, 3]));
// console.log(findAverage([1, 2, 3, 4]));
// console.log(findAverage([89, 74, 2, 90, 6, 51, 78, 17, 64, 56, 90, 10, 75]));

function solution(a, b) {
  // console.log(a.split('').slice(1, 3).join(''));
  if (a.split('').slice(-2).join('') === b) {
    return true;
  }
  return false;
}

console.log(solution('abc', 'bc'));
console.log(solution('abc', 'd'));
