let multiply = (a, b, c) => {
  return a * b * c;
};

let multiply_curried = (a) => (b) => (c) => {
  return a * b * c;
};

let res = multiply(1, 2, 3);
console.log(res);

let res2 = multiply_curried(1)(2)(3);
console.log(res2);
