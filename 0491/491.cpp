
#include <iostream>
#include <vector>
#include <string>

using namespace std;

class Solution {
public:
     void dfsFunc(vector<int>& path, vector<int>& nums, vector<vector<int>>& res, int index)
     {
        //First check the result
        if(path.size()>1) res.push_back(path);

        set<int> used;

        for(int i = index; i<nums.size(); i++){
            if(used.find(nums[i])!=used.end()) continue;
            if(path.size()==0 || nums[i]>=*(path.end()-1)){
                used.insert(nums[i]);
                path.push_back(nums[i]); 
                dfsFunc(path, nums, res, i+1);
                path.erase(path.end()-1);
            }
        }
     }
    vector<vector<int>> findSubsequences(vector<int>& nums) {
        vector<vector<int>> ret;
        vector<int> path;
        dfsFunc(path, nums,ret, 0 );
        return ret;

    }
};
