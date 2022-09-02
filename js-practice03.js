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
//     return dna.split('T').join('U')
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
    });
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
//     });
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