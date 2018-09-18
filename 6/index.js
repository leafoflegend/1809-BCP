const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);




// Arrays: part 2
// .splice(startingIndx, howMany, [things to insert])
// splice mutates the array it is acting on

// let anArray = ['a', 'b', 'c', 'd']

// let somethingElse = anArray.splice(1, 2);

// console.log(somethingElse)
// console.log(anArray)


// splice can actually be used to 'simulate' a few array methods that we've probably seen already
// push, pop, shift, and unshift

// splice simulating push
// let anArray = ['a', 'b', 'c', 'd']

// anArray.splice(anArray.length, 0, 'e')

// console.log(anArray)

// splice simulating pop

// if the first argument (the index) in splice is negative, that is shorthand for writing lengthOfArray - value
// let aValue = anArray.splice(-1, 1)[0]
// console.log(aValue)


// splice simulating shift

// let anotherValue = anArray.splice(0, 1)[0]
// console.log(anotherValue)

// console.log("Our array is now:", anArray)


// splice simulating unshift

// anArray.splice(0, 0, 'first')

// console.log(anArray)

// splice is a very versatile method, and can be used in a variety of different situations



// .join
// join takes the elements in the array which it was called off of, and creates a string
// join takes one parameter, and that parameter is the 'delimiter' of the joined string
// if no parameter is given, then we get a default delimiter of a ,

// let anArray = ['a', 'b', 'c', 'd', 'e']

// console.log(anArray.join())

// .split
// split is a STRING method, that does the opposite of join
// split takes one parameter and 'splits' a string on that delimiter

// let someString = 'a***b***c***d***e'

// let someArray = someString.split('***')
// console.log(someArray)



// .concat
// concat is an array method that takes two arrays and appends all elements of one array onto the other one
// the array that the method is called off of is our "starting point," and then we add on everything passed into concat

// let anArray = ['a', 'b', 'c', 'd']

// let aNewArray = anArray.concat(['e', 'f', 'g', 'h'])

// console.log(aNewArray)

// // concat creates a NEW ARRAY, and does not mutate the original array
// console.log(anArray)




// Nested arrays
// we can put any values in an array, so why not arrays?

let anArray = [1, 2, ['a', 'b']]
let innerArray = anArray[2]
console.log(innerArray[0])


// When we see nested arrays, we will typically be dealing with x-y coordinate, coordinate matrices, linear algebra matrices, etc...
// typically we will see nested arrays that are uniform in size


let grid = []

let row = []

for (let i = 0; i < 10; i++) {
    row.push(1)
}

for (let i = 0; i < 10; i++) {
    grid.push(row.slice())
}


grid[3][4] = 'X'

console.log(grid)

function findsTreasure(grid, treasureMarker) {
    for (let i = 0; i < grid.length; i++) {
        let row = grid[i]
        for (let j = 0; j < row.length; j++) {
            if (row[j] === treasureMarker) {
                return [i, j]
            }
        }
    }
}

console.log(findsTreasure(grid, 'X'))










