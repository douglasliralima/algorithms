const assert = require("assert")

/**
 * 
 * @param {Array<number>} arr 
 * @param {number} value 
 */
function BinarySearch(arr, value) {
    let start = 0;
    let end = arr.length - 1;
    let middle = 0
    while(start <= end) {
        middle = Math.floor((end + start) / 2)
        if(arr[middle] === value) return middle;
        else if(value > arr[middle]) start = middle + 1;
        else end = middle - 1; 
    }
    return -1
}

console.log(BinarySearch([1,2,3,4,5,6], 1))
