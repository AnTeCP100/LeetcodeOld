/**
 * @param {number[]} nums
 * @return {boolean}
 */

 var canJump = function(nums) {
    var len = nums.length-1;
    var retval = nums[0]
    var nowIdx = 1;
    if(len<1)
        return 1;
        
        
    
    //compare every elements in nums find the max one
    while(nowIdx <= retval && nowIdx <= len)
    {
        retval = Math.max(retval,nowIdx+nums[nowIdx])
        nowIdx++;
    }

    return retval>=len?1:0  
};

//Input: nums = [2,3,1,1,4]
//Output: true
//Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

var nums = [3,2,1,0,4]
console.log(canJump(nums))


//Runtime: 956 ms, faster than 18.68% of JavaScript online submissions for Jump Game.
//Memory Usage: 51.2 MB, less than 5.04% of JavaScript online submissions for Jump Game.