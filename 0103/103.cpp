#include <iostream>
#include <vector>
#include <string>

using namespace std;
public :
public:
    vector<vector<int>> ret;
void method(int floor,TreeNode* node){
    if(ret.size()<(floor+1))
    {
        vector<int> nodeRet;
        ret.push_back(nodeRet);
    }
    ret[floor].insert(ret[floor].begin(),node->val);
    if(node->right != NULL)
    {
        method(floor+1,node->right);
    }
    if(node->left != NULL)
    {
        method(floor+1,node->left);
    }
}
vector<vector<int>> zigzagLevelOrder(TreeNode* root) {
    if(root != NULL)
    {
         method(0,root);
    }
    for(int i = 1; i<ret.size();i+=2)
    {
        reverse(ret[i].begin(), ret[i].end());
    }
    return ret;
}
struct TreeNode {
     int val;
     TreeNode *left;
     TreeNode *right;
     TreeNode() : val(0), left(nullptr), right(nullptr) {}
     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 };
int main()
{
    ios::sync_with_stdio(false);
    cin.tie(0);
}