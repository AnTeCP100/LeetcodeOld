/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    if(prices.Length == 0) {
        return 0;
    }
     var len = prices.length;
     var bArr=[];
     var sArr=[];

     //init two array
     bArr.length=len+1;
     sArr.length= len+1;
     bArr[0] = 0
     bArr[1] = -prices[0];
     sArr[0] = 0;
     sArr[1] = 0;
     

     //dp
     for(var pos = 2; pos<=len;pos++) {
        
        //cooldown or buy
        bArr[pos] = Math.max(bArr[pos - 1], sArr[pos - 2] - prices[pos - 1]);
            
        
        //cooldown or sell
        sArr[pos] = Math.max(sArr[pos - 1], bArr[pos - 1] + prices[pos - 1]);
    }
     
     return sArr[len]
 }


 //Runtime: 110 ms, faster than 33.17% of JavaScript online submissions for Best Time to Buy and Sell Stock with Cooldown.
 //Memory Usage: 40 MB, less than 62.81% of JavaScript online submissions for Best Time to Buy and Sell Stock with Cooldown.


 var p = [1,2,3,0,2]
console.log(maxProfit(p))

// var maxProfit = function(prices) {
//    
//    var retval = 0;
//    var searchFunc= function(nowindex,status,nowtar)
//    {
//        if(nowindex > prices.length-1)
//        {
//            retval = nowtar>retval?nowtar:retval
//            return;
//        }
//            
//
//        //check status
//        if(status==1)
//        {
//            //sell
//            searchFunc(nowindex+2,0,nowtar+prices[nowindex])
//
//            //cooldown
//            searchFunc(nowindex+1,1,nowtar)
//        }
//        else
//        {
//            //buy
//            searchFunc(nowindex+1,1,nowtar-prices[nowindex])
//
//            //cooldown
//            searchFunc(nowindex+1,0,nowtar)
//        }
//
//    }
//    return retval
//};
//Time Limit Exceeded



//There are some doubts about the problem, so i try some awsner
// 1. can sell first?
// => [2,1] = 0 , so can not sell first
// 2. cooldown limit?
// => no limit