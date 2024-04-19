// Variable Hoisting:
// When you declare a variable using var, the declaration is hoisted to the top of the scope, but the initialization remains in place. This means that the variable is accessible anywhere within its scope, even before the point where it is declared.
// javascript

// console.log(x); // Output: undefined
// var x = 10;
// console.log(x); // Output: 10
// This behavior can sometimes lead to confusion. Although var x = 10; is written after the first console.log(), x is hoisted to the top of its scope, resulting in undefined when accessed before initialization.

//
//Like this function hoisting is also happening in javascript 
greet(); // Output: Hello
function greet() {
    console.log("Hello");
}
// Here we have called greet function before its declaration 
// but it is still working fine 
// because of hoisting 
// javascript engine will move the function declaration to the top of the scope 
// so that it can be called before its declaration 
// this is called function hoisting