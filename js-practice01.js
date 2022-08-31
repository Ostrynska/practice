
// 1. Multiply
//This code does not execute properly. Try to figure out why.

function multiply(a, b){
    a * b
  }

multiply = function (a, b) {
    return a * b;
  }

// 2. Return Negative
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num) {
    if ( num > 0 ) {
        return -num;
      }
      else {
        return num;
      }

// 3. Grasshopper - Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

const summation = function (num) {
    let result = 0;
    for (var i = 1; i <= num; i+= 1) {
        result += i;
    }
    
    return result;
  }

// 4. String repeat
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Example
// "Hello" -> "HelloHelloHelloHelloHello"

repeatStr = (n, s) => s.repeat(n)


// 5. Calculate BMI
// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function bmi(weight, height) {
    const result = weight/Math.pow(height,2) 
    
    if (result <= 18.5) {
      return "Underweight";
    } else if (result <= 25) {
      return "Normal";
    } else if (result <= 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
    
  }

// 6. Is he gonna survive?
// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a 
// couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry. 
// Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
// Return True if yes, False otherwise

function hero(bullets, dragons){
    return bullets >= dragons * 2
  }


// 7. Counting sheep...
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

//   For example,
  
//   [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true]
//   The correct answer would be 17.
  
//   Hint: Don't forget to check for bad values like null/undefined

const countSheeps = (arr) => arr.filter(Boolean).length;

//  var array1 = [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true ];
    
// Test.assertEquals(countSheeps(array1), 17, "There are 17 sheeps in total")


// 8. Even or Odd
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

const even_or_odd = (number) => {
    if (number % 2 === 0) {
      return "Even" 
      }
        return "Odd"
      }

// 9. Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// 35231 => [1,3,2,5,3]
// 0 => [0]

      function digitize(n) {
        return String(n)
        .split('')
        .map(Number)
        .reverse()
      }


// 10. Beginner Series #1 School Paperwork
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0

function paperwork(n, m) {

    if (m < 0 || n < 0) {
      return 0;
    }
    return m * n;
  }