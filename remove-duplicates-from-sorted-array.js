// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

const removeDuplicates = nums => {
    let p1 = 0

    for (let p2=1; p2<nums.length; p2++) {
        if (nums[p1] != nums[p2]) {
            p1++
            nums[p1] = nums[p2]
        }
    }

    return p1+1
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));