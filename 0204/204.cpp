#include <iostream>
#include <vector>
#include <string>
#include <cmath>

using namespace std;


int countPrimes(int n) 
{
   // Fucking Time Limit
    /*
    int ret = 0;
    //less than????????????????????????????
    int target = n-1;
    //loop for find n~2
    while(target > 1)
    {
        ret+=1;
        //check the target is prime
        for(int base = 2; base <= sqrt(target);base++)
        {
            if(target%base == 0)
            {
                 ret-=1;
                break;
            }
        }
        target--;
    }
    return ret;
    */


    //Sieve of Eratosthenes????
    int ret = 0 ;

    //less than????????????????????????????
    vector<bool> primeArr(n,false);
    for(int pos = 2; pos<n;pos++)
    {
        
        if(primeArr[pos] == false)
        {
            for(int start = 2; start*pos < n; start++)
            {
                primeArr[start*pos] = true;
            }
            ret++;
        }
    }

    return ret;
}


int main()
{
    
}