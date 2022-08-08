/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
private:
    int sum      = 0;
    int maxFloor = -1;
public:   
    void makeSv(TreeNode* root,int nowFloor)
    {      
        //update
        if(nowFloor>maxFloor)
        {
            maxFloor = nowFloor;
            sum=root->val;
        }else if (nowFloor==maxFloor)
        {
            sum+=root->val;
        }
            
        
        if(root->left != NULL)
        {
            makeSv(root->left,nowFloor+1);
        }
        if(root->right != NULL)
        {
            makeSv(root->right,nowFloor+1);
        }
             
    }
    
    int deepestLeavesSum(TreeNode* root) {

        makeSv(root,0);
        return sum;
    }
};