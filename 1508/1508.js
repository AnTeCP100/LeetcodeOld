/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
 var rangeSum = function(nums, n, left, right) {
    var rangeArr=[]
    for(var i = 0;i<nums.length;i++)
    {
        let temp_sum = nums[i];
        rangeArr.push(temp_sum)
        for(var j = i+1;j<nums.length;j++)
        {
            rangeArr.push(temp_sum+=nums[j])
        }
    }
    
    rangeArr.sort((a,b)=>{return a-b})
    console.log(rangeArr) 
    var ret = 0
    for(var i = left-1;i<right;i++)
    {
        ret+=rangeArr[i]
        
        ret %= 1000000007
    }

    return ret;
};