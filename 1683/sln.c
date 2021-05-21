
#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include "../method.h"

// XX[YYYYYZAAAA]W
// XX[YYYYZAAA]W
//if Z is target, 
//Look forward : 


int countSubstrings(char * s, char * t){

    int len1= strlen(s);
    printf("%d\n",len1);
    int len2= strlen(t);
    printf("%d\n",len2);
 
    //Make dp array
    int m = 105;
    int **dp1,**dp2;
    dp1= (int **)malloc(m*sizeof(void *));
    dp2= (int **)malloc(m*sizeof(void *));
    for (int i=0; i<m; i++){
        dp1[i]=calloc((105),sizeof(int));
        dp2[i]=calloc((105),sizeof(int));
    }
    
    for(int i = 0;i<len1;++i)
        for(int j = 0;j<len2;++j){
            if(s[i]==t[j]){
                if(i==0||j==0){
                    dp1[i][j] = 1;
                }else{
                    dp1[i][j] = dp1[i-1][j-1]+1;
                }
            }else{
                dp1[i][j]=0;
            }
        }

     for(int i = len1-1;i>=0;--i)
        for(int j = len2-1;j>=0;--j){
            if(s[i]==t[j]){
                if(i==len1-1||j==len2-1){
                    dp2[i][j] = 1;
                }else{
                    dp2[i][j] = dp2[i+1][j+1]+1;
                }
            }else{
                dp2[i][j]=0;
            }
        }
    int result = 0;
    for(int i = 0;i<len1;++i)
        for(int j = 0;j<len2;++j){

            if(s[i]!=t[j])
            {
                if(i==0||j==0){
                    //printf("A i:%d, j:%d s:%c, t:%c, dp1:%d, dp2:%d\n",i,j,s[i],t[j],dp1[i][j],dp2[i+1][j+1]);
                    result +=dp2[i+1][j+1]+1;
                }else if(i==len1-1||j==len2-1){
                    //printf("B i:%d, j:%d s:%c, t:%c, dp1:%d, dp2:%d\n",i,j,s[i],t[j],dp1[i-1][j-1],dp2[i][j]);
                    result +=dp1[i-1][j-1]+1;
                }else{
                    //printf("C i:%d, j:%d s:%c, t:%c, dp1:%d, dp2:%d\n",i,j,s[i],t[j],dp1[i-1][j-1],dp2[i+1][j+1]);
                    result +=(dp1[i-1][j-1]+1)*(dp2[i+1][j+1]+1);
                }
            }
                
                
        }  
    return result;
}

int IMBIG(){
    char * s = "abbab";
    char * t = "bbbbb";
    printf("%d",countSubstrings(s,t));
    return 0;
}