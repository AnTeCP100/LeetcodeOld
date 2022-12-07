#include <iostream>
#include <vector>
#include <string>

using namespace std;

/*int trailingZeroes(int n) {
    if(n<5)
    {
        return 0;
    }
    int ret = n/5+trailingZeroes(n/5);
    return ret;
}*/


int trailingZeroes(int n) {
    int res = 0;
    while(n>=5) {
        res += n/5;
        n/=5;
    }
    return res;
}

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(0);



}