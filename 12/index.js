const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);



// function sayHello() {
//     console.log("hello")
// }

// function runsAFunction() {
//     console.log("running a function")
//     sayHello()
//     console.log("After our function")
// }

// runsAFunction()


// JavaScript uses something called the 'call stack' to keep track of what functions are currently executing
// JavaScript is a single threaded language, so only one function (or line of code) can be executing at any time

// A stack is a data structure, in which the last thing placed in the stack is the first thing to come out of the stack
// last in - first out


// The callstack is the foundation for Recursion
// What is recursion?
// Recursion is when a function calls itself



// function recursion(){
//     console.log("Recursion!")
//     recursion()
// }

// This will cause an infinite recursion
// recursion()



// In order to avoid recursing forever, we need to define a base case
// our base case is what stops us from making another recursive call

// function countdown(n) {
//     console.log(n)
//     if (n === 0){
//         return;
//     }
//     countdown(n - 1)
// }

// countdown(5)


// almost everything that can be solved with recursion can also be solved with a loop, and vice versa



// fibonacci numbers:
// 1, 1, 2, 3, 5, 8, 13, ...

// function fibonacci(n){
//     if (n < 3){
//         return 1
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2)
// }

// console.log(fibonacci(5))





// find the maximum value in an array

// let anArray = [2, 5, 10, 1, 13, 7, -100]

// function maximum(arr) {
//     if (!arr.length){
//         return false
//     }
//     if (arr.length === 1){
//         return arr[0]
//     }
//     let possibleMax = arr.pop()
//     let recursiveMax = maximum(arr)
//     if (possibleMax > recursiveMax){
//         return possibleMax
//     }
//     return recursiveMax
// }

// console.log(maximum(anArray))


// always check that your base case works the way you intend it to before running recursive calls
// The first thing you want to do when dealing with recursion is try to visualize your base case and write it down



// google chrome has a very nice debugger
// the google chrome debugger allows us to visualize recursion and the call stack while a program is running

