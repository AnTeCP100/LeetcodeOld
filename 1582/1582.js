/**
 * @param {number[][]} mat
 * @return {number}
 */
 var numSpecial = function(mat) {
    let res = 0;
    let count = 0;
    let col = [];
     for(let j = 0; j < mat[0].length; j++){
            count = 0;
        for(let i = 0; i < mat.length; i++){
              if(mat[i][j]) count++;
        }
        col.push(count);
    }
    for(let i = 0; i < mat.length; i++){
           count = 0;
        for(let j = 0; j < mat[0].length; j++){
            if(mat[i][j]) count++, temp = j;
            if(j===mat[0].length-1 && count===1 && col[temp]===1) res++;
    }}  
    return res;
};




//Input: mat = [[1,0,0],
//              [0,0,1],
//              [1,0,0]]
//Output: 1
//
//Input: mat = [[1,0,0],
//              [0,1,0],
//              [0,0,1]]
//Output: 3

//
//Input: mat = [[0,0,0,1],
//              [1,0,0,0],
//              [0,1,1,0],
//              [0,0,0,0]]
//Output: 2
//
//Input: mat = [[0,0,0,0,0],
//              [1,0,0,0,0],
//              [0,1,0,0,0],
//              [0,0,1,0,0],
//              [0,0,0,1,1]]
//Output: 3

var mat = [[0,0,0,0,0],
             [1,0,0,0,0],
             [0,1,0,0,0],
             [0,0,1,0,0],
             [0,0,0,1,1]] 

console.log(numSpecial(mat))

//Runtime: 76 ms, faster than 98.08% of JavaScript online submissions for Special Positions in a Binary Matrix.
//Memory Usage: 40.9 MB, less than 70.19% of JavaScript online submissions for Special Positions in a Binary Matrix.