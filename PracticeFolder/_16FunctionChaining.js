// Function chaining in JavaScript refers to the practice of calling multiple functions on the same object or value in a single statement, with each function operating on the result of the previous one

// Example object with chainable methods
const calculator = {
    value: 0,
    add(num) {
      this.value += num;
      return this; // Return the object itself for chaining
    },
    subtract(num) {
      this.value -= num;
      return this; // Return the object itself for chaining
    },
    multiply(num) {
      this.value *= num;
      return this; // Return the object itself for chaining
    },
    divide(num) {
      this.value /= num;
      return this; // Return the object itself for chaining
    }
  };
  
  // Usage of function chaining
  const result = calculator.add(5).multiply(2).subtract(3).divide(2).value;
  console.log(result); // Outputs: 3.5
  