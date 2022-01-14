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
    var val_arr = []
    var arr_len = 0;

    //function for put the node value to the array
    var init_val_arr_func = function(node)
    {
        val_arr.push(node.val)
        if(node.left !== null)
        {
            init_val_arr_func(node.left)
        }
        if(node.right !== null)
        {
            init_val_arr_func(node.right)
        }
    }

    //function for convert the node 
    var convert_func = function(node)
    {
        var idx = val_arr.indexOf(node.val)
        for(var i = idx+1;i<arr_len;i++)
        {
            node.val+=val_arr[i]
        }
        if(node.left !== null)
        {
            convert_func(node.left)
        }
        if(node.right !== null)
        {
            convert_func(node.right)
        }
    }

    //if first is null
    if(root ==null)
        return root

    //init array for every node value  
    init_val_arr_func(root)

    //sort
    val_arr.sort((a,b)=>{return a-b})
    arr_len = val_arr.length
    //console.log(val_arr)

    convert_func(root)

    return root
};