const assert = require("assert");

/**
 * 
 * @param {Array<number>} arr 
 */
function CountUniqueValues(arr) {
    let first = 0;
    let second = 1;
    while(second < arr.length) {
        //I'll move from left to right and right to left
        //Each repetition I move to center
        //Each repetition I save the value in a 
        if(arr[first] === arr[second]){
            arr.shift()
        } else {
            first+=1;
            second+=1;
        }
    }

    return arr.length;
}

let result;

result = CountUniqueValues([1,1,1,1,2,2])
console.log(result)
assert.strictEqual(result, 2)

result = CountUniqueValues([])
console.log(result)
assert.strictEqual(result, 0)

result = CountUniqueValues([1,1,1,1,2,2,3,5])
console.log(result)
assert.strictEqual(result, 4)
