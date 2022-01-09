/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
 
    var ret=[]
    
    for(var cur_pos = 0;cur_pos<temperatures.length;cur_pos++)
    {
        var cur_ans = 0;

        for(var cmp_pos = cur_pos+1;cmp_pos<temperatures.length;cmp_pos++)
        {
            if(temperatures[cmp_pos]>temperatures[cur_pos])
            {
                cur_ans = cmp_pos-cur_pos;
                break;
            }
        }

        ret.push(cur_ans)
    }

    return ret
};