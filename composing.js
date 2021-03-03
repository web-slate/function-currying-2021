let double = (x) => x * 2;
let triple = (x) => x * 3;
let quadruple = (x) => x * 4;

let pipe = (...funs) => (input) => funs.reduce((total, fn) => fn(total), input);

// arr.reduce((a, x) => x(a), initialInput)

let fun1 = pipe(double);
let fun2 = pipe(double, triple);
let fun3 = pipe(triple, triple);
let fun4 = pipe(double, triple, quadruple);

let n = 2;

console.log(fun1(n));
console.log(fun2(n));
console.log(fun3(n));
console.log(fun4(n));
