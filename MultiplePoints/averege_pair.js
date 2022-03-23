const assert = require("assert")

/**
 * 
 * @param {Array<number>} arr 
 * @param {number} median 
 */
function averagePair(arr, median){
    let begin = 0;
    let end = arr.length - 1;
    let possible_medium = 0
    while(begin < end) {
        possible_medium = (arr[begin] + arr[end]) / 2
        if(possible_medium === median) {
            return true;
        }
        else if(possible_medium > median){ 
            end--;
        }
        else{
            begin++;
        }
    }
    return false;
  }

assert.strictEqual(averagePair([1,2,3], 2.5), true)
assert.strictEqual(averagePair([1,2,3,3], 3), true)
assert.strictEqual(averagePair([1,2,3,3], 4), true)
assert.strictEqual(averagePair([], 2.5), false)

