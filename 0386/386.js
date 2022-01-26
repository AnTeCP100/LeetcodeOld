/**
 * @param {number} n
 * @return {number[]}
 */
 var lexicalOrder = function(n) {
    var ret=[]

    for(var i = 1;i<=n;i++)
    {
        ret.push(i)
    }
    console.log(ret.sort());
};

//Example 1:
//Input: n = 13
//Output: [1,10,11,12,13,2,3,4,5,6,7,8,9]

//Example 2:
//Input: n = 2
//Output: [1,2]
 
var n = 100
console.log(lexicalOrder(n))
