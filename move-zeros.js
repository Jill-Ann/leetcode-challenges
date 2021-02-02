// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

const moveZeroes = nums => {
    let anchor = 0

    for (let explorer = 0; explorer < nums.length; explorer++) {
        if (nums[explorer] != 0) {
            let temp = nums[anchor]
            nums[anchor] = nums[explorer]
            nums[explorer] = temp

            anchor++
        }
    }
}

console.log(moveZeroes([0,1,0,3,12])); // [1,3,12,0,0]
console.log(moveZeroes([1,0,1])); // [1,1,0]