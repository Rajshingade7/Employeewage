
// In JavaScript, an execution context is a concept that refers to the environment in which JavaScript code is executed. It consists of three main components:

// Global Execution Context: The default execution context in which JavaScript code is executed when it is not inside any function. It represents the global scope and includes global variables, functions, and objects.
// Function Execution Context: Each time a function is invoked, a new execution context is created for that function. This execution context includes the function's local variables, arguments, and a reference to its outer lexical environment (the scope chain).
// Eval Execution Context: In JavaScript, the eval() function can be used to execute code dynamically. When eval() is called, a new execution context is created for the evaluated code.




// Global variable
const globalVar = 'I am a global variable';

function globalFunction() {
  console.log(globalVar); // Accessing globalVar from inside the function
}

globalFunction(); // Outputs: "I am a global variable"

//Global execution context,





function outerFunction() {
    const outerVar = 'I am from outerFunction';
  
    function innerFunction() {
      console.log(outerVar); // Accessing outerVar from innerFunction
    }
  
    innerFunction(); // Call innerFunction
  }
  
  outerFunction(); // Outputs: "I am from outerFunction"
  

  eval('console.log("Hello from eval!")'); // Outputs: "Hello from eval!"
