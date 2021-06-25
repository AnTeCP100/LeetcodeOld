/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 /*var constructMaximumBinaryTree = function(nums) {
    var bigNum = Math.max(...nums)
    var bigNumIdx = nums.indexOf(bigNum);
    var retVal = new TreeNode(bigNum);
    console.log(bigNumIdx);
    if(bigNumIdx > 0){
        var leftCut = nums.slice();
        var leftNums = leftCut.slice(0,bigNumIdx);
        console.log(leftNums);
        retVal.left = constructMaximumBinaryTree(leftNums);
    }
    if(bigNumIdx < nums.length-1){
        var rightCut = nums.slice();
        var rightNums = rightCut.slice(bigNumIdx+1,rightCut.length);
        console.log(rightNums);
        retVal.right = constructMaximumBinaryTree(rightNums);
    }
    return retVal;
};*/


var constructMaximumBinaryTree = function(nums) {
    var travel = function(left, right) {
        var maxIndex = left;
        for(var i = maxIndex; i < right; i++) {
            if(nums[i] > nums[maxIndex]) maxIndex = i;
        }
        var rootNode = new TreeNode(nums[maxIndex]);
        rootNode.left = left >= maxIndex ? null : travel(left, maxIndex);
        rootNode.right = maxIndex + 1 >= right ? null : travel(maxIndex + 1, right);
        return rootNode;
    }
    return travel(0, nums.length);
};

//Runtime: 584 ms, faster than 5.58% of JavaScript online submissions for Maximum Binary Tree.
//Memory Usage: 49.7 MB, less than 5.95% of JavaScript online submissions for Maximum Binary Tree.

//Runtime: 112 ms, faster than 89.22% of JavaScript online submissions for Maximum Binary Tree.
//Memory Usage: 46 MB, less than 12.64% of JavaScript online submissions for Maximum Binary Tree.