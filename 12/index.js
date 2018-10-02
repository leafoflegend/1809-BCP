const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);


// Recursion I - Asking you to solve iterative problems using recursion.
// Recursion is an alternative to iteration.
// Recursion is not superior - it just solves some subset of problems in a more sensible way, and iteration solves other problems in a more sensible way.

const countdown = (ceiling) => {
  if (ceiling <= -25000) console.log('Liftoff!');
  else {
    console.log(ceiling);
    countdown(ceiling - 1);
  }
}

// We arent dealing with depth...
// const countdown = ceiling => {
//   for (let i = ceiling; i > 0; --i) {
//     console.log(i);
//   }
//   console.log('Liftoff!');
// }

// countdown(5);

// const flatArray = [1, 2, 3, 4, 5];

const deepArray = [
  1,
  [
    2,
    3,
    [
      4,
      5,
    ],
    6,
  ],
  7,
  [
    8,
    [
      9,
    ],
  ],
]

// Sum all numbers in the array...

// const sumAllArrays = (deepArr) => {
//   let sum = 0;

//   for (let i = 0; i < deepArr.length; ++i) {
//     const firstElem = deepArr[i];

//     if (Array.isArray(firstElem)) {
//       const secondArray = firstElem;

//     } else {
//       sum += firstElem;
//     }
//   }
// }

// for (let j = 0; j < secondArray.length; ++j) {
//   const secondElem = secondArray[j];

//   if (Array.isArray(secondElem)) {
//     const thirdArray = secondElem[j];
//     // ...
//   } else {
//     sum += secondElem;
//   }
// }


// for (let i = 0; i < deepArr.length; ++i) {
//   const firstElem = deepArr[i];

//   if (Array.isArray(firstElem)) {
//     const secondArray = firstElem;
//     // Code above...
//   } else {
//     sum += firstElem;
//   }
// }

// Iteration gets ugly...

// const sumAllArrays = (deepArr) => {
//   let sum = 0;

//   for (let i = 0; i < deepArr.length; ++i) {
//     const elem = deepArr[i];

//     if (Array.isArray(elem)) {
//       sum += sumAllArrays(elem);
//     } else {
//       sum += elem;
//     }
//   }

//   return sum;
// }

// c(sumAllArrays(deepArray));

// Recursion is not something you need to use frequently.
// It solves a very specific subset of problems well - for loops and iteration in general - continue to be the most frequently used pattern in all of programming.

// If a problem seems easier to solve with a for loop - solve it with a for loop.
// If it seems easier to solve with recursion, use recursion.
// And sometimes, like above, I use both.

// Stack

// Order
// FIFO Structures
// First in First out.
// You at a store buying stuff.

// Recursion is not FIFO, it is FILO.
// First in, last out.

// A stack is what it sounds like - a stack of pancakes for example...
// So when we make pancakes, we often cook one (maybe two or three) at a time, but, we make a lot more then that.
// Which pancake gets eaten first?

// The first pancake cooked, is thrown onto a plate for later consumption...
// Then we cook another pancake, when its done, we throw it onto the pancake we previously cooked...
// Then we cook another, it goes on top again, and again, and again,
// So now we have

/*
=== Hot ===
=== Warm ===
=== Lukewarm ===
=== Cold ===
*/

// When we go to eat the pancakes, we dont take the pancakes from the bottom first, we take them from the top.
// Pancake Stacks are a real life FILO structure - the First pancake cooked, is the last pancake eaten.

// let total = 0;

// for (let i = 0; i < someLength; ++i) {
//   const currentElem = someLength[i];

//   if (isSomeObject(currentElem)) {
//     total += doRecursiveThing(currentElem);
//   } else {
//     total += currentElem;
//   }
// }

// return total;

