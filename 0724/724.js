/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    var right = nums.reduce((a,b)=>a+b);  
    var sum = nums.reduce((num,curr,index)=>(num+curr),0);
    console.log(sum);
    var left = 0;
    var trueLeft = 0;
    for(var i = 0;i<nums.length;i++){
       right-=nums[i];   
       console.log(right); 
       if(right-trueLeft==0){
           return i
       }
       left = trueLeft;
       trueLeft+=nums[i];
    }
    return -1
};

//var pivotIndex = function(nums) {
//    var sum = nums.reduce((num,curr,index)=>(num+curr),0);
//    var currsum = 0;
//    for(let i =0;i<nums.length;i++){
//        sum/2 will be left right
//        if((sum-nums[i])/2==currsum){
//            return i;
//        }
//     currsum +=nums[i];
//    }
//    return -1
//};


//Input: nums = [1,7,3,6,5,6]
//Output: 3
//Explanation:
//The pivot index is 3.
//Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
//Right sum = nums[4] + nums[5] = 5 + 6 = 11
//
//Input: nums = [1,2,3]
//Output: -1
//Explanation:
//There is no index that satisfies the conditions in the problem statement.
//
//Input: nums = [2,1,-1]
//Output: 0
//Explanation:
//The pivot index is 0.
//Left sum = 0 (no elements to the left of index 0)
//Right sum = nums[1] + nums[2] = 1 + -1 = 0
// 

var nums = [1,7,3,6,5,6]

console.log(pivotIndex(nums))


//Runtime: 116 ms, faster than 27.37% of JavaScript online submissions for Find Pivot Index.
//Memory Usage: 40.6 MB, less than 76.21% of JavaScript online submissions for Find Pivot Index.

//Runtime: 88 ms, faster than 95.14% of JavaScript online submissions for Find Pivot Index.
//Memory Usage: 40.5 MB, less than 89.77% of JavaScript online submissions for Find Pivot Index.