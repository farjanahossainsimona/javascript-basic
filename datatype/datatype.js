//test datatype(string, numbers, boolean, null, undefined)
const name = 'simona';
console.log(typeof name);

const age = 26;
console.log(typeof age);

const rating = 26.9;
console.log(typeof rating);

const is = true;
console.log(typeof is);

const x = null;
console.log(typeof x);

const y = undefined;
console.log(typeof y);

let z;
console.log(typeof z);

//datatype and Concatination
console.log('my name is ' + name + ' and i am ' + age)

// or template string
console.log(`my name is ${name} and i am ${age}`);

//or as variable
const ctest = `my name is ${name} and i am ${age}`;
console.log(ctest);

//length, uppercase, lowercase, certain word read ,split
const l = 'learning javascript is fun, continue';
console.log(l.length);
console.log(l.toUpperCase());
console.log(l.toLowerCase());
console.log(l.substring(9, 19));
console.log(l.substring(9, 19).toUpperCase());
console.log(l.split(''));
console.log(l.split(', '));

