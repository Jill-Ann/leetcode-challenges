// Given an array nums and a value val, remove all instances of that value in-place and return the new length.

const removeElement = (nums, val) => {
    let p1 = 0

    for (i=0; i<nums.length; i++) {
        if ( nums[i] != val) {
            nums[p1] = nums[i]
            p1++
        }
    }
    
    return p1
};

console.log(removeElement([1, 1, 1, 3, 3, 4], 1));