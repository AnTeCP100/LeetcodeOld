/**
 * @param {string} p
 * @return {number}
 */
 var findSubstringInWraproundString = function(p) {
    let len = p.length;
    var map = [];
    var retVal = 0;
    for(var i = len-1;len>=0;i++){
        var checkPoint = p.indexOf(p[i]);
        console.log(checkPoint);
        var offset = i-checkPoint;
        if(offset==0){
            retVal+=i+1;
        }
        
    }
};




//Input: p = "a"
//Output: 1
//Explanation: Only the substring "a" of p is in s.


//Input: p = "cac"
//Output: 2
//Explanation: There are two substrings ("a", "c") of p in s.


//Input: p = "zab"
//Output: 6
//Explanation: There are six substrings ("z", "a", "b", "za", "ab", and "zab") of p in s.

var s= "cac"
console.log(findSubstringInWraproundString(s))