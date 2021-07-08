/**
 * @param {number[]} arr
 * @return {number}
 */
 var sumOddLengthSubarrays = function(arr) {
    return arr.reduce((nowSum, nowVal, idx) => {
		var plusCount = Math.ceil((idx + 1) * (arr.length - idx) / 2);

		return nowSum + nowVal * plusCount;
	}, 0);
};


//Input: arr = [1,4,2,5,3]
//Output: 58
//Explanation: The odd-length subarrays of arr and their sums are:
//[1] = 1
//[4] = 4
//[2] = 2
//[5] = 5
//[3] = 3
//[1,4,2] = 7
//[4,2,5] = 11
//[2,5,3] = 10
//[1,4,2,5,3] = 15
//If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
//
//
//Input: arr = [1,2]
//Output: 3
//Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.
//
//
//Input: arr = [10,11,12]
//Output: 66



var k = [1,4,2,5,3]
console.log(sumOddLengthSubarrays(k));

//Runtime: 72 ms, faster than 96.01% of JavaScript online submissions for Sum of All Odd Length Subarrays.
//Memory Usage: 38.9 MB, less than 58.74% of JavaScript online submissions for Sum of All Odd Length Subarrays.