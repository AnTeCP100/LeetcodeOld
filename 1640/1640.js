/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {

    /* let pieces trans to long lenth to short lenth*/
    pieces.sort(function(a, b) {
        return b.length -a.length ;
    });


    var pos = [];
    var res = true;
    for(var a = 0;a<pieces.length;a++){
        var len = pieces[a].length;
        console.log(len);
        var idx = arr.indexOf(pieces[a][0]);
        while (idx != -1) {
            pos.push(idx);
            idx = arr.indexOf(pieces[a][0], idx + 1);
        }
        console.log(pos);
        if(pos.length<1){
            return false;}
        for(var i = 0;i<pos.length;i++){
            for(var j = 0;j<pieces[a].length;j++){    
                if(arr[pos[i]+j]!=pieces[a][j]){
                    return false;
                }
            }
        }
        pos = [];
    }
    return res;
};
//Input: arr = [15,88], pieces = [[88],[15]]
//Output: true
//Explanation: Concatenate [15] then [88]
//
//
//Input: arr = [49,18,16], pieces = [[16,18,49]]
//Output: false
//Explanation: Even though the numbers match, we cannot reorder pieces[0].
//
//
//Input: arr = [91,4,64,78], pieces = [[78],[4,64],[91]]
//Output: true
//Explanation: Concatenate [91] then [4,64] then [78]
//
//
//Input: arr = [1,3,5,7], pieces = [[2,4,6,8]]
//Output: false

var arr = [12,21,11,22]
var pieces = [[12,21],[1,2]]
console.log(canFormArray(arr,pieces));



//Runtime: 80 ms, faster than 71.43% of JavaScript online submissions for Check Array Formation Through Concatenation.
//Memory Usage: 39.1 MB, less than 53.06% of JavaScript online submissions for Check Array Formation Through Concatenation.