#include <iostream>
#include <vector>
#include <string>
#include <cmath>

using namespace std;
class Solution {
private:
    vector<bool> path;
    vector<vector<int>> dict;
public:
    bool solve(int pos)
    {
        //check condition 1.path cant be true  2.if dict is empty ,this is checked before
        if(path[pos]) return false;
        if(dict[pos].empty()) return true;

        // this node already checked
        path[pos] = true;

        //checkt the next node
        for(int ele : dict[pos])
        {
            if(!solve(ele))
            {
                return false; 
            }
        }

        //reset this node and go back to previous node
        path[pos] = false;

        //clean the dictionary for avoiding double checking
        dict[pos].clear();

        return true;

    }

    

    bool canFinish(int numCourses, vector<vector<int>>& prerequisites)
    {
        //according the numCourses to resize the vector
        path.resize(numCourses);
        dict.resize(numCourses);
        //make dictionary 
        for(vector<int> ele:prerequisites)
        {
            dict[ele[1]].push_back(ele[0]);
        }

        //check every node
        for(int pos = 0;pos<numCourses;pos++)
        {
            if(!solve(pos))
            {
                return false;
            }
        }
        return true;
    }
};