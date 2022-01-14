/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    var highIdx = nums.length-1;
    var lowIdx = 0;
    var nowIdx = 0;

    
    while(nowIdx<=highIdx)
    {
        //just verify 0 or 2

        if(nums[nowIdx]==0)
        {
            //switch location
            var temp = nums[lowIdx];
            nums[lowIdx] = nums[nowIdx];
            nums[nowIdx] = temp;
            
            //low idx move to next one
            lowIdx+=1;
        }

        if(nums[nowIdx]==2)
        {
            //switch location
            var temp = nums[highIdx]
            nums[highIdx] = nums[nowIdx];
            nums[nowIdx] = temp;

            //low idx move to before one
            highIdx-=1;
            nowIdx -=1;
        }

        nowIdx+=1;
    }

    console.log(nums);
};

//Example 1:
//Input: nums = [2,0,2,1,1,0]
//Output: [0,0,1,1,2,2]

//Example 2:
//Input: nums = [2,0,1]
//Output: [0,1,2]
var nums = [2,0,2,1,1,0];
sortColors(nums)