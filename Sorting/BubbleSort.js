function swap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function bubbleSort(arr) {
    let NoSwap;
    for (let i = arr.length; i > 0; i--) {
        console.log(arr)
        NoSwap = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
                NoSwap = false;
            }
        }
        if (NoSwap) break;
    }
    return arr
}

console.log(bubbleSort([4001, 122, 55, 61]))