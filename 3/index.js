const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// Types

// Types behave differently

// Types represent the human defined values, and behaviors of those values of any given thing in a language.

// Addition is a behavior of a number.
// console.log(1 + 1);

// console.log([] + {});

// Concatenation is a behavior of strings.
// console.log('a' + 'a');

// Each type has an expected behavior with the plus symbol, how do we reason with that?
// console.log(1 + '1' - 1);

// Line 30 is pretty much garbage. That isnt really a fair thing to ask someone what the expected result is.

// Types in Programming
// Primitive Types
// Are computer defined.

// Complex Types
// Are human defined.

// Classical Languages (Fortran, C, C++)
// Primitive
// char
// int
// double
// float
// big num
// boolean
// strings (if you were lucky)
// pointer
// void

// Complex
// classes

// JavaScript Types
/*
 Primitves:
 string
 boolean
 number
 undefined
 null
 Symbol - Very new and very fancy

 Complex:
 object
*/

// Boolean
// True or False - It is the closest representation to binary that we can get. 0 or 1.

// Number
// Why does JS have just one number type and why do others have many?

// Our computers are quite literally 0's and 1's. So how do we represent numbers larger then that?

/*
0: 0,
1: 1,
2: 00,
3: 01,
4: 10,
5: 11,
6: 000,
*/

// To represent larger numbers, we use space, literal physical space. Sequences of 0's and 1's.
// The larger the number, the more space it takes up.
// The more complex the number the more space it takes up.

// 0.0003

// In classical languages space was of the utmost importance. Memory was expensive, we didnt have fancy harddrives, having even 256 kb harddrives was enough to power the apollo rocket.
// SO, to do that, the computer needs to be told an important thing in advance: it needs to know exactly how big a number CAN be.

// var num = 1;
// num = 1000000;

// Computers NEED TO RESERVE MEMORY FOR OUR VARIABLES IN ADVANCE.

// In classical languages, A: they saved space by informing a computer ahead of time of the kind of number, and B: this enabled them to write much larger numbers, because the language didnt have to worry about them not using space they asked for.

// int myNum = 1;
// float myDecimal = 1.112334;

// myNum = 1.21321;
// Error! Not enough memory in myNum.

// This has limitations on JS.
// When given a choice between convenience or performance JavaScript will always pick convenience.

// We can just say 'var' and write any number we want... Because we have a very low maximum and minimum number. In JS all numbers take up 32 bits, a signed 32 bit integer.

// console.log(Number.MAX_SAFE_INTEGER);

// JS is not used as a banking language, nor as something for science because of this limitation.

// Numbers perform their behaviors using something called operators - operators are not mathematical in nature in JS, it references any symbol we put between two values that forces them to interact.

// +
// -
// *
// /
// %

// There is also some utility features that JS provides for fancier math, those can be found as methods on the Math utility.

// console.log(Math.floor(3.45));

// If you want to learn more math methods, please read documentation!

// Strings
// Strings are actually just collections of characters. Javascript doesnt internally understand characters at all. Thats not javascripts problem, it stores the code of the character, and leaves understanding the character up to the environment. Environment refers to the thing running the javascript. If youre in the browser, its the browser, if youre in the terminal (like I am right now, running this code) it refers to node.

// console.log(('abc').charCodeAt(0));

// Strings are a very powerful tool because of the fact that they are a collection. Any 'collection' is referred to as an Iterable in JS. Iterables get special abilities like being able to use bracket access, as well as having helper methods.

const someString = 'hi there';

// for (let i = 0; i < someString.length; ++i) {
//   console.log(someString[i]);
// }

// .toUpperCase
// .toLowerCase
// substr
// slice
// many many more. Again, read the docs to learn lots.

// Undefined
// Undefined is something meant to be reserved for the computer. Undefined represents a lack of definition for a variable, not a placeholder for emptiness.

var someThing;

// console.log(someThing);

// Null
// Null only appears in JS, when we the programmer use it. It is a way for us to say programattically "I defined this variable to be used at a later time, I promise it will be used, otherwise why did I make it? But for now it is empty."

var laterVal = null;

// Whats the difference?
// JavaScript will often report errors with its methods, and its own internals by using undefined. If we are purposefully using it ourselves, we are making debugging significantly harder, because now our undefineds are getting mixed in with the languages. Null was made for us. If we are debugging and we run into null, we know that we the human forgot to assign value to something. If we see undefined, we know a method broke, or that something is not going well in a function.

// Symbol - Post ES6

// Symbols answer the question "How does something that has the same value, not reference something of the same value?"
// We created a way to make truly unique values that are never equal to anything but themselves.

// const firstVar = Symbol('a');
// const secondVar = Symbol('a');

// console.log(firstVar === firstVar);

// Objects
// Thats all of next week.

// Coercion and Truthiness

// Coercion is the process by which a value of one type is COERCED into becoming another type. This can happen anytime we use operators, or during any sort of test expression.

// Explicit Coercion

// Implicit Coercion
// console.log(1 + '1' - '1');

// Implicit Coercion is bad. Dont do it. Implicit coercion occurs when we use operators to coerce things without being specific in the type we expect.

// Explicit coercion is great. Its what you should always do. Explicit coercion is a process by which we force things to be of the type we expect as output.
// console.log(1 + parseInt('1') - parseInt('1'));

// console.log((1).toString() + '1');

// Theres something like 60 rules and 57 pages of description in the ECMAScript standards around how coercion should work in given scenarios, you should never read and never worry about it, and instead be smart, and explicitly coerce things to save yourself nightmares.

// Test Expressions will forcibly coerce any value given to them, into a boolean. Test expressions can coerce every value in JS to either true or false.
// Truthiness
// Truthiness is a term we use in JS to refer to the implicit boolean coerced value of any value in JS.

// I could teach you all the 9+ quadrillion truthy values in JS...
// Or, I can teach you the 6 falsy values in JS.

// 6 Falsy Values in JS
// 0
// ''
// null
// undefined
// false
// NaN


// if (NaN) {
//   console.log('Test expression successful!');
// } else console.log('Test expression failed!');

// Programmers who have worked in JS for too long, will often shorten much of their logic using truthiness

// As an example: Log all numbers divisble by 2

// for (let i = 0; i < 10; ++i) {
//   if (i % 2) console.log(`${i} is not divisible by 2.`);
//   else console.log(`${i} is divisible by 2`);
// }

// Truthy Falsy as a tool is not a beginners tool. We do not teach it so that you go and try to avoid using === everywhere. We teach it because you are going to run into it, in other peoples code, my code, etc. And you should understand exactly whats going on, people are using truthiness to make their code more concise.

// !

// The exclamation mark in JS inverts truthiness.

// console.log(!!{});

// && - means both things have to be truthy
// || - means either thing needs to be truthy

// dont use == ever
// == is asking JS to coerce the values to try to be equal

// console.log(1 == '1');

// Strict Equality e.g. ===
// Means they must be of the same value and the same type. This is the only equality that matters. Dont use loose equality.