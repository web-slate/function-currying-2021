let multiply_curried = (a) => (b) => (c) => {
  return a * b * c;
};

// let multiply = (a, b, c) => multiply_curried(a)(b)(c);

function multiply(a, b, c) {
  const result = multiply_curried(a)(b)(c);
  return result;
}

let res = multiply(2, 3, 4);
console.log(res);

let res2 = multiply_curried(2)(3)(4);
console.log(res2);
