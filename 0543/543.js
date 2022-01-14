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
 * @return {number}
 */
 var diameterOfBinaryTree = function(root) {
    var maxnum = 0;
    var findPath  = function(root)
    {
        if (!root) return 0
        
        var left =findPath(root.left)
        var right = findPath(root.right)
    
        maxnum = Math.max(left + right, maxnum)
        
        return Math.max(left, right) + 1//left or right and plus self
    }
    findPath(root);
    return maxnum
};

//Runtime: 111 ms, faster than 31.48% of JavaScript online submissions for Diameter of Binary Tree.
//Memory Usage: 42.3 MB, less than 84.10% of JavaScript online submissions for Diameter of Binary Tree.
