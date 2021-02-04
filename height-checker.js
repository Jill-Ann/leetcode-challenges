// Students are asked to stand in non-decreasing order of heights for an annual photo.

// Return the minimum number of students that must move in order for all students to be standing in non-decreasing order of height.

const heightChecker = heights => {
    let numMoved = 0
    const sorted = Array.from(heights).sort((a,b) => a-b)

    for (i=0; i<heights.length; i++) {
        if (heights[i] != sorted[i]) {
            numMoved++
        }
    }
    return numMoved
}

console.log(heightChecker([1,1,4,2,1,3]));