/**
 * @param {number} n
 * @return {number}
 */
 var numSquares = function(n) {
    var base = Math.floor(Math.sqrt(n));
    var base_arr = []
    var dp = [];
    dp.length = n+1;

    //find all possible number
    for(var i = base;i>0;i--)
    {
        base_arr.push(i**2);
    }

    //dp funtion
    var func_dp = function(cur)
    {
        //the end
        if(cur==0)
            return 0;
        
        //dp
        if(dp[cur]!= undefined)
            return dp[cur]
        
        //find the smallest
        let min = Number.MAX_VALUE;

        base_arr.forEach(e=>{
            //loop for bfs
            if((cur-e)>=0)
            {
                min = Math.min(func_dp(cur-e)+1,min)
            }
        })
        
        dp[cur]=min

        return min;
    }

    

    ret = func_dp(n)

    return ret;
};

console.log(numSquares(101))