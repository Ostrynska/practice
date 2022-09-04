// 01 DNA to RNA Conversion
// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. 
// It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from 
// DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be 
// valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

// function DNAtoRNA(dna) {
//     return dna.spl'T').join('U')
// }

// 02 Sum of positive
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

    function positiveSum(arr) {
        let total = 0;    
          for (let i = 0; i < arr.length; i+=1) {   
            if (arr[i] > 0) {                   
              total += arr[i];                 
            }
          }
          return total;                        
        }
  

//   console.log(positiveSum([1,2,3,4,5]))
//   console.log(positiveSum([1,-2,3,4,5]))
//   console.log(positiveSum([-1,2,3,4,-5]))

// 03 Find the first non-consecutive number
// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all 
// consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null

function firstNonConsecutive (arr) {
    for(let i = 0; i < arr.length - 1; i++) {
     if(arr[i] + 1 !== arr[i + 1]) {
       return arr[i + 1];
       }
    }
     return null;
   }
//    firstNonConsecutive ([1,2,3,4,6,7,8]) 
   
//    04 Total amount of points
// Our football team finished the championship. The result of each match look like "x:y". 
// Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our 
// team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function points(games) {
    let total = 0;
    games.map(game => {
      if (game[0] === game[2]) {
        total += 1;
      } else if (game[0] > game[2]) {
        total += 3;
      }
    
    return total;
  }

// function points(games) {
//     let total = 0;
//     games.forEach((game) => {
//         if(game[0] = game[2]) {
//             total = games.length * 1
//             return total;
//         }
//         else if(game[0] < game[2]) {
//             total = games.length * 0
//             return total;
//         } return total;
//     
// }

// console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]));

// 05 Convert boolean values to strings 'Yes' or 'No'.
// Complete the method that takes a boolean value and return a 
// "Yes" string for true, or a "No" string for false.
function boolToWord( bool ){
    if (bool === true){
      return 'Yes';
    } return 'No';
  }

//   06 Grasshopper - Messi goals function
// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals 
// in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
   }


// 07 Sum without highest and lowest number
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, 
// even if there are more than one with the same value.
// Mind the input validation.
// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array,
// or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(array) {
  if (array == null || array.length <= 2) {
    return 0
  }
  let max = Math.max.apply(Math, array);
  let min = Math.min.apply(Math, array);
  let sum = 0;
  
  for (let i = 0; i < array.length; i+=1) {
    sum += array[i];
}
  return sum - max - min
}



// console.log(sumArray([ 6, 2, 1, 8, 10 ]));
// console.log(sumArray([ 3, 5 ]));

// 08 Invert values
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.


function invert(array) {
  return array.map(el => -el);
}

// console.log(invert(([1,2,3,4,5])));;
// invert(([1,-2,3,-4,5]));
// invert(([]));
// invert(([0]));

// 09 The Feast of Many Beasts
// All of the animals are having a feast! Each animal is bringing one dish. 
// There is just one rule: the dish must start and end with the same letters as the animal's name. 
// For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false 
// to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. 
// beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
  if(beast[0] === dish[0] && beast.endsWith(dish.slice(-1))) {
    return true
  } return false
}


// console.log(feast("great blue heron", "garlic naan"));
// console.log(feast("chickadee", "chocolate cake"));
// console.log(feast("brown bear", "bear claw"));

// 10 MakeUpperCase
// Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
  return str.toUpperCase()
}

// console.log(makeUpperCase("hello"));

// 11 Remove exclamation marks
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
const removeExclamationMarks = (s) => s.replaceAll('!', '');

// function removeExclamationMarks(s) {
//   return s.spl'!').join('');
// }


// console.log(removeExclamationMarks("Hello World!"));
// console.log(removeExclamationMarks("!!!!!!gght World!"));
// console.log(removeExclamationMarks("hbfcgYkknl!PgkoclAgsi PVsuTbEWir!jLOnRuYvTE"));

// 12 Convert a string to an array
// Write a function to split a string and convert it into an array of words.

function stringToArray(string){
  const arr = string.spl' ');
  return arr
}


// console.log(stringToArray("I love arrays they are my favorite"));

// 13 Area or Perimeter
// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

const areaOrPerimeter = function(l , w) {
  if (l === w) {
    return l * w;
  } return (l + w) * 2;
};


// console.log(areaOrPerimeter(4 , 4));  
// 16
// console.log(areaOrPerimeter(6 , 10));
// 32


// 14 Convert a Number to a String!
// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

function numberToString(num) {
  return num.toString()
}

// console.log(numberToString(67));

// 15  Rock Paper Scissors!

// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
  if (p1 === p2) return 'Draw!';
  if (p1 === 'rock' && p2 === 'scissors') return 'Player 1 won!';
  if (p1 === 'scissors' && p2 === 'paper') return 'Player 1 won!';
  if (p1 === 'paper' && p2 === 'rock') return 'Player 1 won!';
  return 'Player 2 won!';
};

// // 'player 1 win'
//   console.log(rps('rock', 'scissors'));
//   console.log(rps('scissors', 'paper'));
//   console.log(rps('paper', 'rock'));


// // 'player 2 win'
//   console.log(rps('scissors', 'rock'));
//   console.log(rps('paper', 'scissors'));
//   console.log(rps('rock', 'paper'));


// // 'draw'
//   console.log(rps('rock', 'rock'));
//   console.log(rps('scissors', 'scissors'));
//   console.log(rps('paper', 'paper'));


