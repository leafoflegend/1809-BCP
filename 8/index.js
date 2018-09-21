const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);



// we know an object can store any type of value in Javascript
// that includes functions


// when we store a function on an object, we call this a method


// let anObj = {
//     name: "Alec",
//     sayHello: () => {
//         console.log("Hello")
//     }
// }


// console.log(anObj)


// anObj.sayHello()
// This pattern should look somewhat familiar, because we've already been utilizing object methods
// some of the methods we've seen so far include:
// Array methods: split, concat, pop, push, etc
// String methods: join...


// Using a variable is a little bit better than hardcoding values, but we can still do better
// let name = 'Alec'

// let anObj = {
//     name,
//     sayHello: (name = "anonymous user") => {
//         console.log(`Hello ${name}, my name is ${name}`)
//     }
// }


// console.log(anObj)


// anObj.sayHello()


// Javascript has a built in keyword call 'this'

// let name = 'Alec'

// let anObj = {
//     name,
//     printThis: function() {
//         console.log(this)
//     },
//     sayHello: function() {
//         console.log('Hello my name is ' + this.name)
//     }
// }


// console.log(anObj)


// anObj.sayHello()

// 'this' gives us access to the object containing the method from within itself
// You can think of 'this' as being like a context


// function sayHello() {
//     console.log("Hello, my name is " + this.name)
// }

// function createObject(name) {
//     return {
//         name,
//         sayHello: sayHello
//     }
// }

// let anObj = createObject('Alec')

// anObj.sayHello()


// let timesFive = {
//     value: 5,
//     product: function(n) {
//         return this.value * n
//     }
// }


// console.log(timesFive.product(4))
// console.log(timesFive.product(2))
// console.log(timesFive.product(10))


// This is really a very brief introduction into 'this'
// it lays the foundation for using it, but it is a very complex value/keyword/object











