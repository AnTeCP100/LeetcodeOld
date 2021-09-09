/**
 * @param {number} startValue
 * @param {number} target
 * @return {number}
 */
 var brokenCalc_1 = function(startValue, target) {
    var retval = 0;
    
    //multipy one time need to subtract 1 twice time;
    //so need to find the minimum number of steps let target smaller than startValue
    while(target > startValue) {
        retval++;
        console.log(target%2,target)
        target = target%2==0?target/2:target+1;
    }
    return retval+(startValue-target);
};

/**
 * @param {number} startValue
 * @param {number} target
 * @return {number}
 */
 var brokenCalc = function(startValue, target) {
    if(startValue>=target)
    {
        return startValue-target;
    }
    target%2 ?target+=1: target/=2;
    return brokenCalc(startValue,target)+1;
};

//Example 1:
//Input: startValue = 2, target = 3
//Output: 2
//Explanation: Use double operation and then decrement operation {2 -> 4 -> 3}.

//Example 2:
//Input: startValue = 5, target = 8
//Output: 2
//Explanation: Use decrement and then double {5 -> 4 -> 8}.

//Example 3:
//Input: startValue = 3, target = 10
//Output: 3
//Explanation: Use double, decrement and double {3 -> 6 -> 5 -> 10}.

//Example 4:
//Input: startValue = 1024, target = 1
//Output: 1023
//Explanation: Use decrement operations 1023 times.

var startValue = 1, target = 100
console.log(brokenCalc(startValue,target));

//Runtime: 100 ms, faster than 12.50% of JavaScript online submissions for Broken Calculator.
//Memory Usage: 38.4 MB, less than 93.75% of JavaScript online submissions for Broken Calculator.

//Runtime: 105 ms, faster than 12.50% of JavaScript online submissions for Broken Calculator.
//Memory Usage: 38.1 MB, less than 100.00% of JavaScript online submissions for Broken Calculator.