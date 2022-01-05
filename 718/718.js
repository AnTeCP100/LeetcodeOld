/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findLength = function(nums1, nums2) {
    var ret = 0;
    var dp = [];
    //    x   1   2   3   2   1(n1)
    //x   0   0   0   0   0   0 
    //3   0   0   0   1   0   0 
    //2   0   0   1   0   2   0
    //1   0   1   0   0   0   3
    //4   0   0   0   0   0   0
    //7   0   0   0   0   0   0
    //(n2)


    //first line
    var init_sm_dp = []
    init_sm_dp.length=nums1.length+1;
    init_sm_dp.fill(0);
    dp.push(init_sm_dp);
    

    for(var nums2_pos = 1 ;nums2_pos<=nums2.length;nums2_pos++)
    {
        //init dp array
        var sm_dp = []
        sm_dp.length=nums1.length+1;
        sm_dp.fill(0);

        //compare with nums1 
        for(var nums1_pos = 1 ;nums1_pos<=nums1.length;nums1_pos++)
        {
            //find the equal
            if(nums2[nums2_pos-1]==nums1[nums1_pos-1])
            {
                //use dp[x-1][y-1] and cmp with math
                sm_dp[nums1_pos]=dp[nums2_pos-1][nums1_pos-1]+1
                ret=Math.max(sm_dp[nums1_pos],ret)
            }
        }
        dp.push(sm_dp);
    }
    return ret;
};

//Example 1:
//Input: nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
//Output: 3
//Explanation: The repeated subarray with maximum length is [3,2,1].

//Example 2:
//Input: nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
//Output: 5