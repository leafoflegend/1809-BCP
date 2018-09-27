const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);







// Higher order functions

// functional programming
// a programming paradigm, which emphasizes utlizing functions to perform tasks, and has the goal of minimizing side effects within your code
// Higher order functions are one of the major building blocks of functional programming


// function sayHello() {
//     console.log("hello");
// }


// console.log(sayHello)
// sayHello()

// functions may seem like they are different from other values in javascript, maybe even "special"
// but ultimately, part of what makes functions special, is that they are not really all that special

// Functions are 'first class objects' - they are just as special (or not) as other values

// we know we can put any values as elements in our array
// let anArray = [sayHello, "some string", "hello", 1234, ["inner array"], {name: "Alec"}]

// anArray[0]()

// let anObj = {
//     greeting: sayHello
// }

// console.log(anObj)


// We see that functions can be used anywhere (for the most part) that any other value can be used
// We also know that values can be passed into functions
// Therefore, functions can actually be passed into functions

// Higher order functions are functions which either:
// 1. take a function as a parameter
// 2. return a function from itself

// function sayHello() {
//     console.log("hello");
// }

// function logsAThing(aThing) {
//     if (typeof aThing === 'function'){
//         aThing()
//     } else {
//         console.log(`${aThing} is not a function`)
//     }
// }


// logsAThing("hello")

// logsAThing(['a', 'b', 'c'])

// logsAThing(sayHello)


// callback function
// When we pass a function into another functions, we refer to the function we are passing in as a callback function


// let anArray = [1, 2, 3, 4, 5, 6]


// const doMath = (arr, fn) => {
//     let transformedArr = []
//     for (let i = 0; i < arr.length; i++){
//         transformedArr.push(fn(arr[i]))
//     }
//     return transformedArr
// }



// const plusTwo = n => n + 2
// const timesThree = n => 3 * n

// doMath(anArray, plusTwo)

// console.log(doMath(anArray, timesThree))



// JavaScript has some nice built in higher order functions

// .forEach
// forEach is an array method that loops over an array and executes a function on each element
// it takes one parameter, and that parameter is a function
// the signature for that function (the argument) is:
// (element, [index, array])

// let anArray = ['a', 'b', 'c', 'd']

// function logsAnElement(elem, index) {
//     console.log(`${elem} is at index ${index}`)
// }

// anArray.forEach((elem, i) => {
//     console.log(elem)
//     return 1
// })



// .map
// map is a higher order function that 'maps' an array to a new array based on the function it is given
// The return value from our callback function determines what that element in the array is transformed to in our new array
// (elem, [index, array]) => mappedValue

// map does not mutate or change the array it was called off of
// it creates a new array


// let anArray = [1, 2, 3, 4, 5]

// let newArr = anArray.map(function (n) {
//     return n * n
// })

// console.log(newArr, anArray)


let presidents = [{name: 'clinton', year: 1992}, {name: 'bush', year: 2000}, {name: 'obama', year: 2008}, {name: 'trump', year: 2016}]

let names = presidents.map(element => element.name)

console.log(names)






