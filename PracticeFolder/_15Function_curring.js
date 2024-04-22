// Currying is a technique in JavaScript (and in functional programming in general) where a function with multiple arguments is broken down into a series of nested functions, each taking a single argument. This allows you to partially apply the function to its arguments one at a time.

// Regular function
function add(x, y) {
    return x + y;
  }
  
  // Curried version
  function curriedAdd(x) {
    return function(y) {
        console.log(y);
        console.log(x);
      return x + y;
    };
  }
  
  // Usage
  const addTwo = curriedAdd(2);
  console.log(addTwo(3)); // Outputs: 5