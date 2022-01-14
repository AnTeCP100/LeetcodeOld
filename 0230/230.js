/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(root, k) {
    var testArr = [];
    var makeArr = function(TreeNodes)
    {
        testArr.push(TreeNode.val);
        if(testArr.left!=null)
            makeArr(testArr.left);
        if(testArr.right!=null)
            makeArr(testArr.right);
    }
    makeArr(root)
    testArr.sort((a,b)=>{return a.value -b.value })
    return testArr[k-1];    
};







//Runtime: 88 ms, faster than 69.45% of JavaScript online submissions for Kth Smallest Element in a BST.
//Memory Usage: 45.6 MB, less than 29.54% of JavaScript online submissions for Kth Smallest Element in a BST.