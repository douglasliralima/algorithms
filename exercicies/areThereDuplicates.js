const assert = require("assert");

/**
 * 
 * @param  {...any} elements 
 */
function areThereDuplicates(...elements) {
    let el_count = {}
    for(let i of elements) {
        el_count[i] = el_count[i] ?  el_count[i] + 1 : 1 ; 
    }
    
    let duplicate = false
    for(let i of Object.keys(el_count)) {
        if(el_count[i] >= 2) {
            duplicate = true
        }
    }
    return duplicate;
}


assert.strictEqual(areThereDuplicates(1,2,3), false)

assert.strictEqual(areThereDuplicates(1,2,2), true)