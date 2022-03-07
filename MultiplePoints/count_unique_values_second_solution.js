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
    for (scout = 1; scout < arr.length; scout++) {
        if (arr[i] !== arr[scout]) {
            i += 1
            arr[i] = arr[scout];
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
