/**
 * @param {number[]} nums
 * @return {number}
 */
 var numberOfArithmeticSlices = function(nums) {
    //!Consecutive Array 

    // 1 2 3 0 2 3 4 5   dp
    // x               ...0
    //   x             ...0
    //     3           ...1
    //       0         ...0
    //         2       ...0
    //           3     ...0
    //             4   ...1
    //               5 ...2
    //AWS 1 + 1 + 2  

    //nums[cur]-nums[cur-1] == nums[cur-1]-nums[cur-2]

    // if true => dp current value will be dp[cur-1] + 1   
    // if false => dp current value will be zero
    

    var ret = 0;

    //init dp array
    var dp = []
    dp.length = nums.length;
    dp.fill(0);

    //from position 2 start
    for(var pos = 2;pos<nums.length;pos++)
    {
        //check condition
        if(nums[pos]-nums[pos-1] ==nums[pos-1]-nums[pos-2])
        {
            dp[pos] = 1+dp[pos-1]
            ret += dp[pos] 
        }
    }
    return ret
};

//Runtime: 117 ms, faster than 15.32% of JavaScript online submissions for Arithmetic Slices.
//Memory Usage: 38.5 MB, less than 76.28% of JavaScript online submissions for Arithmetic Slices.
//Next challenges: