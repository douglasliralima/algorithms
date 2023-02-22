function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

/**
 * 
 * @param {Array<number>} arr1 
 * @param {Array<number>} arr2 
 */
function mergeSort(arr) {
    /**
     * We should halve the array until we got a array with value 1 or lesser
     * with this array, merge it with the next one
     */
    let i = Math.floor(arr.length / 2);
    const newArr = arr.splice(0, i);
    console.log(newArr, arr, i)

    if (arr.length <= 1 && newArr.length <= 1) return merge(arr, newArr);
    else {
        const merged = merge(mergeSort(newArr), mergeSort(arr))
        console.log(merged);
        return merged
    }
}

console.log(mergeSort([1, 3, 2, 5, 4]), [1, 2, 3, 4, 5])