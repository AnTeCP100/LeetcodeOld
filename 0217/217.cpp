#include <iostream>
#include <vector>
#include <string>
#include <unordered_set>

using namespace std;

bool containsDuplicate(vector<int>& nums) {
        std::unordered_set<int> ret;      
        for(int i : nums)
        {
            if(ret.insert(i).second ==false)return true;
        } 
        return false;
}

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(0);
}