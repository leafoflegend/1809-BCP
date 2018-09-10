const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);


// Tidy Code

// What does bad code look like?

// Write a function that adds two nums together.

// function a(b,c)  { var d= c; var e=d+b; return e }; console.log(a(2, 2));

// How do you feel about that code I wrote?

// Difficult to read

// I dont really think that could be called code. Regardless of whether it functions or not.

// function a(b,c)  { var d= c; var e=d+b; return e }; console.log(a(2, 2));

// a is a non descriptive name for what this function is doing.
// function addTwoNums
// The point being every name whether a function or a variable should be as descriptive as possible about the data or the behavior it contains.

// We arent spacing between a(b,c)
// But we are spacing between (b,c)  {
// Consistent spacing. We should space everything consistently.
// Im going to always use one space for consistent spacing.

// function addTwoNums (b, c)

// Back to our first rule, what are b and c? Clearly not descriptive of what they are.

// function addTwoNums (numOne, numTwo)

// function a(b,c)  { var d= c; var e=d+b; return e }; console.log(a(2, 2));

// Inconsistent spacing, there are two spaces between )  { lets make it one

// function addTwoNums (numOne, numTwo) {

// Indentation
// Every time we open up a curly brace, we add a line, and everything from that line down, gets INDENTED by ONE UNIT OF INDENTATION.
// (im being vague about units of indentation on purpose, well get there.)

// function addTwoNums (numOne, numTwo) {
//  

// Now that weve added a new line and indented, we have var d - which honestly, is useless. The rule here is: 'no-useless-vars'
// Dont make variables without a need for them.

// var e is also unneccessary so we can remove that.

// Our new code is:

// function addTwoNums (numOne, numTwo) {
//   return numOne + numTwo;
// }

// semi-colons are actually a debated thing in JS, they are mostly not necessary for anything. I personally prefer to use semi-colons, a lot of people dont, this is a preference thing, the important thing is that we are consistent in our choice about using or not using them. Do not mix not using and using semi-colons.
// (technically its not optional, but modern javascript compilers do a lot for us)

// function addTwoNums (numOne, numTwo) {
//   return numOne + numTwo;
// }

// Indentation has a counter rule - every time we close a body with a } we put that bracket on its own line of code, and we de-indent by one unit of indentation.
// After every closing breakout we 'pad' a line - meaning we insert an empty line before the next piece of code.

// function a(b,c)  { var d= c; var e=d+b; return e }; console.log(a(2, 2));

function addTwoNums (numOne, numTwo) {
  return numOne + numTwo;
}

console.log(addTwoNums(2, 2));

// Tidy Code is about:
/*
  1. Attention to detail
  2. Maintenence - All code you write will eventually be maintained by someone else.
  > Treat your code as if it will always end up maintained by a serial killer who knows your address.
  3. That youre a professional. If you care about clean code, you care about code.
*/


// UNIT OF INDENTATION?
// Tabs vs Spaces
// Tabs actually arent made up of spaces.

console.log('\thi');








