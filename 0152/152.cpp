
#include <iostream>
#include <vector>
#include <string>

using namespace std;

class Solution {
public:
    int maxProduct(vector<int>& nums) {
        
        int ret = nums[0];
        int curMin = nums[0], curMax = nums[0];
        for(int p = 1;p<nums.size();p++)
        {
            int i = nums[p];
            int prevMax = curMax;

            // prev not to choose or prev max  or prev min
            curMax = max(i,max(curMax*i,curMin*i));
            curMin = min(i,min(prevMax*i,curMin*i));

            //update the awnser
            ret = max(ret,curMax);
        }
        return ret;
    }
};
