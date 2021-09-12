/**
 * @param {number[]} citations
 * @return {number}
 */
 var hIndex = function(citations) {
    var len = citations.length;
    var left = 0,right = len-1;
    while(left<=right)
    {
        var mid =  Math.floor(0.5* (left+right))
        if(citations[mid]==len-mid) return len-mid;
        else if(citations[mid]>(len-mid)) right = mid-1;
        else left= mid+1;
    } 
    return len-left;
};


//Runtime: 78 ms, faster than 55.88% of JavaScript online submissions for H-Index II.
//Memory Usage: 41.7 MB, less than 70.59% of JavaScript online submissions for H-Index II.