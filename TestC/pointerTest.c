#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(){
    int a = 8;
    int *p;
    int *z;
    //p= malloc(1*sizeof(int));
    //p=&a;
    p=&a;
    memcpy(z,p,sizeof(*p));
    *p = 6;
    *z = 2;
    printf("%p\n",p);
    printf("%d\n",*p);
    printf("%p\n",&p);
    printf("%d\n",a);
    printf("%d\n",*z);

    return 0;
}