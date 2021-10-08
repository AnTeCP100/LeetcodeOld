/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

//     y=0  
// x=0 0   1    1   1   1    1  
//     1   2    3   4   5    6  
//     1   3    6  10  15   21
//     1   4   10  20  35   56
//     1   5   15  35  70  126

// f(x,y)=f(x-1,y)+f(x,y-1)

var uniquePaths = function(m, n) {
    //array
    let retvalArr = Array.from(Array(m), () => new Array(n));
    
    //initilaize the value at positon (x,1) and (1,y)
    for(var i =m-1;i>=0;i--)
    {
        retvalArr[i][0]=1;
    }
    for(var j =n-1;j>=0;j--)
    {
        retvalArr[0][j]=1;
    }

    //into dp => f(x,y)=f(x-1,y)+f(x,y-1)
    for(var i =1;i<m;i++)
    {
        for(var j = 1;j<n;j++)
        {
            retvalArr[i][j]=retvalArr[i-1][j]+retvalArr[i][j-1]
        }
    }


    return retvalArr[m-1][n-1];
};

//Runtime: 68 ms, faster than 92.56% of JavaScript online submissions for Unique Paths.
//Memory Usage: 38.9 MB, less than 56.81% of JavaScript online submissions for Unique Paths.

//var uniquePaths = function(m, n) {
//    var retval = 0;
//    var addFunc = function(x,y)
//    {
//        if(x==1||y==1)
//        {
//            retval+=1;
//            return;
//        }
//        addFunc(x-1,y);
//        addFunc(x,y-1);
//        return;
//    }
//    addFunc(m,n)
//    return retval;
//};

console.log(uniquePaths(7,6))

//Time Limit Exceeded