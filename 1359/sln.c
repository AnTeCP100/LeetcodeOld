// (2n)!/(2^n)

#include <stdio.h>
#include <stdlib.h>
#include "../method.h"
#define mod 1000000007

int countOrders(int n){
    long long int sum=1;
    for(int i=1;i<2*n;++i){
        sum *=i;
        if(i%2==0){
            sum/=2;
        }
        sum %= mod;
    }
    return (int)sum%mod;
}

int IMBIG(){
    return 0;
}