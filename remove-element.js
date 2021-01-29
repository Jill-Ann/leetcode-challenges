// Given an array nums and a value val, remove all instances of that value in-place and return the new length.

const removeElement = (nums, val) => {
    let p1 = 0

    for (let p2=0; p2<nums.length; p2++) {
        if ( nums[p2] != val) {
            nums[p1] = nums[p2]
            p1++
        }
    }
    
    return p1
};

console.log(removeElement([1, 1, 1, 3, 3, 4], 1));