// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

const twoSum = (nums, target) => {
    let map = new Map()
    let result = []

    for (let i = 0; i < nums.length; i++ ) {
        let current = nums[i]
        let difference = target - current
        
        if (map.has(difference)) {
            result[0] = map.get(difference)
            result[1] = i
        }

        map.set(current, i)
       
    }
    return result
}

console.log(twoSum([1,7,11,2,15], 9)); // [0,1]