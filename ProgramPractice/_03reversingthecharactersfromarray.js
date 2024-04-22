function reverseCharactersInArray(arr) {
    const reversedArray = [];

    for (let i = 0; i < arr.length; i++) {
        // Check if the current element is a string
        if (typeof arr[i] === 'string') {
            // Split the string into an array of characters, reverse it, and join it back into a string
            const reversedString = arr[i].split('').reverse().join('');
            // Add the reversed string to the reversedArray
            reversedArray.push(reversedString);
        } else {
            // If the current element is not a string, add it to the reversedArray as is
            reversedArray.push(arr[i]);
        }
    }

    return reversedArray;
}

const originalArray = ["hello", 123, "world", true];
const reversedArray = reverseCharactersInArray(originalArray);

console.log("Original Array:", originalArray);
console.log("Reversed Array:", reversedArray);
