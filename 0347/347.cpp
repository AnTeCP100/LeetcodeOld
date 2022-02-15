class Solution {
public:
    struct intArr
    {
        int num;
        int count;
    };
    static bool sort_func(intArr a, intArr b)
    {
        //cout<<a.count<<b.count<<"\n";
        return !(a.count<b.count);
    }
    
    vector<int> topKFrequent(vector<int>& nums, int k) {
        vector<int> ret;
        vector<struct intArr> save;
        int curNum = 0,curCount =0;
        
        //sort the nums
        sort(nums.begin(), nums.end());
        
        //init first 
        curNum = nums[0];
        curCount = 1;
        
        //loop all count 
        for(int i = 1;i<nums.size();i++)
        {
            if(nums[i] != curNum )
            {
                struct intArr addi;
                addi.num = curNum;
                addi.count = curCount;
                save.push_back(addi);
                
                curNum = nums[i];
                curCount = 1;
            }else
            {
                curCount++;
            }
        }
        //last one
        struct intArr addi;
        addi.num = curNum;
        addi.count = curCount;
        save.push_back(addi);
        
        
        //sort the vector for checking 
        sort(save.begin(),save.end(),sort_func);
        
        //make ans vector
        for(int i = 0;i<k;i++)
        {
            //cout<<save[i].num<<"\n";
            ret.push_back(save[i].num);
        }
        
        return ret;
    }
};