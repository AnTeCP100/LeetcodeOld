/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 var search = function(nums, target) {
    
    var leftPos = 0;
    var rightPos = nums.length-1;
    var nowPos = 0

    //O(log(n))
    while(leftPos<=rightPos)
    {
        //new position
        nowPos = Math.floor((leftPos+rightPos)/2);
        if(nums[nowPos]==target)
        {
            return nowPos;
        }

        //left or right
        if(nums[leftPos]<=nums[nowPos]){
            if(target<nums[nowPos] && target>=nums[leftPos]){
                rightPos = nowPos-1;
            }else{
                leftPos = nowPos +1;
            }
        }else{
            if(target>nums[nowPos] && target<=nums[last]){
                leftPos = nowPos +1;
            }else{
                rightPos = nowPos -1;
            }
        }
    }
    return -1
};

var nums = [4,5,6,7,0,1,2], target = 0
console.log(search(nums,target))

//Runtime: 76 ms, faster than 73.48% of JavaScript online submissions for Search in Rotated Sorted Array.
//Memory Usage: 40.2 MB, less than 21.59% of JavaScript online submissions for Search in Rotated Sorted Array.



// var search = function(nums, target) {
//    return nums.indexOf(target);
//};

//Runtime: 76 ms, faster than 73.48% of JavaScript online submissions for Search in Rotated Sorted Array.
//Memory Usage: 39.9 MB, less than 46.93% of JavaScript online submissions for Search in Rotated Sorted Array.