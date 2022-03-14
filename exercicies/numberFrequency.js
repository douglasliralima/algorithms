const assert = require("assert");

/**
 * 
 * @param {number} n1 
 * @param {number} n2 
 */
function sameFrequency(n1, n2) {
    if(!n1 || !n2) {
        return false;
    }
    
    n1_map = {}
    for(i of n1.toString()) {
        n1_map[i] = n1_map[i] ? n1_map[i]  + 1 : 1;
    }

    for(i of n2.toString()) {
        if(!n1_map[i]) {
            return false;
        } else if (n1_map[i] < 0) {
            return false;
        } else {
            n1_map[i]--;
        }
    }

    for(i of Object.keys(n1_map)) {
        if(n1_map[i] > 0){
            return false;
        }
    }
    console.log(n1_map)
    return true
}

function sameFrequencyTeacher(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false;
    
    let countNum1 = {};
    let countNum2 = {};
    
    for(let i = 0; i < strNum1.length; i++){
      countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }
    
    for(let j = 0; j < strNum1.length; j++){
      countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }
    
    for(let key in countNum1){
      if(countNum1[key] !== countNum2[key]) return false;
    }
   
    return true;
  }

assert.strictEqual(sameFrequency(182, 281), true);
assert.strictEqual(sameFrequency(3589578, 5879385), true);
assert.strictEqual(sameFrequency(22, 222), false);
assert.strictEqual(sameFrequency(222, 22), false);
assert.strictEqual(sameFrequency(34, 14), false);
assert.strictEqual(sameFrequency(222), false);
assert.strictEqual(sameFrequency(), false);
