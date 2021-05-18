#include <stdio.h>
#include <string.h>
#include "../method.h"
typedef unsigned long ulong;

int countHomogenous(char * s){
    int m = 1000000007;
    ulong len = strlen(s);
    ulong result=0,addVal = 0,first=0;
    char nowVal = s[0];
    for(ulong count=0;count < len;++count){
        //printf("%c, %c\n",nowVal,s[count]);
        if(nowVal != s[count]){
            ulong min = count-first;
            addVal = min>1?(min+1)*min/2:1;
            //printf("%d",addVal);
            result+=addVal;
            first=count;
            nowVal = s[count];
        }
        if(count==len-1){
            ulong min = count-first+1;
            addVal = min>1?(min+1)*min/2:1;
            result+=addVal;
            if(result>m){
                result=result%m;
            }
        }
        //printf("%d\n",Vcount);     
    }
    
    return result;
}
int IMBIG(){
    char *str="abbcccaa";
    //scanf("%s",str);
    //printf("%s",str);
    printf("result is %d",countHomogenous(str));
    return 0;
}