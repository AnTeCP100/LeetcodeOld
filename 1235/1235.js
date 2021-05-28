var jobScheduling = function(startTime, endTime, profit) {
    var newList=[]
    startTime.forEach(ele,index => {
        newList[index] = [ele,endTime[index],endTime[profit]]
    });

    var st =Math.min(startTime);
    var ed = Math.max(endTime);

    var resultList = 0;
    
    var item = newList.shift();

    var nowitemCount = 0;

    var value = [];
    
    for(var i = st;i<=ed;i++){
        if(item[2]==i){
            if(value.length>0){

            }else{
                value[nowitemCount]  = item[2]/(item[1]-item[0])
            }
            
        }
    }
};