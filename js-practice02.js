// 01 Reversed Strings
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
    return str.split('').reverse().join('');  
  }

// 02 You Can't Code Under Pressure #1
// Code as fast as you can! You need to double the integer and return it.

function doubleInteger(i) {
    return i * 2;
  }

// 03 L1: Set Alarm
// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever 
// you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the 
// circumstances under which you need to set an alarm). It should return false otherwise. 

function setAlarm(employed, vacation){
    return employed && !vacation;
      }

// 04 Will you make it?
// You were camping with your friends far away from home, but when it's time to go back, 
// you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, 
// your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if(mpg * fuelLeft >= distanceToPump) {
      return true
    } return false
  };

// 05 Function 3 - multiplying two numbers
// Implement a function called multiply, which takes two numbers and returns their product:

// multiply(2, 3) = 6
// multiply(0, 188) = 0
// multiply(85, 144) = 12240

function multiply () {
    let total = 1;
  
    for (const argument of arguments) {
      total *= argument;
    }
  
    return total;
  }

// 06 Grasshopper - Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter 
// value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.


function getGrade (s1, s2, s3) {
    let averageGrade = (s1 + s2 + s3) / 3;
    
    if (averageGrade >= 90) {
      return "A"
    } else if (averageGrade >= 80) {
      return "B"
    } else if (averageGrade >= 70) {
      return "C"
    } else if (averageGrade >= 60) {
      return "D"
    } else {
      return "F"
    }
  }

//   console.log(getGrade(95,90,93));
//   console.log(getGrade(100,85,96));
//   console.log(getGrade(92,93,94));

// console.log(getGrade(70,70,100));
// console.log(getGrade(82,85,87));
// console.log(getGrade(84,79,85));
// console.log(getGrade(89,89,90));

// console.log(getGrade(70,70,70));
// console.log(getGrade(75,70,79));
// console.log(getGrade(60,82,76));

// console.log(getGrade(65,70,59));
// console.log(getGrade(66,62,68));
// console.log(getGrade(58,62,70));

// console.log(getGrade(44,55,52));
// console.log(getGrade(48,55,52));
// console.log(getGrade(58,59,60));

// 07 Basic Mathematical Operations
// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2)
{
  if (operation === '+') {
       return value1 + value2
      }
  else if (operation === '-') {
      return value1 - value2
  }
    else if (operation === '*') {
      return value1 * value2
  }
    else  {
      return value1 / value2
  }
}

//OR
// function basicOp(o, a, b) {
//     return eval(a+o+b);
//   }
//OR
//   function basicOp(operation, value1, value2)
// {
//   var cases = {
//     '+': value1 + value2,
//     '-': value1 - value2,
//     '*': value1 * value2,
//     '/': value1 / value2
//   };
//   return cases[operation]
// }

// 08 Will there be enough space?
// The Story:
// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. 
// With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! 
// He wants you to write a simple program telling him if he will be able to fit all the passengers.

// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// Usage Examples:
// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

// function enough(cap, on, wait) {
//     let spaceEnough = on + wait - cap;
//     let totalPassangersCanTake = ;
//     let totalPassangersWait = on - wait;

//     if(totalPassangersCanTake === 0 || totalPassangersWait === 0 ) {
//       return `He can fit all ${wait} passengers`
//     } 
//       return `He can't fit ${totalPassangersWait} of the ${wait} waiting`
//   }
function enough(cap, on, wait) {
    if (on + wait < cap){
    return 0;
    } 
    return (on + wait) - cap;
  }
  //     let spaceEnough = on - wait;
  
  //     if(spaceEnough === 0 ) {
  //       return `He can fit all ${wait} passengers`
  //     } 
  //       return `He can't fit ${spaceEnough} of the ${wait} waiting`
  //
//   console.log(enough(10, 5, 5));
//   console.log(enough(100, 60, 50));
//   console.log(enough(20, 5, 5));
//   console.log(enough(81, 59, 47));
//   console.log(enough(100, 71, 40));

// 9 Century From Year
// The first century spans from the year 1 up to and including the year 100, 
// the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function century(year) {
    return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
  }

  function century(year) {
    var century = 0;
    
    for(var i = 0; i < year; i++) {
      if(i % 100 == 0) {
        century++;
      }
    }
    return century;
  }

//   10 Function 1 - hello world
Description:
// Make a simple function called greet that returns the most-famous "hello world!".

// Style Points
// Sure, this is about as easy as it gets. But how clever can you be to create the most creative 
// hello world you can think of? What is a "hello world" solution you would want to show your friends?

function greet() {
    return `hello world!`
  }


// 11 Convert a String to a Number!
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

const stringToNumber = function(str){
    return Number.parseInt(str);
  }


// 12 Count by X
// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).
var z = [];
for (i = 1; i <= n; i++) {
    z.push(x * i);
}
return z;
}