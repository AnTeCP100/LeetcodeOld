/**
 * @param {string} p
 * @return {number}
 */
 var findSubstringInWraproundString = function(p) {
     /* asc2 a to z is 97~122*/
    /*fromCharCode and charCodeAt*/
    var nowLen = 1;
    var fin = [];
    var retval = 0;
    var nowCode,nextCode;
    for(var i =p.length-1;i>=0;i--){
        if(fin.includes(p[i])){
            continue;
        }
        nowLen=1;
        nowCode = p[i].charCodeAt();
        
        while(true){
            nextCode = (nowCode-1)<97?122:nowCode-1;
            var newChar = String.fromCharCode(nextCode);
            if(p.includes(newChar))
            {
                if(p.indexOf(newChar)>i){
                    break;
                }
                nowLen++;
            }else{
                break;
            }
        }

        fin.push(p[i]);
        retval+=nowLen
    }
    return retval;
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