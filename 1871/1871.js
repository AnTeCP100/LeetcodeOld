/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */

//f(x) = f(x-1)+2 or f(x-1)+3,x>0
// 1. branch point need to record 
// 2. if the first step is 1 ? => index 0 is always 0 

//      0(+2)   
//0(+3)     0 -> 2 ->  4 ->  6 ->  8 -> 10
//          3 -> 5 ->  7 ->  9 -> 11 -> 13
//          6 -> 8 -> 10 -> 12 -> 14 -> 16

// array, one is the path, one is the bool value 
// 


 var canReach = function(s, minJump, maxJump) {

    var pathArr = new Array(Math.ceil(s.length+1)).fill(0).map(() => new Array(Math.ceil(s.length+1)).fill(0));
    
    var boolArr = [];

    // initialize path value


    //dp
    for(var maxIdx = 0; maxIdx<= s.length ; maxIdx++) // col
    {
        for(var minIdx = 0; minIdx<= s.length;  minIdx++) //col
        {
            //initialize path
            if(minIdx==0 && maxIdx==0)
            {
                //(x,y) = (0,0)
                pathArr[maxIdx][minIdx]=0;
                boolArr[0] =0; 
            }else if(maxIdx == 0)
            {   
                pathArr[0][minIdx] = (minIdx-1)*minJump
                //first col (x,y) = (0,y)
                if(pathArr[0][minIdx]>s.length-1)
                    break;

                //if this position in boolArr was 0 before, alway be 0
                if(boolArr[pathArr[0][minIdx]] !== 0)
                {
                    //two condition : self == 0 and before is 0
                    if(s[pathArr[0][minIdx]] == 0 && boolArr[pathArr[0][minIdx-1]]==0)
                        boolArr[pathArr[0][minIdx]]=0;
                    else
                        boolArr[pathArr[0][minIdx]]=1;
                }

                
            }else if(minIdx ==0)
            {
                pathArr[maxIdx][0] = (maxIdx-1)*maxJump
                //first cow (x,y) = (x,0)
                if(pathArr[maxIdx][0]>s.length-1)
                    break;
                
                //if this position in boolArr was 0 before, alway be 0
                if(boolArr[pathArr[maxIdx][0]] !== 0)
                {
                    //two condition : self == 0 and before is 0
                    if(s[pathArr[maxIdx][0]] == 0 && boolArr[pathArr[maxIdx-1][0]]==0)
                        boolArr[pathArr[maxIdx][0]]=0;
                    else
                        boolArr[pathArr[maxIdx][0]]=1;
                }
            }else
            {
                pathArr[maxIdx][minIdx] = pathArr[maxIdx][minIdx-1]+pathArr[maxIdx-1][minIdx]
                //middle (x,y) = (x-1,y)+(0,y-1)
                if(pathArr[maxIdx][minIdx]>s.length-1)
                    break;

                //if this position in boolArr was 0 before, alway be 0
                if(boolArr[pathArr[maxIdx][minIdx]] !== 0)
                {
                    //two condition : 
                    // 1. one is self == 0 
                    // 2. before is 0 => (x-1,y) is 0  or (x,y-1) is 0
                    if(s[pathArr[maxIdx][minIdx]] == 0 && (boolArr[pathArr[maxIdx-1][minIdx]] || boolArr[pathArr[maxIdx][minIdx-1]] ))
                        boolArr[pathArr[maxIdx][minIdx]]=0;
                    else
                        boolArr[pathArr[maxIdx][minIdx]]=1;
                }
            }
        }
    }

    console.log(boolArr)
    return  typeof(boolArr[s.length-1])=="undefined"? false:!Boolean(boolArr[s.length-1])
};

//Example 1:
//Input: s = "011010", minJump = 2, maxJump = 3
//Output: true

//Example 2:
//Input: s = "01101110", minJump = 2, maxJump = 3
//Output: false

var s = "0000000000", minJump = 2, maxJump = 5
console.log(canReach(s,minJump,maxJump))

