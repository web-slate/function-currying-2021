function multiply(a, b, c) {
  return a * b * c;
}

function multiply_curried(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

let res = multiply(1, 2, 3);
console.log(res);

let mc1 = multiply_curried(1);
let mc2 = mc1(2);
let res2 = mc2(3);
console.log(res2);

let res3 = multiply_curried(2)(2)(3);
console.log(res3);

function higherOrderFunction(a, cb) {
  var b = a * 5;
  return cb(b);
}
