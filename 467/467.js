/**
 * @param {string} p
 * @return {number}
 */
 var findSubstringInWraproundString = function(p) {
     /* asc2 a to z is 97~122*/
    /*fromCharCode and charCodeAt*/
    /*
    !substring need to togeher 
    */
    var pSplit = p.split('')
    var pN = pSplit.map(x=>x.charCodeAt())
    var pLen = pN.length;
    var map = [];
    var nowLen = 0;
    for(var i =0;i<pLen;i++){
        if(i>0&&(pN[i]-pN[i-1]==1||pN[i-1]-pN[i]==25)){
            nowLen++;
        }else{
            nowLen=1;
        }

        if(map[pN[i]]==null){
            map[pN[i]] = nowLen;
        }else{
            map[pN[i]]=Math.max(map[pN[i]],nowLen)
        }
    }
    return map.reduce((x,y)=>x+y);
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

var s= "zab"
console.log(findSubstringInWraproundString(s))


//Runtime: 76 ms, faster than 90.91% of JavaScript online submissions for Unique Substrings in Wraparound String.
//Memory Usage: 42.3 MB, less than 18.18% of JavaScript online submissions for Unique Substrings in Wraparound String.