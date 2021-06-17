/*
 * 1819. Number of Different Subsequences GCDs
  
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var countDifferentSubsequenceGCDs = function(nums) {
    var max = 0;
    var count = 0;
    var pres = new Array(200001).fill(0);

    for(var i =0;i<nums.length;i++){
        max = Math.max(max,nums[i]);
        pres[nums[i]]=1;
    }

    for(var i=1;i<=max;i++){

        if(pres[i]==1){
            count++;
            continue;}
         
        var temp_gcd = 0;
        
        for(var j=i;j<=max;j+=i){
            
            if(pres[j]==1){
                temp_gcd = gcd(temp_gcd,j);
                
            }
            console.log("i,j,res" ,i,j,temp_gcd);
            if(temp_gcd == i){count++;break;}
        }
    }
    return count
};


const gcd = function(a, b){
    return b == 0 ? a : gcd(b, a % b);
}
/*  sub    :   gcd
    6      :  6
    6,10   :  2
    6,10,3 :  1
    3      :  3
    10     :  10
    10,3   :  1
    6,3    :  3
*/
//Input: nums = [6,10,3]
//Output: 5
//Explanation: The figure shows all the non-empty subsequences and their GCDs.
//The different GCDs are 6, 10, 3, 2, and 1.


//Input: nums = [5,15,40,5,6]
//Output: 7

var nums = [6,10,3]
console.log(0%7)
console.log(countDifferentSubsequenceGCDs(nums))


//Runtime: 284 ms, faster than 100.00% of JavaScript online submissions for Number of Different Subsequences GCDs.
//Memory Usage: 53.9 MB, less than 100.00% of JavaScript online submissions for Number of Different Subsequences GCDs.