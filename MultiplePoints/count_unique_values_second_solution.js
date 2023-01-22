const assert = require("assert");

/**
 * 
 * @param {Array<number>} arr 
 */
function CountUniqueValues(arr) {
    if (arr.length === 0) {
        return 0
    }

    let i = 0;
    for (j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            //We advance for a new position
            i += 1
            //We keep track the diffent ones in the array
            arr[i] = arr[j];
        }
    }

    return i + 1;
}

let result;

result = CountUniqueValues([1, 1, 1, 1, 2, 2])
console.log(result)
assert.strictEqual(result, 2)

result = CountUniqueValues([])
console.log(result)
assert.strictEqual(result, 0)

result = CountUniqueValues([1, 1, 1, 1, 2, 2, 3, 5])
console.log(result)
assert.strictEqual(result, 4)
