// Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.
// Note that elements beyond the length of the original array are not written.
// Do the modifications to the input array in place, do not return anything from your function.

const duplicateZeros = arr => {

    for (i=arr.length; i => 0; i--) {
        if (arr[i] == 0) {
            arr.splice(i, 0, 0)
            arr.pop()
        }
    }
}