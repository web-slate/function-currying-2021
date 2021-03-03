let hasNChars = (n = 3) => (word) => word.length === n;

let words = [
  'forest',
  'gum',
  'pencil',
  'wonderful',
  'grace',
  'table',
  'lamp',
  'biblical',
  'midnight',
  'or',
  'perseverance',
  'adminition',
  'redemption',
  'dog',
  'no',
];

// some -> return true based on condition becoming true of any one of elements of array

let res = words.some(hasNChars(2), words);
// words.some((word) => word.length === 2, words)
console.log(res);

let res2 = words.some(hasNChars, words);
// words.some((word) => word.length === 3, words)
console.log(res2);
