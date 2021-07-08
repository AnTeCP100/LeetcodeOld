/**
 * @param {number[]} ratings
 * @return {number}
 */
 var candy = function(ratings) {
    var retVal=0;
    var len = ratings.length
    var leftArr=[1],rightArr=[]
    rightArr[len-1]=1
    for(var i = 1;i<len;i++){
        if(ratings[i]>ratings[i-1])
        {
            leftArr[i] = leftArr[i-1]+1
        }
        else
            leftArr[i]=1
    } 
    for(var i = len-2;i>=0;i--){
        if(ratings[i]>ratings[i+1])
            rightArr[i] = rightArr[i+1]+1
        else
            rightArr[i]=1
    } 
    console.log(leftArr,rightArr);
    for(var i = 0;i<len;i++){
        retVal+=Math.max(leftArr[i],rightArr[i])
    } 

    return retVal
};



//Input: ratings = [1,0,2]
//Output: 5
//Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
//
//Input: ratings = [1,2,2]
//Output: 4
//Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
//The third child gets 1 candy because it satisfies the above two conditions.

var arr = [1,2,3,1,0]
console.log(candy(arr));


//Runtime: 84 ms, faster than 87.23% of JavaScript online submissions for Candy.
//Memory Usage: 43.8 MB, less than 17.55% of JavaScript online submissions for Candy.