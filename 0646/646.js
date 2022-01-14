/**
 * @param {number[][]} pairs
 * @return {number}
 */

 var findLongestChain = function(pairs) {
     /*Sorting array*/
    //var calArr = pairs.sort((x,y)=>{
    //    return x[0]>y[0]?1:-1 
    //})
    calArr = pairs.sort(function(left, right){
        if(left[0] !== right[0]){
            return left[0] - right[0];
        }else{
            return left[1] - right[1];
        } 
     });
     console.log(pairs)

    if(false){
        var res=[]
        //var dict={}
        calArr.forEach(element => {
           if(res.length<1){
               res.push(element);
           }else{
               var len = res.length
               /*check the now begin time is larger than prev end time*/
               if(element[0]>res[len-1][1]){
                   //console.log(`[Larger][element:res]:[${element[0]}:${res[len-1][1]}]`)
                   res.push(element);
               }  
               /*then check the now begin time is equal to prev start time*/          
               else if(element[0]==res[len-1][0]){
                   /*because secondary sorting is done when sorting array, no need to make any action  */
                   //if(element[1]-element[0]<res[len-1][1]-res[len-1][0]){
                   //    res.pop()
                   //    res.push(element);
                   //}

               }else if(element[0]>res[len-1][0]&&element[1]<res[len-1][1]){
                   //console.log(`[smaller][element:res]:[${element[0]}:${res[len-1][1]}]`)
                   res.pop()
                   res.push(element);
               }

           }
           //console.log(res)
        });
    }else{
        var res=1,startTime = calArr[0][0],endTime=calArr[0][1];
        for(var i = 1;i<calArr.length;i++){
            if(calArr[i][0]>endTime){
                res++;
                startTime=calArr[i][0]
                endTime=calArr[i][1]
            }else if(calArr[i][0]>startTime&&calArr[i][1]<endTime){
                startTime=calArr[i][0]
                endTime=calArr[i][1]
            }
        }
    }

     //console.log(res)
     return res
};

var arr = [[1,2],[2,3],[3,4]]

// [-10,-8],[-6,-4],[-5,0],[-4,7],[1,7],[6,10],[8,9],[9,10]
//
console.log(findLongestChain(arr))

/* sort particular postion
arr = arr.sort(function (a, b) {
    return a[0] > b[0] ? 1 : -1;
   });
*/

//Runtime: 108 ms, faster than 67.14% of JavaScript online submissions for Maximum Length of Pair Chain.
//Memory Usage: 42.7 MB, less than 81.43% of JavaScript online submissions for Maximum Length of Pair Chain.
//Next challenges: