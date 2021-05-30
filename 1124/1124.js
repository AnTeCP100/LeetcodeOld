/*can not use Dynamic programming*/
/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function(hours) {
    /* change hours to an easy cal array*/
    var checkArr = hours.map(x=>{
        if(x>8)return 1;
        else return -1;
    })
    var cur = 0;var res = 0;var dict={}
    /* caculate from firt current is good or bad*/
    checkArr.forEach((element,index) => {
        cur+=element;
        /*if currenrt is good record it*/
        if(cur>0){
            res = index+1
        }else{
            /*record if the current value not exist , record it */
            if(!dict.hasOwnProperty(cur)){
                dict[cur] = index;
            }
            /*if current is bad , check out if there have worse than current and remove it */
            if(dict.hasOwnProperty(cur-1)){
                res = Math.max(res,index-dict[cur-1]);   
            }
        }
    });
    //console.log(checkArr);
    return res
};

console.log(longestWPI([6,6,8]));

/*
Runtime: 100 ms, faster than 83.33% of JavaScript online submissions for Longest Well-Performing Interval.
Memory Usage: 43 MB, less than 20.83% of JavaScript online submissions for Longest Well-Performing Interval.
*/