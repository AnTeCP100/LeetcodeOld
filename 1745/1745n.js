
/**
 * @param {string} s
 * @return {boolean}
 */
var checkPartitioning = function(s)
{
    var len = s.length
    var dp= new Array(2001)
    for(var i = 0;i<len;i++){
        var add = new Array(2001).fill(0)
        add[i]=1;//one char is always right
        dp[i]=add
    }
    console.log(dp);
}



 //Input: s = "abcbdd"
//Output: true
//Explanation: "abcbdd" = "a" + "bcb" + "dd", and all three substrings are palindromes.
//
//Input: s = "bcbddxy"
//Output: false
//Explanation: s cannot be split into 3 palindromes.

var str = "juchzcedhfesefhdeczhcujzzvbmoeombv"
console.log(checkPartitioning(str))