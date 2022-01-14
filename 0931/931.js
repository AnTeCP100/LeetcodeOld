/**
 * @param {number[][]} matrix
 * @return {number}
 */
 var minFallingPathSum = function(matrix) {
    let n = matrix.length;
    let prevRow = Array.from(matrix[0]);
    
    let nextRow;
    let min;
    for (let i = 1; i < n; i++) {
        nextRow = [...prevRow];
        for (let j = 0; j < n; j++) {
            min = Infinity;
            if (j > 0 && j < n - 1) {
                min = Math.min(min, prevRow[j], prevRow[j - 1], prevRow[j + 1]);
            } else if (j > 0) {
                min = Math.min(min, prevRow[j], prevRow[j - 1]);       
            } else if (j < n - 1) {
                min = Math.min(min, prevRow[j], prevRow[j + 1]);
            } else {
                min = Math.min(min, prevRow[j]);
            }

            nextRow[j] =  min + matrix[i][j];
        }
        prevRow = nextRow;
        
    }
    return Math.min(...prevRow);
};

//Example 1:
//Input: matrix = [[2,1,3],[6,5,4],[7,8,9]]
//Output: 13
//Explanation: There are two falling paths with a minimum sum underlined below:
//[[2,1,3],      [[2,1,3],
// [6,5,4],       [6,5,4],
// [7,8,9]]       [7,8,9]]
//
//Example 2:
//Input: matrix = [[-19,57],[-40,-5]]
//Output: -59
//Explanation: The falling path with a minimum sum is underlined below:
//[[-19,57],
// [-40,-5]]
//
//Example 3:
//Input: matrix = [[-48]]
//Output: -48


var matrix = [[2,1,3],[6,5,4],[7,8,9]]
console.log(minFallingPathSum(matrix));


//Runtime: 72 ms, faster than 95.12% of JavaScript online submissions for Minimum Falling Path Sum.
//Memory Usage: 41 MB, less than 56.10% of JavaScript online submissions for Minimum Falling Path Sum.