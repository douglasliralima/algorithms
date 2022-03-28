const assert = require("assert");

/**
 * 
 * @param {Array<number>} arr 
 */
function productOfArray(arr){
    if(arr.length === 0) return 0;

    function helper(arr) {
        if(arr.length === 0) return 1;
        return arr.pop() * helper(arr)
    }

    return helper(arr)
}

assert.strictEqual(productOfArray([1,2,3]), 6)
assert.strictEqual(productOfArray([1,2,3,10]), 60)
assert.strictEqual(productOfArray([]), 0)