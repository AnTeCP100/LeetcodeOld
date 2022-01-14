/**
 * @param {number[]} nums
 * @return {number}
 */


 var triangleNumber = function(nums) {
    var retval=0;
    var leftPos,rightPos;
    nums=nums.sort((a,b)=>{return a-b})
    //from back 
    for(var pos = nums.length-1;pos>=0;pos--)
    {
        //reset the left and right
        leftPos = 0; 
        rightPos = pos-1;
        
        //while condition
        while(leftPos<rightPos)
        {
            //triangle condition
            if(nums[leftPos]+nums[rightPos]>nums[pos])
            {
                //bigger than left position with the now right position is always true ,then add them to result
                retval+=(rightPos-leftPos)
                
                //offset
                rightPos--;
            }
            else
            {
                //offset
                leftPos++;
            }
        }
    }

    return retval
};
var arr = [9,8,7,1,4,2,3]
console.log(triangleNumber(arr));
