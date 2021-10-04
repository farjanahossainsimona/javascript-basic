//Array-Variable that hold multiple values

//way-1 : array-constructor:new keyword and something after= constructor
const numbers = new Array(1, 2, 3);
console.log(numbers);

//way-2 
const languages = ['c', 'ruby', 'php', 'python'];
languages[3] = 'java';
languages.push('javascript');
languages.unshift('c#');
languages.pop();
console.log(languages);
console.log(languages[3]);
console.log(Array.isArray(languages));
console.log(languages.indexOf('ruby'));