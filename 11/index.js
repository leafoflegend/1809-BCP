const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);




// const callOnEachElement = (arr, cb) => {
//   for (let i = 0; i < arr.length; ++i) {
//     const currentElement = arr[i];
//     cb(currentElement);
//   }
// }

// const testArr = [1, 2, 3];

// callOnEachElement(testArr, (e) => console.log(e));

// Yesterday we learned about passing functions into functions,
// Today, we learn about returning functions out of functions.

// Closure - JavaScript term
// HOF

// Our First Example of This

const createGreeter = () => {
  return () => {
    console.log('Hello!');
  }
}

// createGreeter();

// const pickAnElem = (aNum) => {
//   return (arr) => {
//     return arr[aNum];
//   }
// }

// const pickThirdElem = pickAnElem(2);

// const testArr = [1, 2, 3, 4];

// c(pickThirdElem(testArr));

// Scope

// let outerScope = 'outer';

// function someFunction() {
//   let innerScope = 'inner';
  
//   function deepFunction() {
//     c(innerScope);
//   }

//   deepFunction();
// }

// c(outerScope);

// someFunction();

// const createScope = () => {
//   const scopeData = 'this scopes data';

//   const useData = () => {
//     c(scopeData);
//   }

//   return useData;
// }

// // const useData = createScope();
// // useData();

// Privacy

// JavaScript was built originally to be strictly a client side language - why should anything be private if everyone can access it on their own computer?
// Lets not deal with it.

// class BankAccount {
//   private value = 1000000;

//   public showValue () {
//     console.log(value);
//   }
// }

// if later... we pass this instance over the wire (i.e. the internet) we dont pass the actual value with it, we only pass ways to view the value. If we passed the value along, then people could modify it... we dont want that.

// This doesnt exist in JS.

// Is closure. Which is when we use two tricks combined to create pseudo-private data. Those tricks are:
// 1. Functions can create their own private scope to be used TEMPORARILY, while they are running.
// 2. Functions can be returned out of scope, to another scope to be run elsewhere.

// When we combine those two things together we get magic:

// const createScope = () => {
//   const scopeData = 'this scopes data';

//   const useData = () => {
//     // Closure -> we have trapped a memory address in this function, that it can continue to refer to, long after the scope it is from has forgotten about it.
//     c(scopeData);
//   }

//   return useData;
// }

// const useData = createScope();
// useData();
// c(useData.scopeData);
// c(createScope.scopeData);

// function doGarbage() {
//   const garbage = true;

//   return null;
// }

// doGarbage();
// Line 134, a 'Garbage Collector' comes along, and deletes all the data that function needed in its body - this is to keep our computer humming along with lots of free memory...
// But on line 142, we have kept a reference to it, even though the original data was deleted... we returned a function that still remembers that place.

const createScope = () => {
  const scopeData = 'this scopes data';

  const useData = () => {
    // Closure -> we have trapped a memory address in this function, that it can continue to refer to, long after the scope it is from has forgotten about it.
    c(scopeData);
  }

  return useData;
}

// const rememberer = createScope();
// rememberer();

// Is in predefined ways... The only ways we can interact with scopeData are in the ways that function defines.

// BankAccount

const createBankAccount = (name) => {
  const bankAccount = {
    owner: name,
    value: 0,
  };

  const deposit = (amount) => {
    if (amount > 0) bankAccount.value += amount;
    console.log(`You have successfully deposited $${amount} into your account ${name}! You are now richer!`);
    console.log(`Current balance is now: $${bankAccount.value}`);
  }

  const withdraw = (amount) => {
    if (amount < bankAccount.value) bankAccount.value -= amount;
    console.log(`You have successfully withdrawn $${amount} from your account ${name}. Enjoy yourself!`);
    console.log(`Current balance is now: $${bankAccount.value}`);
  }

  return {
    deposit,
    withdraw,
  };
}

const alexBankAccount = createBankAccount('Alex');

alexBankAccount.deposit(100000);
alexBankAccount.withdraw(100);

// Pre-Defined behavior against data. Closure is the ability to privatize data and define how people interact with that data.































