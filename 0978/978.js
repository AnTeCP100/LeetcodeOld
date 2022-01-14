/**
 * @param {number[]} arr
 * @return {number}
 */
 var maxTurbulenceSize = function(arr) {
    var nextType = true;
    var retval = 1 ,nowRetval = 0,oldRetval = 1;


    if(arr.length==1) return arr.length;
    
    for(var pos = 0;pos<arr.length;pos++)
    {
        if(nowRetval != 0)
        {
            if(arr[pos+1]>arr[pos]&&nextType || arr[pos+1]<arr[pos]&&!nextType)
            {
                nowRetval+=1;
                nextType = !nextType;
            } 
            else 
            {
                
                retval = Math.max(retval,nowRetval);
                nowRetval = 0;
                if(retval>arr.length-1-pos)
                {
                    break;
                }
            }
        }


        if(nowRetval == 0)
        {
            if(arr[pos+1]>arr[pos]) nextType=false, nowRetval+=2;
            if(arr[pos+1]<arr[pos]) nextType=true, nowRetval+=2; 
        }
    }

    return Math.max(retval,nowRetval);
};

/**
 * @param {number[]} arr
 * @return {number}
 */
 var maxTurbulenceSize_1 = function(arr) {
    var retval = 1 ,nowOdd = 1,nowEven=1;
    for(var pos = 0;pos<arr.length;pos++)
    {
        if(pos%2)// success or fail
        { 
            nowOdd = (arr[pos] > arr[pos + 1]) ? nowOdd + 1 : 1;
            nowEven = (arr[pos] < arr[pos + 1]) ? nowEven + 1 : 1;
        }
        else { 
            nowEven = (arr[pos] > arr[pos + 1]) ? nowEven + 1 : 1;
            nowOdd = (arr[pos] < arr[pos + 1]) ? nowOdd + 1 : 1;
        }
        retval = Math.max(retval,nowEven,nowOdd);
        
    }

    return retval;
};


//Example 1:
//Input: arr = [9,4,2,10,7,8,8,1,9]
//Output: 5
//Explanation: arr[1] > arr[2] < arr[3] > arr[4] < arr[5]
//
//Example 2:
//Input: arr = [4,8,12,16]
//Output: 2
//
//Example 3:
//Input: arr = [100]
//Output: 1
 
var arr = [9,9]
console.log(maxTurbulenceSize(arr))


//Runtime: 104 ms, faster than 32.26% of JavaScript online submissions for Longest Turbulent Subarray.
//Memory Usage: 44.6 MB, less than 80.65% of JavaScript online submissions for Longest Turbulent Subarray.

//Runtime: 152 ms, faster than 12.90% of JavaScript online submissions for Longest Turbulent Subarray.
//Memory Usage: 44.6 MB, less than 80.65% of JavaScript online submissions for Longest Turbulent Subarray.