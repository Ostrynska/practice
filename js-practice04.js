// 01 Shortest Word
// Simple, given a string of words, return the length of the shortest word(s).

function findShort(s) {
  var longestWord = s.split(' ').sort(function (a, b) {
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
  // console.log(time * 60);
  return Math.round(wPerHour);
}
console.log(litres(1.4)); // , 0, 'should return 0 litres');
console.log(litres(12.3)); // , 6, 'should return 6 litres');
