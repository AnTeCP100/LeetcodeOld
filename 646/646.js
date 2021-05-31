/**
 * @param {number[][]} pairs
 * @return {number}
 */

 var findLongestChain = function(pairs) {
     var calArr = pairs.sort((x,y)=>{
         if(x[0]>y[0])return 1;
         else if(x[0]<y[0])return -1;
         else return x[1]>y[1]?1:-1;
         //return x[0]>y[0]?1:-1;
     })
     
     var len = calArr.length;
     const startTime = calArr[0][0];
     const endTime = calArr[len-1][1];
     let nowArr=[];

     calArr.forEach(element => {
        if(nowArr.length<1){
            nowArr.push(element)
        }else{
            let len2= nowArr.length;
            if(nowArr[len2-1][1]<element[0]){
                nowArr.push(element)
            }else if(nowArr[len2-1][0]<element[0]){
                if(nowArr[len2-1][1]-nowArr[len2-1][0]>element[1]-element[0]){
                    nowArr.pop();
                    nowArr.push(element)
                }
            }
        }
        console.log(nowArr)
     });
     console.log(calArr)
     console.log(nowArr)
     return nowArr.length
};

var arr = [[-10,-8],[8,9],[-5,0],[6,10],[-6,-4],[1,7],[9,10],[-4,7]]

// [-10,-8],[-6,-4],[-5,0],[-4,7],[1,7],[6,10],[8,9],[9,10]
//
console.log(findLongestChain(arr))

/* sort particular postion
arr = arr.sort(function (a, b) {
    return a[0] > b[0] ? 1 : -1;
   });
*/
