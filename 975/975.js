//You are given an integer array arr. From some starting index, you can make a series of jumps. The (1st, 3rd, 5th, ...) jumps in the series are called odd-numbered jumps, and the (2nd, 4th, 6th, ...) jumps in the series are called even-numbered jumps. Note that the jumps are numbered, not the indices.
//
//You may jump forward from index i to index j (with i < j) in the following way:
//
//During odd-numbered jumps (i.e., jumps 1, 3, 5, ...), you jump to the index j such that arr[i] <= arr[j] and arr[j] is the smallest possible value. If there are multiple such indices j, you can only jump to the smallest such index j.
//During even-numbered jumps (i.e., jumps 2, 4, 6, ...), you jump to the index j such that arr[i] >= arr[j] and arr[j] is the largest possible value. If there are multiple such indices j, you can only jump to the smallest such index j.
//It may be the case that for some index i, there are no legal jumps.
//A starting index is good if, starting from that index, you can reach the end of the array (index arr.length - 1) by jumping some number of times (possibly 0 or more than once).
//
//Return the number of good starting indices.

/**
` * @param {number[]} arr
 * @return {number}
 */
 var oddEvenJumps = function(arr) {
    var retVal = 0;
    const n = arr.length;
    const sorted = (A, cb) => A.slice()
        .map((val, i) => [val, i])
        .sort(cb)
        .map(([,i]) => i)


    return smallestItemPosition
    
};



var oddEvenJumps_e = function(A) {
    const n = A.length;
  
    const sorted = (arr, cb) => arr.slice()
        .map((val, i) => [val, i])
        .sort(cb)
        .map(([,i]) => i)
  
    const makeOddOrEvenNext = (arr) => {
      let result = Array(n).fill(null);
      const stack = [];
      
      for (let i of arr) {
        while (stack.length && i > stack[stack.length - 1]) {
          result[stack.pop()] = i;
        }
        
        stack.push(i);
      }
      
      return result;
    };
  
    // For [2,3,1,1,4] after sorting asc, the item positions will be
    
    // 1st item 2, after sort will be positioned at 2nd index [1,1,2,3,4]
    // 2nd item 3, after sort will be positioned at 3rd index
    // 3rd item 1, after sort will be positioned at 0th index
    // ...so on
    // last item 4, after sort will be positioned at 4th index
    // returns [2, 3, 0, 1, 4]
    const smallestItemPosition = sorted(A, ([a],[b]) => a - b);
  
    //For [2,3,1,1,4], returns [1, 4, 3, 4, null]
    /*
      In a similar manner, we can deduce that:
      From starting index i = 1, we jump to i = 4, so we reach the end.
      From starting index i = 2, we jump to i = 3, and then we can't jump anymore.
      From starting index i = 3, we jump to i = 4, so we reach the end.
      From starting index i = 4, we are already at the end.
    */
    const oddNext = makeOddOrEvenNext(smallestItemPosition);

    // For [2,3,1,1,4] after sorting desc, the item positions will be
    // logic is same as smallest except sorted reverse
    // returns [4, 1, 0, 2, 3]

    const largestItemPosition = sorted(A, ([a],[b]) => b - a);
    
    const evenNext = makeOddOrEvenNext(largestItemPosition);
  
    let odd = Array(n).fill(null);
    let even = Array(n).fill(null);
    odd[n - 1] = even[n - 1] = 1;
  
    // At this point we know the odd and even jumps
    // Use this info to build all reachable state
    for (let i = n-2; i >= 0; i--) {
      if (oddNext[i] !== null) {
        odd[i] = even[oddNext[i]];
      }
      
      if (evenNext[i] !== null) {
        even[i] = odd[evenNext[i]];
      }
    }
  
    return odd.filter(i => i !== null).length;
};





//Input: arr = [5,1,3,4,2]
//Output: 3
arr = [5,1,3,4,2];
console.log(oddEvenJumps(arr));