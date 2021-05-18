#include <stdio.h>
#include <math.h>
#include "../method.h"
int rotatedDigits(int n){
    int ex[10]={0,0,1,-1,-1,1,1,-1,0,1};
    int len = floor(log10(n)) + 1;
    int nArr[len];
    int result = 0;
    int flag = 0;
    for(int transCount = 0;transCount<len;++transCount){
        nArr[transCount] = n%10;
        n /=10;
    }

    for(int loop = len-1;loop>=0;--loop){
        printf("loop : %d\n", loop);
        int g = 0,s = 0,d = nArr[loop];
        for(int count = 0;count < d;++count){
            printf("count : %d\n", count);
            if(ex[count]==1)++g;
            if(ex[count]==0)++s;
        }
        printf("s : %d\n", s);
        result += (g + s) * pow(7, loop);

        if (flag==0) result -= s * pow(3, loop);
        if (ex[d] == -1) return result;
        if (ex[d] == 1) flag = 1;
        printf("result : %d\n", result);
    }
    return (flag==1 && ex[nArr[0]]>-1)? ++result:result;
}

int IMBIG(){
    int input;
    scanf("%d", &input);
    printf("%d",rotatedDigits(input));
    return 0;
}