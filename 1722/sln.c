//https://www.youtube.com/watch?v=KLiowlHVMfw&ab_channel=HuifengGuan
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>
#include "../method.h"

//First let allowedSwaps in Union-find
int find_root(int *z,int val){
    if(val == z[val])return val;
    else z[val]=find_root(z,z[val]);
    return z[val];
}
void merge(int *z,int a ,int b){
    int temp1 = find_root(z,a);
    int temp2 = find_root(z,b);
    if(temp1!=temp2)z[temp2] = temp1;
}


int minimumHammingDistance(int* source, int sourceSize, int* target, int targetSize, int** allowedSwaps, int allowedSwapsSize, int* allowedSwapsColSize){

    //Union table & initial talbe
    int *father=(int*)malloc(sourceSize*sizeof(int));
    int *switchSame = (int*)calloc(sourceSize,sizeof(int));
    for(int i=0;i < sourceSize;++i){
        father[i]=i;
    }
    for(int i = 0; i < allowedSwapsSize; ++i){   
        //printf("allowedSwaps[%d] : %d,%d\n",i,allowedSwaps[i][0],allowedSwaps[i][1]);       
        merge(father,allowedSwaps[i][0], allowedSwaps[i][1]);
        
    }
    for(int i=0;i < sourceSize;++i){
        father[i]=find_root(father,i);
    }
    int result=sourceSize;
    for(int srcLocate= 0;srcLocate < sourceSize;++srcLocate){
        for(int tarLocate = 0;tarLocate< targetSize;++tarLocate){  
            if(switchSame[tarLocate]==0){      
                if(source[srcLocate]==target[tarLocate]){            
                    if(father[srcLocate]==father[tarLocate])
                    {
                        --result;  
                        switchSame[tarLocate]++;
                        break;
                    }              
                }                                    
            }     
        };
    }
    
    return result;
}

int IMBIG(){
//[2,3,1]
//[1,2,2]
//[[0,2],[1,2]]
    
    int srcArr[20]={50,46,54,35,18,42,26,72,75,47,50,4,54,21,18,18,61,64,100,14};
    int *source =srcArr;
    int tarArr[20]={83,34,43,73,61,94,10,68,74,31,54,46,28,60,18,18,4,44,79,92};
    int *target=tarArr;
    
    int Arr01[2] ={1,8};
int Arr02[2] ={14,17};
int Arr03[2] ={3,1};
int Arr04[2] ={17,10};
int Arr05[2] ={18,2};
int Arr06[2] ={7,12};
int Arr07[2] ={11,3};
int Arr08[2] ={1,15};
int Arr09[2] ={13,17};
int Arr10[2] ={18,19};
int Arr11[2] ={0,10};
int Arr12[2] ={15,19};
int Arr13[2] ={0,15};
int Arr14[2] ={6,7};
int Arr15[2] ={7,15};
int Arr16[2] ={19,4};
int Arr17[2] ={7,16};
int Arr18[2] ={14,18};
int Arr19[2] ={8,10};
int Arr20[2] ={17,0};
int Arr21[2] ={2,13};
int Arr22[2] ={14,10};
int Arr23[2] ={12,17};
int Arr24[2] ={2,9};
int Arr25[2] ={6,15};
int Arr26[2] ={16,18};
int Arr27[2] ={2,16};
int Arr28[2] ={2,6};
int Arr29[2] ={4,5};
int Arr30[2] ={17,5};
int Arr31[2] ={10,13};
int Arr32[2] ={7,2};
int Arr33[2] ={9,16};
int Arr34[2] ={15,5};
int Arr35[2] ={0,5};
int Arr36[2] ={8,0};
int Arr37[2]  ={11,12};
int Arr38[2] ={9,7};
int Arr39[2] ={1,0};
int Arr40[2] ={11,17};
int Arr41[2] ={4,6};
int Arr42[2] ={5,7};
int Arr43[2] ={19,12};
int Arr44[2] ={3,18};
int Arr45[2] ={19,1};
int Arr46[2] ={13,18};
int Arr47[2] ={19,6};
int Arr48[2] ={13,6};
int Arr49[2] ={6,1};
int Arr50[2] ={4,2};
    int* swapArr[] ={
        Arr01,
Arr02,
Arr03,
Arr04,
Arr05,
Arr06,
Arr07,
Arr08,
Arr09,
Arr10,
Arr11,
Arr12,
Arr13,
Arr14,
Arr15,
Arr16,
Arr17,
Arr18,
Arr19,
Arr20,
Arr21,
Arr22,
Arr23,
Arr24,
Arr25,
Arr26,
Arr27,
Arr28,
Arr29,
Arr30,
Arr31,
Arr32,
Arr33,
Arr34,
Arr35,
Arr36,
Arr37,
Arr38,
Arr39,
Arr40,
Arr41,
Arr42,
Arr43,
Arr44,
Arr45,
Arr46,
Arr47,
Arr48,
Arr49,
Arr50,
    };
    int **swap=swapArr;
    int a =2;
    int *val = &a;
    int result = minimumHammingDistance(
        source,20,target,20,swap,50,val
    );
    printf("result is \"%d\"\n",result );
    
    return 0;
} 