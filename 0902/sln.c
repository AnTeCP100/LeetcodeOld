#include <stdio.h>
#include <stdlib.h>
#include <math.h> 
#include "../method.h"

void reverse(int *arr, int n)
{
    int *aux=(int*)malloc(n*sizeof(int));
 
    for (int i = 0; i < n; i++) {
        aux[n - 1 - i] = arr[i];
    }
 
    for (int i = 0; i < n; i++) {
        arr[i] = aux[i];
    }
}


int atMostNGivenDigitSet(char ** digits, int digitsSize, int n){

    int result = 0,perCycle=0,_calN= n,arrCount=0;;
    unsigned int length = (int)(log10((float)n)) + 1;

    //arr is an array and curr is pointer to array[0]
    int *arr = (int*)malloc(length*sizeof(int)),* curr = arr;
    
    do {
        *(curr++) = _calN % 10;
        _calN /= 10;
        arrCount++;
    } while (_calN != 0);

    reverse(arr,length);
    for(int count = 0;count <length -1;++count){
        printf("c %d\n", arr[count]);
    }
    
    //n is xxxxxxx , then first can caculate how many pairs in x000000 
    for(int count = 1;count < length;++count){
        result+=(int)pow(digitsSize,count);
    }
    //then we can caculate above x000000
    for (int i = 0; i < length; ++i) 
    {
        int c = arr[i];
        for (int j = digitsSize - 1; j >= 0; --j)
        {
            int d = ((*digits)[j])-48;
            if (d > c) {
                if (j == 0) return result; 
                // J is Zero: all number in digit is bigger than number in n Arr
            }else if (d < c) { 
                // If d < c, then we can know under the d ,there have how many pairs 
                result += (int)pow(digitsSize, length - i - 1) * (j + 1);
                return result;
            } else { //if  d == c, we need to check next digit 
                result += (int)pow(digitsSize, length - i - 1) * j; 
                break;
            }    
        }
    }
    
    return result+1;
}

int IMBIG(){
    char *arr= "348";
    char** digits = &arr;
    //printf("%c\n",*(arr+1));
    //printf("%c\n",(*digits)[0]);
    int n = 100;
    
    printf("result is \"%d\"",atMostNGivenDigitSet(&arr,3,4));
    return 0;
}