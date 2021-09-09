/**
 * @param {string} s
 * @return {number}
 */
 var numSub = function(s) {
    var s_arr = s.split('');
    var retval = 0; now_s_times = 0;
    var len = s.length;
    var v_mod = 1000000007;
    for(var i =0;i<len;i++)
    {
        if(s_arr[i] == '1')
        {
            now_s_times+=1;
            retval+=now_s_times;
            retval=retval%v_mod;
        }else
        {
            now_s_times = 0;
        }
    }
    return retval;
};
/*
Example 1:
Input: s = "0110111"
Output: 9

Example 2:
Input: s = "101"
Output: 2

Example 3:
Input: s = "111111"
Output: 21

Example 4:
Input: s = "000"
Output: 0

*/

var s = "111111"

console.log(numSub(s));


//Runtime: 72 ms, faster than 100.00% of JavaScript online submissions for Number of Substrings With Only 1s.
//Memory Usage: 42.1 MB, less than 38.10% of JavaScript online submissions for Number of Substrings With Only 1s.