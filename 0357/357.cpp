
#include <iostream>
#include <vector>
#include <string>

using namespace std;

class Solution {
public:
    int countNumbersWithUniqueDigits(int n) {
        if(n == 0)
            return 1;
        if(n == 1)
            return 10;

        int ret = 10;
        
        for (int i=2; i<=n; i++) {
            
            int tmp=81;

            //Check every 10 powers
            //100~1000,1000~10000,10000~......
            for (int j=2; j<i; j++)
                tmp*=(9-j+1);
            ret+=tmp;
        }
        return ret;
    }
};
