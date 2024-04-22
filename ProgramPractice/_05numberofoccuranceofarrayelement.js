function countOccurrences(arr) {
    const occurrences = {};

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in occurrences) {
            occurrences[arr[i]]++;
        } else {
            occurrences[arr[i]] = 1;
        }
    }

    return occurrences;
}

const array = [1, 2, 3, 4, 3, 2, 5, 6, 1];
const occurrences = countOccurrences(array);

console.log("Occurrences of array elements:", occurrences);
