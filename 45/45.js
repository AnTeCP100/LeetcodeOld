/**
 * @param {number[]} nums
 * @return {boolean}
 */

 var jump = function(nums) {
    var len = nums.length-1;
    var nowValue = nums[0]
    var nowIdx = 1;
    var road = Number.MAX_SAFE_INTEGER;
    var retval = 0;
    if(len<1)
        return 0;
    //compare every elements in nums find the max one
    while(nowIdx <= nowValue && nowIdx <= len)
    {
        var temp = nowValue;
        //retval = Math.max(retval,nowIdx+nums[nowIdx])
        if(nowValue<nowIdx+nums[nowIdx])
        {
            nowValue=nowIdx+nums[nowIdx]
            retval++
        }else if(nowValue==nowIdx+nums[nowIdx])
        {
            
        }
        nowIdx++;
    }
    return retval 
 }
//Input: nums = [2,3,1,1,4]
//Output: true
//Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

var nums = [2,1]
console.log(jump(nums))


//Runtime: 956 ms, faster than 18.68% of JavaScript online submissions for Jump Game.
//Memory Usage: 51.2 MB, less than 5.04% of JavaScript online submissions for Jump Game.