/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
// var removeKdigits = function(num, k) {
//    if(num.length ==k){
//        return "0"
//    }
//    var numArr = num.split('')
//    var retVal=[],lastCh;
//    retVal.push(numArr[0]);
//    lastCh  = numArr[0];
//    for(var i=1;i<num.length;i++){
//        if(lastCh>numArr[i] && k>0){
//            retVal.pop();    
//            k--       
//        }
//        retVal.push(numArr[i]);
//        lastCh = numArr[i];
//    }
//    console.log(retVal,k)
//    while(k>0){
//        var largest = Math.max(...retVal);
//        var largestIdx = retVal.indexOf(largest.toString());
//        console.log(largest,largestIdx)
//        retVal.splice(largestIdx,1)
//        k--
//    }
//    console.log(retVal,k)
//    return parseInt(retVal.join("")).toString();
//};

 /* @param {string} num
 * @param {number} k
 * @return {string}
 */
 var removeKdigits = function(num, k) {
    let stack = [],
    p = 0;
  while (k > 0 || p < num.length) {
      
    let e = stack[stack.length - 1];
      
    if (stack.length === 0) {
      stack.push(num[p]);
    } else if (num[p] >= e) {
      stack.push(num[p]);
    } else {
      if (k > 0) {
        stack.pop();
        k--;
        p--;
      } else {
        stack.push(num[p]);
      }
    }
    p++;
  }
    
  let ans = stack.join("");
  //here use of regular expression is imp inorder to trim leading zeros.  
  ans = ans.replace(ans.match("^0+(?!$)"), "");
    
  if(ans.length === 0){
      return '0';
  }else {
      return ans;
  }
};

var num = "1234567890"
k=9
console.log(removeKdigits(num,k))

//Runtime: 88 ms, faster than 69.26% of JavaScript online submissions for Remove K Digits.
//Memory Usage: 41 MB, less than 54.86% of JavaScript online submissions for Remove K Digits.