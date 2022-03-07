

function anagram(str1, str2) {
    /**
     * Very classic frequency counter problem
     * We need to first create two maps, with the values and number of incidences of each value
     * Then we compare it, if they don't have the same number of frequency for a given letter, it is value
     * if the given ltter inst present on the other one, they return false as well
     */
    let str1_letters = {};
    let str2_letters = {};
    for (let letter of str1) {
        str1_letters[letter] = str1_letters[letter] === 0 || str1_letters[letter]  ? str1_letters[letter] + 1 : 0;
    }
    for (let letter of str2) {
        str2_letters[letter] = str2_letters[letter] === 0 || str2_letters[letter] ? str2_letters[letter] + 1 : 0;
    }

    for (let letter of Object.keys(str1_letters)) {
        if (!(letter in str2_letters)) {
            return false;
        }
        else if (str1_letters[letter] !== str2_letters[letter]) {
            return false;
        }
    }
    return true;
}

console.log(anagram('aazz', 'azaz'))
console.log(anagram("ROMA", "AMOR"))
console.log(anagram("cinema", "iceman"))
console.log(anagram("aaz", "azz"))
console.log(anagram("", ""))