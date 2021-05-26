/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */


 function monthToDate(years,month){
    if(month<8){
        if(month%2==0 && month!=2){
            return 30;
        }else if(_Mcount%2!=0)
        {
            return 31;
        }else{
            if(years%4!=0||(years%100==0 && years%400!=0)){
                return 28;
            }
            return 29;
        }
    }else{
        if(month%2==0){
            return 31;
        }else (month%2!=0)
        {
            return 30;
        }
    } 
} 

 
var daysBetweenDates = function(date1, date2) {
    var date1Arr = date1.split("-").map((x)=>parseInt(x,10));
    var date2Arr = date2.split("-").map((x)=>parseInt(x,10));
  
    var one_month_day = 0;

    for(_Mcount =1;_Mcount<date1Arr[1];_Mcount++){  
        one_month_day+=monthToDate(date1Arr[0],_Mcount);
    }

    var one_offset =0;
    for(i = 1200;i<date1Arr[0];i+=100){
        if(i%400!=0)one_offset++;}


    var two_month_day = 0;

    for(_Mcount =1;_Mcount<date2Arr[1];_Mcount++){
        two_month_day+=monthToDate(date2Arr[0],_Mcount);
    }


    var two_offset =0;
    for(i = 1200;i<date2Arr[0];i+=100){
        if(i%400!=0)two_offset++;
    }

    
    return Math.abs((date2Arr[0]-date1Arr[0])*365+two_month_day+date2Arr[2]-one_month_day-date1Arr[2])+Math.floor(Math.abs((date2Arr[0]-date1Arr[0])/4))+two_offset-one_offset;

}



var a = "1971-06-29"
var b = "2010-09-23"
console.log(daysBetweenDates(a,b))



