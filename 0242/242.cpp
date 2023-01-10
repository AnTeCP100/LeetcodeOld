#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>

using namespace std;

class Solution {

bool isAnagram(string s, string t) {
        if(s.length()!=t.length())
        {
            return false;
        }
        std::unordered_map<char,int> smap;
        std::unordered_map<char,int> tmap;
        
        for(int i = 0; i < s.size(); i++){
            smap[s[i]]++;
            tmap[t[i]]++;
        }
        
        for(int i = 0; i < smap.size(); i++){
            if(smap[i] != tmap[i]) return false;
        }
        return true;
    }
};

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(0);
}