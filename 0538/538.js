/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


 //The left subtree of a node contains only nodes with keys less than the node's key.
 //The right subtree of a node contains only nodes with keys greater than the node's key.
 //Both the left and right subtrees must also be binary search trees.




/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var convertBST = function(root) {
   
    var now_sum = 0;

    var convert_func = function(node)
    {
        //check node is null
        if(node == null) return;

        //to the right (find the largest)
        convert_func(node.right)

        //convert now value 
        node.val+=now_sum;
        now_sum = node.val;

        //go to the left
        convert_func(node.left)
    }

    convert_func(root);
    return root
};