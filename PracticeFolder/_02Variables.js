// When to Use var, let, or const?
// 1. Always declare variables

// 2. Always use const if the value should not be changed

// 3. Always use const if the type should not be changed (Arrays and Objects)

// 4. Only use let if you can't use const

// 5. Only use var if you MUST support old browsers.



// Using 'var' keyword (Global or function scoped)
var age = 25;

// Using 'let' keyword (Block scoped, introduced in ES6)
let name = "John";

// Using 'const' keyword (Block scoped, constant value)
const PI = 3.14;

//Dynamic typing
let message = "Hello, World!"; // String
let count = 10; // Number
let isLogged = true; // Boolean
let data = null; // Null
let person = { firstName: "John", lastName: "Doe" }; // Object

//Reassigning
let counter = 0;
counter = counter + 1;

//Hoisting
// This happens because variable declarations using var are hoisted to the top of their scope.
console.log(city); // Output: undefined
var city = "New York";

// variable scope
function exampleFunction() {
    let localVar = "I'm a local variable";
    console.log(localVar);
}


exampleFunction(); // Output: I'm a local variable
// console.log(localVar); // This would result in an error since localVar is not accessible outside the function.



// A variable declared without a value will have the value undefined.


// var car="volvo"
// var car;
// When you use let to declare a variable, it is block-scoped. This means it is only accessible within the block in which it is declared. Attempting to declare a variable with the same name in the same block will result in a syntax error.
// However, with var, variables are function-scoped or globally scoped, not block-scoped. Redeclaring a variable with var within the same scope simply updates its value.