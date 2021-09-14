/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
    
    var retList = [];
    var ret = [];


    var findTheAws = function(nowIndex,nowCan,nowTar,retList)
    {
        if(nowIndex>=nowCan.length || nowTar < 0)
        {
            //there is no match answer
            return;
        }
        if(nowTar == 0)
        {
            //push the right answer to ret list
            //var addList = retList.slice();
            ret.push(retList.slice());
        }
        
        for(var count = nowIndex;count<nowCan.length;count++)
        {
            // push my self to now list
            retList.push(nowCan[count]);
            findTheAws(count,nowCan,nowTar-nowCan[count],retList);
            //remove myself for next use
            retList.pop();
        }
    }

    findTheAws(0,candidates,target,retList);

    return ret;
    
};

//Example 1:
//Input: candidates = [2,3,6,7], target = 7
//Output: [[2,2,3],[7]]
//Explanation:
//2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
//7 is a candidate, and 7 = 7.
//These are the only two combinations.
//
//Example 2:
//Input: candidates = [2,3,5], target = 8
//Output: [[2,2,2,2],[2,3,3],[3,5]]
//
//Example 3:
//Input: candidates = [2], target = 1
//Output: []
//
//Example 4:
//Input: candidates = [1], target = 1
//Output: [[1]]
//
//Example 5:
//Input: candidates = [1], target = 2
//Output: [[1,1]]
var candidate = [2,3,6,7]
var target = 7

console.log(combinationSum(candidate,target));



//Runtime: 92 ms, faster than 61.41% of JavaScript online submissions for Combination Sum.
//Memory Usage: 41.2 MB, less than 83.62% of JavaScript online submissions for Combination Sum.