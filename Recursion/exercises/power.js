const assert = require("assert");

function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base, exponent - 1);
}

assert.strictEqual(power(2,0), 1)
assert.strictEqual(power(2,2), 4)
assert.strictEqual(power(2,4), 16)