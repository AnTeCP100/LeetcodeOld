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
 * @param {number} limit
 * @return {TreeNode}
 */
 var sufficientSubset = function(root, limit) {
    return dfs(root, limit);
};
var dfs = function(root, limit)
{
     if (!root) {
        return null;
    }
    if (!root.left && !root.right) {
        return root.val < limit ? null : root;
    }
    root.left = dfs(root.left, limit - root.val);
    root.right = dfs(root.right, limit - root.val);
    // this node became a new leaf (hence it is insufficient node)
    // remove it by returning null
    if (!root.left && !root.right) {
        return null;
    } else {
        return root;
    }
}