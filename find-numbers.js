// Given an array nums of integers, return how many of them contain an even number of digits.

const findNumbers = nums => {
    return nums.map(num => num.toString()).filter(str => str.length % 2 == 0).length
}

console.log(findNumbers([555,901,482,1771])); // 1