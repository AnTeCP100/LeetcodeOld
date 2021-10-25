/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var jump = function(nums) {
    var len = nums.length
    var dp = [];
    dp.length = len+1
    dp.fill(Number.MAX_VALUE);

    dp[0]=0;

    // check every one
    for(var pos = 0; pos < len; pos++)
    {
        var _jumpLimit = nums[pos] + pos
        
        for(var jumpTo = pos+1; jumpTo<= _jumpLimit;jumpTo++)
        {
            //console.log(pos,_jumpLimit,jumpTo)
            dp[jumpTo] = Math.min(dp[pos]+1,dp[jumpTo])
        }

    }
    //console.log(dp)
    return dp[nums.length-1]
 }
//Input: nums = [2,3,1,1,4]
//Output: 2
//Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

var nums = [2,3,1,1,4]
console.log(jump(nums))


//Runtime: 348 ms, faster than 23.37% of JavaScript online submissions for Jump Game II.
//Memory Usage: 45.3 MB, less than 10.96% of JavaScript online submissions for Jump Game II.



var jump_fast = function(nums) {
    let newMax = 0;
    let jump = 0;
    let oldMax = 0;
    for (let i=0;i<nums.length-1;i++) {
        
        newMax = Math.max(newMax, i+nums[i]);
        if (i === oldMax) {
            jump++;
            oldMax = newMax;
        }
    }
    return jump;
};