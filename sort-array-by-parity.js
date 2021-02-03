// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

const sortArrayByParity = arr => {
    let p1 = 0

    for (let p2 = 0; p2 < arr.length; p2++) {
        if (arr[p2] % 2 == 0 ) {
            let temp = arr[p1]
            arr[p1] = arr[p2]
            arr[p2] = temp

            p1++
        }
    }
    
    return arr
}

console.log(sortArrayByParity([3,1,2,4])); // [2,4,3,1]