// Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

const checkIfExist = arr => {

    while (arr.length) {
        let n = arr.pop()
        if(arr.includes(n*2) || arr.includes(n/2)) return true
    }
    
    return false
}

console.log(checkIfExist([5,2,10,3]));
console.log(checkIfExist([-2,10,0,-19,4,6,-8]));
console.log(checkIfExist([0,0]));