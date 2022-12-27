// ASSESSMENT 3: Coding Practical Questions with Jest

// const { it } = require("node:test")

// const { it } = require("node:test")
// const { describe } = require("yargs")

// const { exportAllDeclaration } = require("@babel/types")
// const { it } = require("node:test")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.


describe("fibArray" , () => {
  it("takes in a number greater than 2 and returns an array with the same # of characters in the Fibonacci sequence.", () => {
    const fibLength1 = 6
    const fibLength2 = 10
    expect(fibArray(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    // expect(fibArray(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 37, 55,])
  })
})

// Expected output: [1, 1, 2, 3, 5, 8]
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// RED - GOOD ERROR
// FAIL  ./code-challenges.test.js
// ● Test suite failed to run
//   ReferenceError: fibArray is not defined


// b) Create the function that makes the test pass.


  //Create a function named fibArray that takes in an inputVarible
const fibArray = (inputVariable) => {
  //Create an empty array to hold result
  const seqArr = [];

  //Create num1 & num2 variables with value of 1 each
  let num1 = 1;
  let num2 = 1;

  //Create a for loop that will iterate until it hits the number just before the inputVariable
  for (let i = 0; i < inputVariable; i++) {
    //Create a variable to store the result of the fibonacci math equation
    let nHolder = num1 + num2;

    //Push num1 into seqArr
    seqArr.push(num1);

    //Update num1 and num2 variables after push before next iteration
    num1 = num2;
    num2 = nHolder;
  }
  //Return seqArr holding all pushed values from loop
  return seqArr;
};


// GREEN - SUCCESS!
// PASS  ./code-challenges.test.js
// fibArray
//   ✓ takes in a number greater than 2 and returns an array with the same # of characters in the Fibonacci sequence. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.16 s, estimated 1 s
// Ran all test suites.


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.


describe("orderObject", () => {
  it("takes in an object and returns an array of numbers sorted from smallest the biggest", () => {
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    }
    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65
    }
    expect(orderObject(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(orderObject(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})

// Expected output: [15, 15, 20, 30, 30, 60, 90]
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// RED - GOOD FAILURE
// FAIL  ./code-challenges.test.js
// ● Test suite failed to run
//   ReferenceError: orderObject is not defined

// b) Create the function that makes the test pass.

// Create a function that takes in an object
const orderObject = (obj) => {
  // create an empty array to hold the result
  let orderedArray = []

  // create a for loop that takes each value in the object 
  for (let val in obj) {
  // add the object values to the empty orderedArray
    orderedArray.push(obj[val])
  // sorts the values from smallest to biggest
    orderedArray = orderedArray.sort((a, b) => a - b)
  }
  return orderedArray
}

// GREEN - SUCCESS!
// PASS  ./code-challenges.test.js
// orderObject
//   ✓ takes in an object and returns an array of numbers sorted from smallest the biggest (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.13 s, estimated 1 s

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("sumArray", () => {
  it("takes in an array as an argument and returns an array of the accumulating sum", () => {
    expect(sumArray(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(sumArray(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(sumArray(accountTransactions3)).toEqual([])
  })
})

// RED - GOOD ERROR 
// FAIL  ./code-challenges.test.js
//   ReferenceError: sumArray is not defined

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.

// Create a function that takes in an array
const sumArray = (array) => {
  // create a temporary array to hold the results
  let tempArray = []
  // create baseline sum variable
  let sum = 0
  // iterate through the array, one index at a time starting at the first index
  for (let i=0; i<array.length; i++) {
    // add the value in each index in the array to the sum variable
    sum = sum + array[i]
    // push new sum into the new temporary array
    tempArray.push(sum)
  }
  // display the new array
  return tempArray
}

console.log(sumArray(accountTransactions1));
console.log(sumArray(accountTransactions2));
console.log(sumArray(accountTransactions3));

// GREEN - SUCCESS!
// PASS  ./code-challenges.test.js
//   sumArray
//     ✓ takes in an array as an argument and returns an array of the accumulating sum (2 ms)
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.177 s, estimated 1 s