#include <stdbool.h>
#include <stdio.h>
#include <string.h>

#include "../method.h"
bool lemonadeChange(int* bills, int billsSize){
    bool result = true;
    //5,10,15
    int _wallet[3]={0,0,0};
    for(int count=0;count<billsSize;++count){
        switch (bills[count])
        {
        case 5:
            ++_wallet[0];
            break;
        case 10:
            if(_wallet[0]<1){
                result = false;
            }
            --_wallet[0];
            ++_wallet[1];
            break;
        case 20:
            if(_wallet[1]>0 && _wallet[0]>0){
                --_wallet[1];
                --_wallet[0];
            }else if (_wallet[0]>=3){
                _wallet[0]=_wallet[0]-3;
            }else{
                result =false;
            }
            break;     
        default:
            //printf("wrong number");
            break;
        }

        if(!result){
            break;
        }
    }

    return result;
}

int IMBIG(){
    int billsArr[5]= {5,5,5,10,20};
    
    int *bills = billsArr;
    bool result = lemonadeChange(bills,5);
    printf("%d",result);
    return 0;
}