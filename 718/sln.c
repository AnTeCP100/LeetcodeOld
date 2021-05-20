
#include <stdio.h>
#include <stdlib.h>
#include "../method.h"


void swap(int *p1,int*p2){
    int tmp = *p1;
    *p1=*p2;
    *p2=tmp;
}
int findLength(int* nums1, int nums1Size, int* nums2, int nums2Size){
    
    
    if(nums2Size>nums1Size) {
        swap(nums1,nums2);
        swap(&nums1Size,&nums2Size);      
    }
    
    printf("nums1Size :%d\n",nums1Size);
    printf("nums2Size :%d\n",nums2Size);
    printf("nums1 :%d\n",nums1[0]);
    printf("nums2 :%d\n",nums2[0]);
    int *dp = calloc((nums2Size+1),sizeof(int));
    int result = 0;
    for (int i = 1; i <= nums1Size; ++i)
      for (int j = nums2Size; j >= 1; --j) {
        dp[j] = nums1[i - 1] == nums2[j - 1] ? dp[j - 1] + 1 : 0;       
        printf("%d\n",dp[j]);
        result = max(result, dp[j]);
      }
    return result;
} 

int IMBIG(){
  //[1,2,3,2,1]
  //[3,2,1,4,7]
    int num1Arr[5] = {1,2,3,2,1};
    int *nums1 =num1Arr;
    int num2Arr[5] = {3,2,1,4,7};
    int *nums2 =num2Arr;
    int result = findLength(nums1,5,nums2,5);
    printf("%d",result);
    return 0;
}