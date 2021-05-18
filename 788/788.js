var rotatedDigits = function(n) {
    
    var score = [0,0,1,-1,-1,1,1,-1,0,1]
    var result=0;
    var num;
    var nArr = String(n).split("").map(numa => Number(numa)).reverse();
    var flag=false;

    for (num = nArr.length-1; num > -1; num--) 
    {
        var good=0,soso=0, d = nArr[num];
        for(var z = 0;z<d;z++){
            if(score[z]==1)good++;
            if(score[z]==0)soso++;
        }
        result += (good + soso) * Math.pow(7, num);
        if (!flag) result -= soso * Math.pow(3, num);
        if (score[d] == -1) return result;
        if (score[d] == 1) flag = true;
    }
    return flag && score[nArr[0]] > -1 ? result + 1 : result;
    
};