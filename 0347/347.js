/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    
    //initialize
    var ret = []


    var arr = [];

    //sort the array O(n log(n))
    nums.sort((a,b)=>{
        return a-b;
    })

    var nowNum = nums[0];
    
    var nowCount = 1;

    //loop for make the array;
    for(var pos = 1;pos<=nums.length;pos++)
    {
        if(nowNum!=nums[pos]||pos ==nums.length )
        {
            var param = [nowNum,nowCount]
            arr.push(param)

            //reset everything
            nowNum = nums[pos]
            nowCount =1;

        }else
        {
            //continue to count
            nowCount++;
        }
    }

    arr.sort((a,b)=>{
        return b[1]-a[1]
    })

    for(var i = 0;i<k;i++)
    {
        ret.push(arr[i][0])
    }

    return ret;
};

var nums=[5,2,5,3,5,3,1,1,3]
var k = 2
console.log(topKFrequent(nums,k))