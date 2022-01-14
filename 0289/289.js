/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var gameOfLife = function(board) {
     
    var copyArr = [];

    //neighbor limit
    var ROW_LIMIT = board.length;
    var COL_LIMIT = board[0].length;
    var NEIGHBORARR = [[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]]
    for (let rowCount = 0; rowCount < ROW_LIMIT; rowCount++) {
        copyArr[rowCount] = board[rowCount].slice();
    }
    //check position is available
    var posAvailable = function(row,col)
    {
        if(row> -1 && row<ROW_LIMIT && col> -1 && col<COL_LIMIT)
        {
            return copyArr[row][col];
        }
        return 0;
    }
    //fucntion for count every position neighbors point
    var nextCondition = function(row,col)
    {
        var count = 0 ;
        NEIGHBORARR.forEach(arr => {
            count+=posAvailable(row+arr[0],col+arr[1]);
        });
        if(copyArr[row][col])
        {
            if(count<2 || count>3) return 0;
        }else
        {
            if(count<3||count>3) return 0;
        }
        return 1;
    }

    //O(row * col)
    for (let rowCount = 0; rowCount < ROW_LIMIT; rowCount++) {

        for (let colCount = 0; colCount < COL_LIMIT; colCount++) {
            
             board[rowCount][colCount]  = nextCondition(rowCount,colCount)        
        }      
   }
   return board;
};

//Example 1:
//Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
//Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
//
//
//Example 2:
//Input: board = [[1,1],[1,0]]
//Output: [[1,1],[1,1]]

var board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
console.log(gameOfLife(board))

//Runtime: 82 ms, faster than 29.68% of JavaScript online submissions for Game of Life.
//Memory Usage: 38.5 MB, less than 93.05% of JavaScript online submissions for Game of Life.