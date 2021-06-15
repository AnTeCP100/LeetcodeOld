/**
 * The number of global inversions is the number of the different pairs (i, j) where:
 * 0 <= i < j < n
 * nums[i] > nums[j]
 * 
 * The number of local inversions is the number of indices i where:
 * 0 <= i < n - 1
 * nums[i] > nums[i + 1]
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var isIdealPermutation = function(A) {
    for (let i = 0; i < A.length; i++)
        if (i - A[i] > 1 || i - A[i] < -1) return false
    return true
};
/*
Input: nums = [1,0,2]
Output: true
Explanation: There is 1 global inversion and 1 local inversion.

Input: nums = [1,2,0]
Output: false
Explanation: There are 2 global inversions and 1 local inversion.
*/
nums = [0,2,1];
console.log(isIdealPermutation(nums));

//Runtime: 96 ms, faster than 75.00% of JavaScript online submissions for Global and Local Inversions.
//Memory Usage: 49.3 MB, less than 12.50% of JavaScript online submissions for Global and Local Inversions.