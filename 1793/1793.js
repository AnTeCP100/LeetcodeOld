/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var maximumScore = function(nums, k) {
    //先找出前端跟後端的最小值
    let len = nums.length
    for (let i = k - 1; ~i; i--) {
        nums[i] = Math.min(nums[i], nums[i + 1]);
    }
    for (let i = k + 1; i < len; i++) {
        nums[i] = Math.min(nums[i], nums[i - 1]);
    }
    let l = r = k;
    let res = 0;
    for (let x = nums[k]; 1<=x; x--) {
        console.log(x);
        while (~(l - 1) && nums[l - 1] >= x) l--;
        while (r + 1 <len && nums[r + 1] >= x) r++;
        console.log((r - l + 1) * x);
        res = Math.max(res, (r - l + 1) * x);
    }
    return res
    
}
var nums = [1,4,3,7,4,5], k = 3
console.log(maximumScore(nums,k))