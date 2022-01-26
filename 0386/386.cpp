class Solution {
public:
    //tree 
    vector<int> lexicalOrder(int n) {
        vector<int> ret;

        //into recursive 
        tree_function(n,0,&ret);

        return ret;
    }

    void tree_function (int max ,int floor,vector<int> *vct)
    {
        //for every last digit
        for(int dt = 0; dt<=9;dt++)
        {
            //condition is lower than the max
            if((floor*10+dt) > 0 && (floor*10+dt) <= max)
            {
                (*vct).push_back (floor*10+dt);

                //to the next floor
                tree_function(max,floor*10+dt,vct);
            }
        }
    }
};