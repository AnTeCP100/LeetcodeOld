/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {
    var retval = 0;
    var nowIdx = arr.length-1;
    var preJumpArr = new Array(nowIdx+1).fill(0);


    //find the road from the last 
    //status 0: left
    //       1: right
    //       2: jump
    var findRoadFunc = function(nowIdx,ret,status)
    {
        
        if(nowIdx == 0 || nowIdx == arr.length-1)
        {
            return ret;
        }

        var result = 0, left = Number.MAX_SAFE_INTEGER, right = Number.MAX_SAFE_INTEGER;
        var preIdx = arr.indexOf(arr[nowIdx])

        if(preIdx >= nowIdx)
        {
            //status : 0
            if(status != 0)
            {
                right = findRoadFunc(preIdx,ret+1,1); 
            }

            //status : 1
            if(status != 1)
            {
                left = findRoadFunc(preIdx,ret+1,0);
            }

            

            result = left>right?right:left;

        }
        else
        {
            result = findRoadFunc(preIdx,ret+1,2);
        }
        return result
    }
     
    retval = findRoadFunc(nowIdx,0,0);
    return retval
};


var arr = [11,22,7,7,7,7,7,7,7,22,13]
console.log(minJumps(arr));

//Example 1:
//Input: arr = [100,-23,-23,404,100,23,23,23,3,404]
//Output: 3
//Explanation: You need three jumps from index 0 --> 4 --> 3 --> 9. Note that index 9 is the last index of the array.

//Example 2:
//Input: arr = [7]
//Output: 0
//Explanation: Start index is the last index. You don't need to jump.

//Example 3:
//Input: arr = [7,6,9,6,9,6,9,7]
//Output: 1
//Explanation: You can jump directly from index 0 to index 7 which is last index of the array.

//Example 4:
//Input: arr = [6,1,9]
//Output: 2

//Example 5:
//Input: arr = [11,22,7,7,7,7,7,7,7,22,13]
//Output: 3

