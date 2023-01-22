const assert = require("assert")

/**
 * 
 * @param {Array<number>} arr 
 * @param {number} value 
 */
function BinarySearch(arr, value) {
    let left = 0;
    let right = arr.length - 1;
    let pivot = 0
    while (left <= right) {
        pivot = Math.floor((left + right) / 2)
        if (arr[pivot] === value) return pivot;
        else if (value > arr[pivot]) left = pivot + 1;
        else right = pivot - 1;
    }
    return -1
}

console.log(BinarySearch([1, 2, 3, 4, 5, 6], 1))
