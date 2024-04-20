let fruits = ['apple', 'banana'];
fruits.push('orange'); // Adds 'orange' to the end of the array
console.log(fruits); // Output: ['apple', 'banana', 'orange']


let fruits1 = ['apple', 'banana', 'orange'];
let lastFruit = fruits1.pop(); // Removes 'orange' from the end of the array
console.log(lastFruit); // Output: 'orange'
console.log(fruits1); // Output: ['apple', 'banana']


let fruits2 = ['apple', 'banana', 'orange'];
let firstFruit = fruits2.shift(); // Removes 'apple' from the beginning of the array
console.log(firstFruit); // Output: 'apple'
console.log(fruits2); // Output: ['banana', 'orange']


let fruits3 = ['banana', 'orange'];
fruits3.unshift('apple'); // Adds 'apple' to the beginning of the array
console.log(fruits3); // Output: ['apple', 'banana', 'orange']


let fruits4 = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
let citrus = fruits4.slice(2, 4); // Returns ['orange', 'grape']
console.log(citrus);
// so it will return the shallow copy of a specific portion of array into the new array and not considering last element


let fruits5 = ['apple', 'banana', 'orange', 'grape'];
fruits5.splice(2, 1, 'mango', 'peach'); 
console.log(fruits5); // Output: ['apple', 'banana', 'mango', 'peach', 'grape']
// Removes 1 element at index 2 and adds 'mango' and 'peach'

let array=[1,2,3,4,5]
// concat: Joins two or more arrays and returns a new array
let newArray = array.concat([6, 7, 8]);
console.log(newArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

// copyWithin: Copies a sequence of elements within the array
array.copyWithin(0, 3, 4);
console.log(array); // Output: [4, 2, 3, 4, 5]

// entries: Returns a new Array Iterator object that contains the key/value pairs for each index in the array
let iterator = array.entries();
for (let [index, value] of iterator) {
  console.log(index, value);
}
//Here this iterator consist of all the element in the format of index as a key and value as its value


// every: Checks if all elements in the array pass the test implemented by the provided function
let allEven = array.every(num => num % 2 === 0);
console.log(allEven); // Output: false

console.log(array)
array.fill(0,1,3);
console.log(array); 
//Here in this case we are replacing the value of array from index 1 to 3 with 0


// filter: Creates a new array with all elements that pass the test implemented by the provided function
let evenNumbers = array.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [4, 0, 0, 4]


// find: Returns the value of the first element in the array that satisfies the provided testing function
let firstEven = array.find(num => num % 2 === 0);
console.log(firstEven); // Output: 4


// findIndex: Returns the index of the first element in the array that satisfies the provided testing function
let firstEvenIndex = array.findIndex(num => num % 2 === 0);
console.log(firstEvenIndex); // Output: 0


// flat: Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
let nestedArray = [1, [2, 3], [4, [5, 6]]];
let flatArray = nestedArray.flat(2);
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]

// forEach: Executes a provided function once for each array element
array.forEach(num => console.log(num * 2));
// Output:
// 8
// 0
// 0
// 8
// 10

console.log(array);
let valueIterator = array.values();
for (let value of valueIterator) {
  console.log(value);
}