const assert = require("assert")

/**
 * 
 * @param {Array<number>} arr 
 * @param {number} value 
 */
function LinearSearch(arr, value){
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === value) return i
    }
    return -1;
}

assert.strictEqual(LinearSearch([1,5,6,1,12], 12), 4)
assert.strictEqual(LinearSearch([1,5,6,1,15], 12), -1)