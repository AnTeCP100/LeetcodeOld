/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var countKDifference = function(nums, k) {
    //O(n)
    var ret = 0;
    
    var nums_map = new Map()

    //making map to record every element count map
    nums.forEach(element => {
        var count = 0;
        if(nums_map.has(element)) 
        {
            count = nums_map.get(element)
        }
        nums_map.set(element,count+1)
    });

    //use the map find the other one
    nums_map.forEach(function(value, key) {

        //condition : |nums[i] - nums[j]| == k.
        //positive (i-k=y)
        if(nums_map.has((key-k)))
        {    
            ret += value * (nums_map.get(key-k))
        }

        //negative (i+k=y)
        if(nums_map.has((key+k)))
        {
            ret += value * (nums_map.get(key+k))
        }

        nums_map.delete(key)
    })

    return ret
};

//Example 1:
//Input: nums = [1,2,2,1], k = 1
//Output: 4

//Example 2:
//Input: nums = [1,3], k = 3
//Output: 0

//Example 3:
//Input: nums = [3,2,1,5,4], k = 2
//Output: 3

var nums = [1,2,2,1], k = 1
console.log(countKDifference(nums,1))


//Runtime: 76 ms, faster than 89.54% of JavaScript online submissions for Count Number of Pairs With Absolute Difference K.
//Memory Usage: 40.5 MB, less than 32.72% of JavaScript online submissions for Count Number of Pairs With Absolute Difference K.