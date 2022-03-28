const assert = require("assert")

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

/**
 * it start from one, we need to be increasing 1, 1, 2, 3, 5, 8
 * each time the helper function is called, we will increase the count respectivily and decrease the number of n
 * them, the base condition going to be when n === 0
 * 
 * How we gonna increase in this recursive way?
 * helper(4) + helper(3) + helper(2) + helper(1) + helper(0)
 * 
 * 3
 * 
 * @param {number} n 
 */
// function fib(n) {
//     if(n === 0) return 1;
//     const lastSum = fib(n)
//     return fib(n);
// }

function fib(n) {
    if(n === 1 || n === 2) return 1;
    let lastSum = 1;
    let lastValue = 0;
    for(let i = 1; i <= n; i++){
        lastValue = lastSum
        lastSum = lastSum + lastValue;
    }
    return lastSum;
}

assert.strictEqual(fib(4), 3)
assert.strictEqual(fib(10), 55)
assert.strictEqual(fib(35), 9227465)