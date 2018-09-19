const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// Objects

// c(typeof {});
// c(typeof null);
// c(typeof []);

// Objects are any structure that contains key: value pairs. Even when, were not necessarily aware that the structure has any key value pairs...

// function someFunc() {
//   console.log('I ran!');
// }
// callable
// execution
// etc...

// someFunc.writtenBy = 'Eliot';

// c(someFunc.writtenBy);

// const newNumber = new Number(3);
// newNumber.writtenBy = 'Eliot';

// c(newNumber);

// c(newNumber + 1);
// c(newNumber.writtenBy);

// JavaScript is essentially made up of objects. It is the most powerful construct in all of JavaScript. An Array is a subtype of objects, it is in fact still an object.

// const someArray = [1, 2, 3];

// c(someArray.length);
// c(someArray.slice());
// c(someArray[0]);

// Arrays are really just objects, and we could if we felt like it, build them ourselves.

var ourArray = {
  0: '0th element',
  1: '1st element',
  2: '2nd element',
  length: 3,
  slice: function () {
    return Object
      .entries(this)
      .filter(([key, val]) => {
        const keyIsNum = parseInt(key);
        return !isNaN(keyIsNum);
      })
      .map(([key, val]) => val);
  },
  push: function (elem) {
    this[this.length - 1] = elem;
    ++this.length;
  }
}

// ourArray.push('3rd element');
// c(ourArray.length);

// Bracket Access
// c(ourArray[0]);
// Property Access
// c(ourArray.length);
// Methods
// c(ourArray.slice());

// If objects are better, why use arrays?
// Arrays are a convenience tool. Do we really want to write all of the methods and all of the behaviors of arrays every single time we want to use an ordered structure?
// No.

// Updating length.

// In POJO (Plain ol javascript object) -> we lose any concept of the size of an object, without performing some sort of calculation. In arrays, that calculation is done 'on the fly' so as we use the object it is updating that length accordingly.

// Arrays really are the best at any sort of structure where we NEED ORDER. When we need order arrays provide convenience methods, properties, and the magic length updating so that we can keep track of the size of the collection.

// Objects are better at something else entirely, namely two things:
// 1. Their malleability: we can modify objects to behave however we need them too.
// 2. For lookup times. Performance.

// All objects are defined with curly braces.

// e.g.
// const someObject = {};

// Within objects we can define two things a key (which is the thing on the left side of the :) and the value (the thing on the right side of the colon)
// const someObject = {
//   key: 'value',
// };

// there are no restrictions to what kind of value you can place at any given key.
// there is a restriction on what kinds of types are allowed for the key: only strings and symbols. The important thing is the string thing: anything we use for bracket access or for dot notation will get converted into a string.

// const arrLikeObj = {
//   '0': 'hi',
// }

// c(arrLikeObj['0'])

// Why are Objects useful?

// Performance - Dictionaries

// Find out if someone is at the party. One way, well store the guests as an array, another, well store the guests as an object.

// With arrays we dont give up the ability to find things when we dont know what they are. But, we sacrifice performance to do so.
const guestArray = ['Bob', 'Bill', 'Brenda', 'Bastion'];
// Keying -> We keyed our data,
// A literal key in a door. If you have the key, you get in the door. If you dont, you dont.
// With objects the deal is: "If you know how to find your own data (e.g. have the name already) then I can get it for you immedieatly, otherwise, I cant help you."
// Its relying on humans. A human has to know the key to get in the object with.
const guestObj = {
  'Bob': true,
  'Bill': true,
  'Brenda': true,
  'Bastion': true,
};

// Big O - The time complexity IN THE WORST CASE SCENARIO of any given algorithm.
// The worst case here is: "What if the person is the last person in the array"
// O(n) - Where O is an abritrary unit of time, and n is the length of the array.
// "This will take time * the number of elements"
// O(n) performance does not scale particurally well. If the collection gets very large (think Facebook, and all its users, we would perform billions of lookups.)

// O(1) -> The dream goal of any operation ever. That means that regardless of the size of the collection of data, we can always find it in one unit of time.
const findOutIfGuestIsAtTheParty = (personsName) => {
  // for (let i = 0; i < guestArray.length; ++i) {
  //   console.log(`${i} Search`);
  //   const currentGuest = guestArray[i];

  //   if (currentGuest === personsName) return true;
  // }

  // return false;

  return !!guestObj[personsName];
}

// c(findOutIfGuestIsAtTheParty('Bill'));

// Each primitive value is a specific address in memory, so whats happening is that the computer uses the address of the 4 characters in 'Bill' as a subaddress of whatever the address of the object is. In this sense think about the problem as walking into your own room to find your phone, versus walking into a strangers house with no directions being told to find a phone. The computer already knows about this data, where it is, and how you can refer to it, with an array, we kind of just say: 'hey go in that house and look for that thing'
// Pointers -> they arent publicly available to us in JS's API. They exist in all languages, its just a matter of whether we can manually touch them or not.
// Security.

// const accessObj = {
//   0: 'hi',
//   'another key': 'bye',
//   normalKey: 'hello again',
// }

// c(accessObj.normalKey);
// JavaScript wants to interpret this as a decimal, any . followed by a number is read as a decimal.
// c(accessObj.0);

// We can use bracket notation for special characters (like numbers) and for using variables
// c(accessObj[0]);

// const i = 'another key';

// c(accessObj[i])

// We use dot notation preferabbly for everything, but when we need to use a variable or a special character you will have to use the bracket notation.`

// How do we discover key: value pairs in objects that we may not have created? / How do we iterate through an object?

// for in loop

const accessObj = {
  0: 'hi',
  'another key': 'bye',
  normalKey: 'hello again',
}

// for (let key in accessObj) {
//   const value = accessObj[key];

//   console.log(`${key}: ${value}`);
// }

// For in loops are considered the norm because of other languages, and the fact that they are extremely common in them.
// In JS we do have alternatives.

// Object.keys
// Object.keys is a method that returns an array of all the keys in the object supplied as an argument.

// const keyArray = Object.keys(accessObj);
// c(keyArray);

// for (let i = 0; i < keyArray.length; ++i) {
//   const currentKey = keyArray[i];
//   const value = accessObj[currentKey];

//   console.log(`${currentKey}: ${value}`);
// }

// Object.values
// It is a method we can call on an object to get all the values within it into an array.

// const valueArr = Object.values(accessObj);
// c(valueArr);

// Object.entries
// It is a method that we can call on an object to get an array of arrays that consist of the key, value pair.`

// const entryArray = Object.entries(accessObj);
// c(entryArray);

// Most people prefer working with arrays.






