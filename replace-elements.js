// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

const replaceElements = arr => {
    let max = 0

    for (let i = arr.length - 1; i >= 0; i--) {

        if (i==arr.length -1) {
            max = Math.max(arr[i], max)
            arr[i] = -1
        } else {
            let temp = arr[i]
            arr[i] = max
            max = Math.max(temp, arr[i])
        }
    }
    return arr
}

console.log(replaceElements([17,18,5,4,6,1])); // [18,6,6,6,1,-1]