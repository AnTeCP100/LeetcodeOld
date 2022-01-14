var dailyTemperatures = function(temperatures) {
    //O(n)

    var ret=[]
    ret.length = temperatures.length;
    ret.fill(0)
    
    var cmp_arr=[]; //LIFO
    
    //init 
    cmp_arr.push([0,temperatures[0]])

    for(var cur_pos = 1;cur_pos<temperatures.length;cur_pos++)
    {
        //compare with cmp_array
        var cmp_arr_len = cmp_arr.length;
        for(var cmp_pos = cmp_arr_len-1;cmp_pos>=0;cmp_pos--)
        {
            if(!(temperatures[cur_pos]>cmp_arr[cmp_pos][1]))
                break;

            //write into awnser
            ret[cmp_arr[cmp_pos][0]] = cur_pos-cmp_arr[cmp_pos][0];
            cmp_arr.pop();
        }
        cmp_arr.push([cur_pos,temperatures[cur_pos]])
    }


    return ret
}