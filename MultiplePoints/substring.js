const assert = require("assert")


/**
 * 
 * @param {string} str1 
 * @param {string} str2 
 */
function isSubsequence(str1, str2) {
    let p1 = 0
    for (let p2 = 0; p2 < str2.length; p2++) {
        if(str1[p1] === str2[p2]) {
            p1++
        } else {
            p1 = 0;
        }

        if(p1 > str1.length - 1) return true;
    }
    return false;
}

console.log(isSubsequence("hello", "hello world"))
assert.strictEqual(isSubsequence("hello", "hello world"), true);
assert.strictEqual(isSubsequence("hello", "hi, hello world"), true);
assert.strictEqual(isSubsequence("", "hello world"), true);
assert.strictEqual(isSubsequence("olleh", "hello world"), false);