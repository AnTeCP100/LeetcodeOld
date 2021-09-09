/**
 * @param {number[]} arr
 * @return {number}
 */
 var maxTurbulenceSize = function(arr) {
    var retval = 2 ,nowret = 2, reverse=true,preval = arr[1];
    if(arr.length==1) return 1;
    if(arr[0]>arr[1]) reverse = false;
    else if(arr[0]==arr[1]) retval =1;

    for(var count= 2 ;count <arr.length;count++)
    {
        console.log(reverse,count,arr[count],nowret)
        if(reverse)
        {
            if(arr[count]<preval)
            {
                nowret+=1   
                reverse = !reverse;            
            }else{
                if(nowret>retval)
                {
                    retval = nowret;
                    //double check remaing
                    if(retval>(arr.length-1-count))  break;
                }
                
                if(preval==arr[count])
                {
                    nowret =1;  
                }else{
                    nowret =2;  
                }
                   
            }
        }else
        {
            if(arr[count]>preval)
            {
                nowret+=1  
                reverse = !reverse;             
            }else{
                if(nowret>retval)
                {
                    retval = nowret;
                    //double check remaing
                    if(retval>(arr.length-1-count))  break;
                } 
                if(preval==arr[count])
                {
                    nowret =1;  
                }else{
                    nowret =2;  
                }     
            }
        }
        preval = arr[count];  
        
    }
    return retval>nowret?retval:nowret;
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
 
var arr = [0,8,45,88,48,68,28,55,17,24]
console.log(maxTurbulenceSize(arr))