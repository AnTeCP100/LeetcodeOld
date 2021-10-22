#include <stdio.h>
#include <stdlib.h>
#include <string.h>



int main(){
    char a[] = "12345678";
    char *p= "12345679";
    char *d;
    int len = sizeof(p);
    d= malloc((8+1)*sizeof(char));
    //p=&a;
    memcpy(d,p,8+1);
    d[2] ='4';
    //printf("%s\n",*p);
    //printf("%s\n",*d);
    printf("%c\n",a[0]);
    printf("%s\n",a);
    printf("%s\n",p);
    printf("%s\n",d);
    printf("len = %d\n",len);
    return 0;
}