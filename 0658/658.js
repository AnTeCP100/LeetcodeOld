//658. Find K Closest Elements

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
 var findClosestElements = function(arr, k, x) {
    arr.sort((a,b)=>Math.abs(a-x)- Math.abs(b-x))
    arr.splice(k);
    arr.sort((a,b)=>a-b)
    /*
    var smallIdx = newArr.indexOf(Math.min(...newArr));
    var retVal = [],retIdxArr=[];
    
    for(var i = smallIdx-k+1;i<smallIdx+k;i++){
        
        if(i<0){
            continue;
        }
        if(retVal.length==0){
            retVal.push(arr[i]);
            retIdxArr.push(newArr[i]);
            continue;
        }
        if(newArr[i]<retIdxArr[0]){
            retVal.push(arr[i]);
            retIdxArr.push(newArr[i]);
            if(retVal.length>k){
                retVal.shift();
                retIdxArr.shift();
            }
        }else{
            if(retVal.length==k){
                break;
            }
            else
            {
                retVal.push(arr[i]);
                retIdxArr.push(newArr[i]);
            }
        }
    }*/
    return arr;
};




//Input: arr = [1,2,3,4,5], k = 4, x = 3
//Output: [1,2,3,4]

//Input: arr = [1,2,3,4,5], k = 4, x = -1
//Output: [1,2,3,4]



var arr = [1,2,5,5,6,6,7,7,8,9]
var k   = 7
var x   = 7
console.log(findClosestElements(arr,k,x))


//Runtime: 124 ms, faster than 33.33% of JavaScript online submissions for Find K Closest Elements.
//Memory Usage: 46.6 MB, less than 9.23% of JavaScript online submissions for Find K Closest Elements.


//Runtime: 116 ms, faster than 47.95% of JavaScript online submissions for Find K Closest Elements.
//Memory Usage: 45.6 MB, less than 32.82% of JavaScript online submissions for Find K Closest Elements.