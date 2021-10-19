/**
 * @param {string[]} strs
 * @return {string[][]}
 */
//use map
 var groupAnagrams_map = function(strs) {
    var number = 0;
    var retval = [];
    var myMap = new Map();
    for(var str of strs)
    {
        var sortStr = str.split('').sort().join('')
        var sortVal= myMap.get(sortStr);
        console.log(str,sortStr,sortVal);
        if(typeof(sortVal)=='undefined')
        {
            myMap.set(sortStr, number);
            retval.push([str]);
            number++;
        }
        else{
            retval[sortVal].push(str);
        }
    }
    return retval;
};

//Runtime: 169 ms, faster than 47.79% of JavaScript online submissions for Group Anagrams.
//Memory Usage: 49.6 MB, less than 74.48% of JavaScript online submissions for Group Anagrams.



//originall
 var groupAnagrams = function(strs) {
    //two array : one is awnser ,one is for compare
    var retval = []
    var secretArr = [];
    var len = strs.length-1;

    if(strs.length<1) return null;

    for(var n = len;n>=0;n--)
    {
        //sort string 
        var tempStr = strs[n].split('').sort().join('')
        var secretIdx = secretArr.indexOf(tempStr)
        if(secretIdx> -1)
        {
            //push to old
            retval[secretIdx].push(strs[n])
        }
        else{
            //add new
            retval.push([strs[n]]);
            secretArr.push(tempStr);
        }
    }
    return retval;


};

//Runtime: 522 ms, faster than 5.77% of JavaScript online submissions for Group Anagrams.
//Memory Usage: 47.4 MB, less than 99.69% of JavaScript online submissions for Group Anagrams.

var strs = ["eat","tea","tan","ate","nat","bat"]

console.log(groupAnagrams(strs))
console.log(groupAnagrams_map(strs))