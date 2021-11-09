/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
 var canReach = function(arr, start) {
     var len = arr.length;
    var switchArr = new Array(len).fill(0);

    var findRoadFunc = function(nowPos)
    {
        //condition
        if(arr[nowPos]==0)
        {
            return true;
        }
        if(switchArr[nowPos]==1)
        {
            return false;
        }
        
        //change switch array
        switchArr[nowPos] = 1;


        //go to left or right
        var left  = nowPos-arr[nowPos]>=0?findRoadFunc(nowPos-arr[nowPos]):false;

        var right = nowPos+arr[nowPos]<=len-1?findRoadFunc(nowPos+arr[nowPos]):false;

        return left||right?true:false
    }
    
    var retval = findRoadFunc(start);

    return retval
};


//Example 1:
//Input: arr = [4,2,3,0,3,1,2], start = 5
//Output: true
//Explanation: 
//All possible ways to reach at index 3 with value 0 are: 
//index 5 -> index 4 -> index 1 -> index 3 
//index 5 -> index 6 -> index 4 -> index 1 -> index 3 

//Example 2:
//Input: arr = [4,2,3,0,3,1,2], start = 0
//Output: true 
//Explanation: 
//One possible way to reach at index 3 with value 0 is: 
//index 0 -> index 4 -> index 1 -> index 3

//Example 3:
//Input: arr = [3,0,2,1,2], start = 2
//Output: false
//Explanation: There is no way to reach at index 1 with value 0.


var arr = [4,2,3,0,3,1,2], start = 5
console.log(canReach(arr,start))



//Runtime: 84 ms, faster than 81.54% of JavaScript online submissions for Jump Game III.
//Memory Usage: 49.8 MB, less than 32.31% of JavaScript online submissions for Jump Game III.