// Given an array of integers arr, return true if and only if it is a valid mountain array.

const validMountainArray = arr => {
    if (arr.length < 3) return false

    let increase = false
    let decrease = false

    for (i = 1; i < arr.length; i++) {
        if (arr[i] == arr[i-1]) return false

        if (arr[i] > arr[i-1]) {
            if (decrease == true) {
                return false
            }
            increase = true
        }

        if (arr[i] < arr[i-1]) {
            decrease = true
        }
    }
    return (increase == true && decrease == true) ? true : false
}

console.log(validMountainArray([3,5,5])); // false
console.log(validMountainArray([0,3,2,1])); // true