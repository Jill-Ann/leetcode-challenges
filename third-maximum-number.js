// Given integer array nums, return the third maximum number in this array. If the third maximum does not exist, return the maximum number.


const thirdMax = nums => {
    let max = nums[0]
    let second = -Infinity
    let third = -Infinity

    for (i=1; i<nums.length; i++) {
        let num = nums[i]

        if (num > max) {
            third = second
            second = max
            max = num
        } else if (num < max && num > second) {
            third = second
            second = num
        } else if (num < second && num > third) {
            third = num
        }
    }
    
    return third == -Infinity ? max : third
}

console.log(thirdMax([2,2,3,1])); // 1
console.log(thirdMax([1,-2147483648,2])); // -2147483648
