console.log("hello brother");
   console.log("hello I am fine");
   //normal function in javascript
   function first(){
      console.log("this is the functional block code ");
   }

   var result=first();

   // document.getElementsByName("paragraph").innerhtml=result;
   //anonymous function 
   let second=function(){
      console.log("this is the anonymous function");
   }
   second();
   //Arrow functions
   let third=()=>{
      console.log("this is the arrow function");
   }
   third();
   //Higher order function
   function map(arr, callback) {
    let mappedArr = [];
    for (let i = 0; i < arr.length; i++) {
        mappedArr.push(callback(arr[i]));
    }
    return mappedArr;
}
let numbers = [1, 2, 3, 4, 5];
let squared = map(numbers, (num) => num * num);
console.log(squared);
//constructor function
function Person(name) {
    this.name = name;
}

let person1 = new Person("John");
let person2 = new Person("Jane");

console.log(person1.name); 
console.log(person2.name); 