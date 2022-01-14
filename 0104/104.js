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
 var maxDepth = function(root) {

    if(root == null) return 0

    let leftval = root.left!=null?maxDepth(root.left):0
    let rightval = root.right!=null?maxDepth(root.right):0
    return Math.max(leftval,rightval)+1

};



//Runtime: 80 ms, faster than 76.38% of JavaScript online submissions for Maximum Depth of Binary Tree.
//Memory Usage: 41.4 MB, less than 86.33% of JavaScript online submissions for Maximum Depth of Binary Tree.