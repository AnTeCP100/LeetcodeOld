/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
    //sort the target
   nums.sort((a,b)=>{
       return a-b
   })
   //every positon check left and right   [1 1 2 3 3 3]
   //                                      i s 0 0 0 e
   var ret = Number.MAX_VALUE;
   var ret_d = Number.MAX_VALUE;
   for(var pos = 0;pos<nums.length-2;pos++)
   {
       var left = pos +1;
       var right = nums.length-1;
       while(left<right)
       {
           var temp_sum   = nums[pos]+nums[left]+nums[right]
           var temp_d = Math.abs(target-temp_sum)
           //Check the number if is lower than the result
           if(temp_d < ret_d)
           {
               ret_d = temp_d
               ret = temp_sum
               console.log(ret)
           }

           //move the position
           if(temp_sum>target)
           {
               right--;
           }else if (temp_sum<target)
           {
               left++;
           }else 
           {
               break;

               //! I am so fucking stupid
               //! return;
           }
       }
       console.log(ret)
   }
   
   return ret;
};

var nums = [0,1,2]
var target = 3
threeSumClosest(nums,target)