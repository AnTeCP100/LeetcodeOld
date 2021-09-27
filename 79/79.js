/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    if(board.length==0 || word == null)
        return false;
    
    var findPath = function(board,word,tarIdx,row,col)
    {
        //successfull
        if(tarIdx == word.length) return true
        
        //bigger or smaller than board
        if(row<0            ||
           row>=board.length||
           col<0            ||
           col>=board[0].length)
           return false;
        
        //check target letter
        if(board[row][col] != word[tarIdx]) return false;

        //mark board for is using
        var temp = board[row][col]
        board[row][col]='*';

        //explore
        let retval = findPath(board, word, tarIdx+1,row+1,col)||
                     findPath(board, word, tarIdx+1,row-1,col)||
                     findPath(board, word, tarIdx+1,row,col+1)||
                     findPath(board, word, tarIdx+1,row,col-1);  

        board[row][col] =temp;
        return retval;
    }
    
    
    //O(m*n*l)
    for(var i = 0;i <board.length;i++)
    {
        for(var j = 0;j<board[0].length;j++)
        {
            if(board[i][j]==word[0]) //second
                if(findPath(board,word,0,i,j))
                    return true
        }
    }

    return false;

};
//Runtime: 566 ms, faster than 39.22% of JavaScript online submissions for Word Search.
//Memory Usage: 38.8 MB, less than 94.25% of JavaScript online submissions for Word Search.

//Runtime: 320 ms, faster than 79.71% of JavaScript online submissions for Word Search.
//Memory Usage: 39 MB, less than 82.92% of JavaScript online submissions for Word Search.
