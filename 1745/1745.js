/*
 DP
*/


/**
 * @param {string} s
 * @return {boolean}
 */
 var checkPartitioning = function(s) {
    if(s.length<3){
        return false;
    }
    var len = s.length;
    var sArr = s.split('');
    var sArrI = sArr.map((x)=>x.charCodeAt()-96)
    var nowCenter;
    var strAPostion = [];
    var tempIdx = 0
    for(var i = 1;i<=len;i++){
        var idx = sArrI.indexOf(sArrI[0],tempIdx);
        tempIdx = idx+1
        if(idx == -1){
            break;
        }
        else if(idx==0){
            strAPostion.push(idx);
        }else 
        {
            var flag = true;
            nowCenter = (idx/2)
            for(var z = 0;z<nowCenter;z++){
                if(sArrI[z]!=sArrI[idx-z]){
                    flag=false;
                    break;
                }
            }
            if(flag){
                strAPostion.push(idx);
            }
        }
    }
    var retVal = false;
    console.log(strAPostion)
    for(var i = 0;i<strAPostion.length;i++)
    {   
        if(retVal){
            break;
        }
        tempIdx=0;
        var cutStrI = sArrI;
        var newStrI  = cutStrI.slice(strAPostion[i]+1); 
        for(var w = 1;w<=cutStrI.length;w++){
            var idx = newStrI.indexOf(newStrI[0],tempIdx);          
            tempIdx = idx+1
            if(idx == -1){
                break;
            }
            else if(idx==0){
                if(newStrI.length==1){
                    break;
                }
                var flag = true;
                var str2 = newStrI.slice(1)        
                nowCenter = (str2.length-1)/2;              
                for(var z = 0;z<nowCenter;z++){
                    if(str2[z]!=str2[str2.length-z-1]){
                        flag=false;
                        break;
                    }
                }
                if(flag){        
                    retVal = true;
                }
            }else 
            {
                var flag = true;
                nowCenter = (idx/2)
                for(var z = 0;z<nowCenter;z++){
                    if(newStrI[z]!=newStrI[idx-z]){
                        flag=false;
                        break;
                    }
                }
                if(flag){
                    if(idx==newStrI.length-1){
                        break;
                    }
                    var str2 = newStrI.slice(idx+1)
                    nowCenter = (str2.length-1)/2;
                    for(var z = 0;z<nowCenter;z++){
                        if(str2[z]!= str2[str2.length-1-z]){
                            flag=false;
                            break;
                        }
                    }
                    if(flag){
                        retVal = true;
                    }
                }   
                
            }
        }
    }
    
    return retVal;
};



//Input: s = "abcbdd"
//Output: true
//Explanation: "abcbdd" = "a" + "bcb" + "dd", and all three substrings are palindromes.
//
//Input: s = "bcbddxy"
//Output: false
//Explanation: s cannot be split into 3 palindromes.

var str = "juchzcedhfesefhdeczhcujzzvbmoeombv"
console.log(checkPartitioning(str))


//Runtime: 2884 ms, faster than 7.69% of JavaScript online submissions for Palindrome Partitioning IV.
//Memory Usage: 53 MB, less than 61.54% of JavaScript online submissions for Palindrome Partitioning IV.