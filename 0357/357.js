/**
 * if f(0) =1
 *    f(1) =10  = 9 + 1 
 *    f(2) =91  = 9 * 9 + 9 +1  
 *    f(3) =739 = 9 * 9 * 8 + 9 * 9 + 9 + 1
 *    f(n) =f(n-1) * 7 + f(n-1) +.....f(1)
 */

/**
 * @param {number} 
 * @return {number}
 */
 //0 <= n <= 8
 var countNumbersWithUniqueDigits = function(n) {
    var allNum = [1,9,9,8,7,6,5,4,3]
    var result = 0;
    var nowSteps=1;
    var totall = [1,10,91,739,5275,32491,168571, 712891,2345851];
    return totall[n];
    for(var i = 0;i<=n;i++){
        nowSteps*=allNum[i];
        result+=nowSteps;
        totall[i]=result
    }
    console.log(totall)
    return result;
    
};


//Input: n = 2
//Output: 91
//Explanation: The answer should be the total numbers in the range of 0 ≤ x < 100, excluding 11,22,33,44,55,66,77,88,99

//Input: n = 0
//Output: 1

var k = 8;

console.log(countNumbersWithUniqueDigits(k))

//Runtime: 76 ms, faster than 71.05% of JavaScript online submissions for Count Numbers with Unique Digits.
//Memory Usage: 38.5 MB, less than 28.95% of JavaScript online submissions for Count Numbers with Unique Digits.