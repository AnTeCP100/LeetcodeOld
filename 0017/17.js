/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    var arrLen = digits.length;
    var keyBoard= [[], [], ["a","b","c"], ["d","e","f"], ["g","h","i"], ["j","k","l"], ["m","n","o"], ["p","q","r","s"], ["t","u","v"], ["w","x","y","z"]];
     
    if ( arrLen < 2 ) return !digits ? [] : keyBoard[ digits[0] ];

    // We initialize the 'result array' to be 'letter array' where the string 'digits' at index 0
    // if digits = '79', initial 'result = ['p','q','r','s']'
    let result = keyBoard[ digits[0] ]
    
    // We always start the iteration at the next digit 
    // if digits = '79', it start at '9'
    for (let i=1; i<arrLen; i++) {
       
       let nowLetters = keyBoard[ digits[i] ]
       let store  = []
       
       //  Here is where we start concatenate 
       // 'each alphabet in the result array' vs 'each alphabet in each subsequence alphs array'
       for ( let j=0; j<result.length; j++) {
 
          let c1 = result[j]+nowLetters[0]
          let c2 = result[j]+nowLetters[1]
          let c3 = result[j]+nowLetters[2]
 
          store = [ ...store, c1, c2, c3 ]
 
          if ( alphs.length === 4 ) {
             store.push( nowLetters[j]+nowLetters[3] );
          }
       }
       // replace the new result to the 'result array'
       result = store
    }
 
    return result
};