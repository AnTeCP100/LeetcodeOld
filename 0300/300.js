/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {

    //dp[i] = dp[i-d]+1
    //    10 ,9 ,2 ,5 ,3 ,7 ,101 ,18
    // dp  0  0  0  0  0  0  0    0 
    // 10  1  0  0  0  0  0  0    0
    //  9  1  1  0  0  0  0  0    0
    //  2  1  1  1  0  0  0  0    0    
    //  5  1  1  1  2  0  0  0    0
    //  3  1  1  1  2  2  0  0    0  
    //  7  1  1  1  2  2  3  0    0  =>7  >2 ,5 ,3                ret is 2,2,3; select the max  
    //101  1  1  1  2  2  3  4    0  =>101>10 ,9 ,2 ,5 ,3 ,7      ret is 2,2,2,3,3,4; select the max 
    // 18  1  1  1  2  1  1  1    1  =>18 >10 ,9 ,2 ,5 ,3 ,7      ret is 2,2,2,3,3,4; select the max  

    var len = nums.length
    var nowlen = 0;
    var dp = []
    //every elements need to check 
    for(var i = 0;i<len;i++)
    {
        nowlen = 1;
        for(var j =0;j<i;j++)
        {
            if(nums[j]<nums[i])
            {
                nowlen = Math.max(nowlen,dp[j]+1)
            }
        }
        dp[i]=nowlen;
    }
    return Math.max(...dp)
};