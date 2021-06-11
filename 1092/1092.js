/*DP LCS*/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
 var shortestCommonSupersequence = function(str1, str2) {


    
    var i = 0,j=0;
    let mapArr = Array(str1.length+1).fill().map(()=>Array(str2.length+1))
    for(i =0;i<=str1.length;i++){
        for(j =0;j<=str2.length;j++){
            if(i==0 || j==0){
                mapArr[i][j] =0
            }
            else if(str1[i-1]==str2[j-1]){
                mapArr[i][j]=mapArr[i-1][j-1]+1
            }else{
                mapArr[i][j]=Math.max(mapArr[i][j-1],mapArr[i-1][j])
            }
        }
    }
    console.log(mapArr)
    
    let str1Len = str1.length
    let str2Len = str2.length
    
    let retVal = ""
    while(str1Len>0 && str2Len>0){
        if(str1[str1Len-1]==str2[str2Len-1]){
            retVal+=str1[str1Len-1]
            str1Len--
            str2Len--
        }else if(mapArr[str1Len][str2Len-1]>mapArr[str1Len-1][str2Len]){
            retVal+=str2[str2Len-1] 
            str2Len--
        }else{
            retVal+=str1[str1Len-1]
            str1Len--
        }
    }
    

    while(str1Len>0){
        retVal+=str1[str1Len-1]
        str1Len--
    }
    while(str2Len>0){
        retVal+=str2[str2Len-1]
        str2Len--
    }
    return retVal.split("").reverse().join("")



};

//Input: str1 = "abac", str2 = "cab"
//Output: "cabac"
//Explanation: 
//str1 = "abac" is a subsequence of "cabac" because we can delete the first "c".
//str2 = "cab" is a subsequence of "cabac" because we can delete the last "ac".
//The answer provided is the shortest such string that satisfies these properties.
var Xstr1 = "abaac", Ystr2 = "caab"

console.log(shortestCommonSupersequence(Xstr1,Ystr2))



//Runtime: 264 ms, faster than 51.11% of JavaScript online submissions for Shortest Common Supersequence .
//Memory Usage: 57.2 MB, less than 55.56% of JavaScript online submissions for Shortest Common Supersequence .