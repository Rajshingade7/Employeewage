//Higher order function
   
// In JavaScript, a higher-order function is a function that either takes one or more functions as arguments or returns a function as its result.
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