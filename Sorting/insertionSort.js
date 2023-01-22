function swap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

/**
 * 
 * @param {Array<number>} arr 
 */
function insertionSort(arr) {
    /**
     * I need to see, for the unordered partion, we should
     * - Compare with the predecessors, until we find the place to insert it
     * - when we find the place to insert it, we should push everybody to right
     */
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j >= 1; j--) {
            console.log(arr, i, j, j - 1)
            if (arr[j] < arr[j - 1]) {
                swap(arr, j, j - 1);
            }
            else {
                console.log("ordered", arr, i, j, j - 1)
                break
            }
        }
    }
    return arr;
}

console.log(insertionSort([4001, 122, 55, 61, 5000]))