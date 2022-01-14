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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoMaxTree = function(root, val) {
    if(val>root.val){
        var retVal = new TreeNode(val,root)
        return retVal;
    }
    if(root.right ==null){
        root.right = new TreeNode(val);
    }else{
        root.right = insertIntoMaxTree(root.right,val);
    }
    return root;
}


//Runtime: 80 ms, faster than 87.88% of JavaScript online submissions for Maximum Binary Tree II.
//Memory Usage: 40.6 MB, less than 18.18% of JavaScript online submissions for Maximum Binary Tree II.