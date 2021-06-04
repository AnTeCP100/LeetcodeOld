/**
 * The number of global inversions is the number of the different pairs (i, j) where:
 * 0 <= i < j < n
 * nums[i] > nums[j]
 * 
 * The number of local inversions is the number of indices i where:
 * 0 <= i < n - 1
 * nums[i] > nums[i + 1]
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var isIdealPermutation=function(nums) {
    var reverseNums = nums.reverse();
    return seefor(reverseNums);
}

function seefor(revNms) {
     var res = false;
     var max = Math.max(...revNms)
     var min = Math.min(...revNms)
     var maxIdx = revNms.indexOf(max)
     var mimIdx = revNms.indexOf(min)
     /*last one is the largest */
     if(maxIdx == 0){
        var transArr = revNms.slice(1,revNms.length)
        console.log(transArr);
        if(transArr.length==1){
            return true;
        }
        res=seefor(transArr)
     }
     else if(maxIdx == 1){
        if(revNms.length==2){
            return true;
        }
        var lastNum = revNms[0]
        var transArr = revNms.slice(2,revNms.length)
        
        
        var comapareVal = transArr.length>1?Math.max(...transArr):transArr[0]
        if(lastNum<comapareVal&&comapareVal!=max){

            return false;
        }
        if(revNms.length==1){
            return true;
        }
        res =seefor(transArr)
     }
     return res;
 };

/*
Input: nums = [1,0,2]
Output: true
Explanation: There is 1 global inversion and 1 local inversion.

Input: nums = [1,2,0]
Output: false
Explanation: There are 2 global inversions and 1 local inversion.
*/
nums = [0,2,1];
console.log(isIdealPermutation(nums));