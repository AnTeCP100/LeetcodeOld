#include <iostream>
#include <stdio.h>
#include <stdlib.h>
#include <vector>
#include <string>
#include <list>

using namespace std;


public:
    char dict[3] = {'a','b','c'};
    bool findIt = false;
    int nowTarget = 0;
    int len = 0;
    void backTraceFunc(vector<char>& vec, int idx)
    {
        
        if(idx >= len|| findIt)
        {
            nowTarget -= 1;
            return;
        }
              
        //check now pos and go to next floor
        for(int i = 0;i<3;i++)
        {
            //aleady find the target
            if(findIt)
                break; 

            //check before and write now positon
            if(idx == 0||dict[i] != vec[idx-1])
            {
                vec.push_back(dict[i]);
                
                //go to the next floor
                backTraceFunc(vec, idx+1);
                
                //find the target
                if(nowTarget == 0)
                {
                    findIt = true;
                }else
                {
                    vec.pop_back();
                }
          }
        }
        
    }
    
    string getHappyString(int n, int k) {
        nowTarget = k;
        len= n ;
        vector<char> vec;
        //char *arr = (char*)malloc(sizeof(char)*(n));
        backTraceFunc(vec,0);

        //check if find the target
        if(findIt){
            string str(vec.begin(), vec.end());
            return str;
        }else
        {
            return "";
        }
        
    }


int main()
{
    ios::sync_with_stdio(false);
    cin.tie(0);
    //Test
    int n = 3;
    int k = 1 ;
    getHappyString(3,1);
}