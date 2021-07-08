/**
 * @param {number} k
 * @return {number}
 */

// var findMinFibonacciNumbers = function(k) {
//    var matrix = [1,1]
//    var nowVal = 0;
//    var lastVal = 0;
//    var retVal = 0;
//    var i = 0;//

//    var loopAdddFunc = function(now,matrix){
//        if(matrix[now]!=undefined){
//            return matrix[now];
//        }
//        nowVal =  loopAdddFunc(now-1,matrix)+loopAdddFunc(now-2,matrix);
//        matrix[now]= nowVal;
//        return nowVal;
//    }
//    for(i =0;i<k+1;i++){
//        lastVal = loopAdddFunc(i,matrix)
//        if(lastVal>=k){
//            retVal+=1;
//            break;
//        }
//    }
//   //

//    var q = k-matrix[i-1];
//    
//    if(q==0 ||k ==matrix[i]){
//        return retVal
//    }
//    console.log(q,retVal)
//    for(i = matrix.length-3;i>=0;i--){
//        console.log(i,q,matrix[i])
//        if(matrix[i]<=q){
//            q-=matrix[i];           
//            retVal+=1
//            console.log(q,retVal)
//            if(q==0)
//            {
//                return retVal
//            }
//        }
//    }
//};

var findMinFibonacciNumbers = function(k) {
    let sequence = [1, 1], sum = sequence[0] + sequence[1];
    let i = 2;
    while (sum <= k) {
        sequence.push(sum);
        i++;
        sum = sequence[i-1]+sequence[i-2];
    }
    let j = sequence.length-1, res = 0;
    while (k) {
        if (k >= sequence[j]) k -= sequence[j], res++;
        j--;
    }
    return res;
};

//善用WHILE 當判斷式




//Input: k = 7
//Output: 2 
//Explanation: The Fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, ... 
//For k = 7 we can use 2 + 5 = 7.
//
//
//Input: k = 10
//Output: 2 
//Explanation: For k = 10 we can use 2 + 8 = 10.
//
//
//Input: k = 19
//Output: 3 
//Explanation: For k = 19 we can use 1 + 5 + 13 = 19.

var k = 5
console.log(findMinFibonacciNumbers(4));


//Runtime: 196 ms, faster than 12.00% of JavaScript online submissions for Find the Minimum Number of Fibonacci Numbers Whose Sum Is K.
//Memory Usage: 47.4 MB, less than 6.00% of JavaScript online submissions for Find the Minimum Number of Fibonacci Numbers Whose Sum Is K.

//Runtime: 84 ms, faster than 90.00% of JavaScript online submissions for Find the Minimum Number of Fibonacci Numbers Whose Sum Is K.
//Memory Usage: 40.7 MB, less than 24.00% of JavaScript online submissions for Find the Minimum Number of Fibonacci Numbers Whose Sum Is K.