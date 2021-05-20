#define _CRT_SECURE_NO_WARNINGS
#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include "../method.h"


int countSubstrings(char * s, char * t){

    

    int len1= strlen(s);
    printf("%d\n",len1);
    int len2= strlen(t);
    printf("%d\n",len2);
    char *newp1 = (char*)malloc((5));
    char *newp2 = (char*)malloc((5));
    newp1[4]='#';
    int len3= strlen(newp1);
    printf("%d\n",len3);
    int len4= strlen(newp2);
    printf("%d\n",len4);
    
    strncpy(newp1,s,len1);
    memmove(newp1,newp1+1,len1);
    newp1[0] ='#';
    newp1[len1+1]='#';
    printf("%s\n",newp1);  
    strncpy(newp2,t,len2);
    memmove(newp2,newp2+1,len2);
    newp2[0] ='#';
    newp2[len2+1]='#';
    printf("%s\n",newp2);


    int m = 105;
    int **dp1,**dp2;
    dp1= (int **)malloc(m*sizeof(void *));
    dp2= (int **)malloc(m*sizeof(void *));
    for (int i=0; i<m; i++){
        dp1[i]=calloc((105),sizeof(int));
        dp2[i]=calloc((105),sizeof(int));
    }
    


    //int dp1[100][100],dp2[100][100];
    for(int i = 0;i<len1;++i)
        for(int j = 0;j<len2;++j){
            //printf("A i:%d, j:%d s:%c, t:%c\n",i,j,s[i],t[j]);
            if(s[i]==t[j]){
                //printf("B i:%d, j:%d s:%c, t:%c\n",i,j,s[i],t[j]);
                if(i==0||j==0){
                    dp1[i][j] = 1;
                }else{
                    printf("B dp1[i-1][j-1]:%d \n",dp1[i-1][j-1]);
                    dp1[i][j] = dp1[i-1][j-1]+1;
                    printf("C dp1[i][j]:%d \n",dp1[i][j]);
                }
            }else{
                dp1[i][j]=0;
            }
        }

     for(int i = len1-1;i>=0;--i)
        for(int j = len2-1;j>=0;--j){
            //printf("C i:%d, j:%d s:%c, t:%c\n",i,j,s[i],t[j]);
            if(s[i]==t[j]){
                //printf("D i:%d, j:%d s:%c, t:%c\n",i,j,s[i],t[j]);
                if(i==len1-1||j==len2-1){
                    dp2[i][j] = 1;
                }else{
                    printf("D dp1[i-1][j-1]:%d \n",dp2[i+1][j+1]);
                    dp2[i][j] = dp2[i+1][j+1]+1;
                    printf("E dp1[i][j]:%d \n",dp2[i][j]);
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
                //if(i==0){
                //    printf("I=0 [i]:%d, [j]:%d [s]:%c, [t]:%c, [dp2]:%d, [dp2+1]:%d\n",i,j,s[i],t[j],dp2[i][j],dp2[i+1][j+1]);
                //    result += j==len2-1? 1:dp2[i+1][j+1]+1;
                //}else if(j==0){
                //    printf("J=0 [i]:%d, [j]:%d [s]:%c, [t]:%c, [dp2]:%d, [dp2+1]:%d\n",i,j,s[i],t[j],dp2[i][j],dp2[i+1][j+1]);
                //    result += i==len1-1? 1:dp2[i+1][j+1]+1;
                //}else if(i==len1-1){
                //    printf("i==len1-1 [i]:%d, [j]:%d [s]:%c, [t]:%c, [dp1-1]:%d, [dp2]:%d\n",i,j,s[i],t[j],dp1[i-1][j-1],dp1[i][j]);
                //    result += i==0? 1:dp1[i-1][j-1]+1;
                //}else if(j==len2-1){
                //    printf("j==len2-1 [i]:%d, [j]:%d [s]:%c, [t]:%c, [dp1-1]:%d, [dp2]:%d\n",i,j,s[i],t[j],dp1[i-1][j-1],dp1[i][j]);
                //    result += j==0? 1:dp1[i-1][j-1]+1;
                //}else{
                //    printf("normal [i]:%d, [j]:%d [s]:%c, [t]:%c, [dp1-1]:%d, [dp2]:%d\n",i,j,s[i],t[j],dp1[i-1][j-1],dp1[i+1][j+1]);
                //    result +=(dp1[i-1][j-1])*(dp2[i+1][j+1]+1);
                //}


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