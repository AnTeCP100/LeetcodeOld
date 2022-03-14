/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    //nums is  a sorted array and distinct 
    var len = nums.length;  
    var offset = Math.floor(len/2);
    var ret = len-offset-1

    //loop 
    while(true)
    {
        //three situation
        if(nums[ret]>target)
        {
            //check prev index value if is lower than target
            if(nums[ret-1]<target)
            {
                //return now ret
                break;
            }else
            {
                //check offset if is zero,if yes,thant offset plus one
                offset = Math.floor(offset/2)==0?Math.floor(offset/2)+1:Math.floor(offset/2)
                
                //check boundary
                if(ret-offset<0)
                {
                    break;
                }

                //next loop idx
                ret-=offset;
            }
        }
        else if(nums[ret]<target)    
        {
            //check next index value if is higher than target
            if(nums[ret+1]>target)
            {
                //next idx is the result
                ret+=1
                break;
            }else
            {        
                //check offset if is zero,if yes,thant offset plus one
                offset = Math.floor(offset/2)==0?Math.floor(offset/2)+1:Math.floor(offset/2)
                
                //check boundary
                if(ret+offset>=len)
                {
                    //next idx is the result
                    ret+=1
                    break;
                }

                //next loop idx
                ret+=offset;
            }
        }
        else
        {
            //if equal,now indext is the result
            break;
        }
    }
    return ret;
};


//Example 1:
//Input: nums = [1,3,5,6], target = 5
//Output: 2

//Example 2:
//Input: nums = [1,3,5,6], target = 2
//Output: 1

//Example 3:
//Input: nums = [1,3,5,6], target = 7
//Output: 4


var nums = [1,3,5,6], target = 0

console.log(searchInsert(nums,target))