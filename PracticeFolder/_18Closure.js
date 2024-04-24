function outerFunction() {
    const outerVariable = 'I am from the outer function';
  
    function innerFunction() {
      console.log(outerVariable); // Accessing outerVariable from the outer function
    }
  
    return innerFunction;
  }
  
  const closure = outerFunction(); // outerFunction has finished executing
  closure(); // Outputs: "I am from the outer function"
  
//   Jaise, agar aap ek outer function mein ek counter variable define karte hain aur uske andar ek inner function hai jo us counter ko badha kar return karta hai, toh jab aap us inner function ko baad mein bhi call karte hain, toh wo us counter ke value ko yaad rakhta hai jaise ek closure. Isse, aap multiple instances of that inner function create kar sakt

// e hain, har ek ka apna counter value rakh kar.

// Matlab agar ek function mein doosri function define hai aur uss doosri function mein uss pehli function ke variables ko access kiya jaata hai, toh yeh concept of closure use hota hai.
