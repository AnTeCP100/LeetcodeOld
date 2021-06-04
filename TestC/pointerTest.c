#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(){
    int a = 8;
    int *p;
    //p= malloc(1*sizeof(int));
    //p=&a;
    p=&a;
    *p = 6;
    printf("%p\n",p);
    printf("%d\n",*p);
    printf("%p\n",&p);
    printf("%d\n",a);

    return 0;
}