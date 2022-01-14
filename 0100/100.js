/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
    
    if(p==null || q==null)
    {
        if(p==null&&q==null)
            return true;
        
        return false;
    }
    if(p.val != q.val)
        return false;
    
    if(!(isSameTree(p.left,q.left)) || !(isSameTree(p.right,q.right)))
        return false;
    
    return true;
};


//Runtime: 68 ms, faster than 89.96% of JavaScript online submissions for Same Tree.
//Memory Usage: 40.5 MB, less than 10.33% of JavaScript online submissions for Same Tree.