function multiply(a, b, c) {
  return a * b * c;
}

// works based on recursion
function curry(func) {
  return function curried(...args) {
    console.log(args);

    if (args.length >= func.length) {
      return func.apply(this, args);
    }

    console.log('calling else');

    return function (...args2) {
      return curried.apply(this, args.concat(args2));
    };
  };
}

let curried = curry(multiply);

console.log(curried(1, 2, 3));
console.log(curried(1)(2, 3));
console.log(curried(1)(2)(3));
