/**
 * @param {number[]} nums
 * @return {boolean}
 */

 var canJump = function(nums) {
    var len = nums.length-1;
    var retval = nums[0]
    var nowIdx = 1;

    // nums length = 1 always true;
    if(len<1)
        return 1;
    
    //compare every elements in nums 
    //nowIdx : now index, retval : next jump index
    while(nowIdx <= retval && nowIdx <= len)
    {
        //console.log(len,retval,nowIdx)
        
        //compare next position
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


//Runtime: 96 ms, faster than 60.91% of JavaScript online submissions for Jump Game.
//Memory Usage: 42.3 MB, less than 98.36% of JavaScript online submissions for Jump Game.