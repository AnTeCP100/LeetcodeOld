#include <stdio.h>
#include <stdlib.h>
#include "../method.h"


int *father;

int find_root(int x){
    if(x == father[x])return x;
    return find_root(father[x]);
}
void merge(int x, int y ){
    int temp1 = find_root(x);
    int temp2 = find_root(y);
    father[temp1] = temp2;
}

int minimumHammingDistance(int* source, int sourceSize, int* target, int targetSize, int** allowedSwaps, int allowedSwapsSize, int* allowedSwapsColSize){
    
    int len1 = sourceSize;
    int len2 = allowedSwapsSize;
    father=calloc((len1),sizeof(int));

    for(int i = 0; i < len2; i++){
        merge(allowedSwaps[i][0], allowedSwaps[i][1]);
    }
    
    //for i=0 to target length
    //for j=0 to source length
    // if t[i] = j[0]
    return 0;
}

int IMBIG(){
    return 0;
} 