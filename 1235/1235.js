var jobScheduling = function(startTime, endTime, profit) {
    var dataArr =[];
    for(var i = 0;i<startTime.length;i++){
        dataArr[i]=[startTime[i],endTime[i],profit[i]];
    }
    var valueArr=[]

    for(var i = 0;i<startTime.length;i++){
        valueArr[i]=profit[i]/(endTime[i]-startTime[i])
    }
    
    var Time_Start = Math.min(startTime);
    var Time_End = Math.min(endTime);
    var nowTime =1;

    var worKList = dataArr.slice();
    var work = worKList.shift();


};