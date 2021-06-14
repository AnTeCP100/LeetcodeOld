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
 * @param {number} depth
 * @return {TreeNode}
 */
 var addOneRow = function(root, val, depth) {
    var retVal = new TreeNode();
    if(depth<2)
    {
        retVal.val=val;
        retVal.left=root;
    }else{
        retVal = trace(0,root,val,depth)
    }
    return retVal;
};
    

var trace = function(nowFloor,root, val, depth){
    if(nowFloor==depth-2){
        var leftNode = new TreeNode();   
        var rightNode = new TreeNode();
        var leftTmp = root.left;
        var rightTmp = root.right;
        
        leftNode.val = val;
        rightNode.val = val;
        root.left = leftNode;
        root.right=rightNode;
        leftNode.left = leftTmp;
        rightNode.right = rightTmp          
    }else{
        nowFloor=nowFloor+1;
        root.left=root.left==null?null:trace(nowFloor,root.left,val,depth)
        root.right=root.right==null?null:trace(nowFloor,root.right,val,depth)
    }
    return root;  
     
}

//Runtime: 104 ms, faster than 85.37% of JavaScript online submissions for Add One Row to Tree.
//Memory Usage: 44.9 MB, less than 58.54% of JavaScript online submissions for Add One Row to Tree.