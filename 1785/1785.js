/**
 * @param {number[]} nums
 * @param {number} limit
 * @param {number} goal
 * @return {number}
 */
 var minElements = function(nums, limit, goal) {
     var retval = 0;

    nums.forEach(element => {
        goal-= element;
    });
    var absGoal = Math.abs(goal)

    retval+=Math.ceil(absGoal/limit);
    return retval;
};

 

//Example 1:
//Input: nums = [1,-1,1], limit = 3, goal = -4
//Output: 2
//Explanation: You can add -2 and -3, then the sum of the array will be 1 - 1 + 1 - 2 - 3 = -4
//
//Example 2:
//Input: nums = [1,-10,9,1], limit = 100, goal = 0
//Output: 1

var nums = [1,-1,1], limit = 3, goal = -4;

console.log(minElements(nums,limit,goal))


//Runtime: 104 ms, faster than 59.38% of JavaScript online submissions for Minimum Elements to Add to Form a Given Sum.
//Memory Usage: 49.3 MB, less than 71.88% of JavaScript online submissions for Minimum Elements to Add to Form a Given Sum.