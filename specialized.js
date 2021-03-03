let greet = (message) => (name) => {
  return `${message} ${name}!`;
};

let helloGreet = greet('Hello');

console.log(greet('Good day')('Lucia'));
console.log(helloGreet('Peter'));

function handleMessage(message) {
  return message;
}

function handleName(name) {
  if (name === 'hello') {
    console.log('hello world');
  }
  return name;
}

let nameFn = handleName(username);
let messageFn = handleMessage(message);
