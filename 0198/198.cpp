
#include <iostream>
#include <vector>
#include <string>

using namespace std;

class Solution {
public:
    int rob(vector<int>& nums) {
        //easy dp 
        if(nums.size()==0) return 0;
        if(nums.size()==1) return nums[0];
        vector<int> robVct ;
        robVct.push_back(nums[0]);
        robVct.push_back(max(nums[0],nums[1]));
        for(int pos = 2;pos<nums.size();pos++)
        {
            int temp = max(robVct[pos-1],robVct[pos-2]+nums[pos]);
            robVct.push_back(temp);
        }
        return robVct[nums.size()-1];
        
    }
};

