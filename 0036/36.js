/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    //!Only check the sudoku if is valid. It does not check the sudoku if has the awnser
    


    for(var x_pos = 0;x_pos<board.length;x_pos++)
    {
        //use the set
        let row_set = {}
        let col_set = {}
        let sq_set = {}

        for(var y_pos=0;y_pos<board[0].length;y_pos++)
        {
            var row_num = board[x_pos][y_pos]
            var col_num = board[y_pos][x_pos]
            var sq_num = board[Math.floor(x_pos / 3) * 3 + Math.floor(y_pos / 3)][(x_pos % 3) * 3 + y_pos % 3]
            //[0,1][0,2][0,3][1,1][1,2][1,3][2,1][2,2][2,3]
            //[0,4][0,5][0,6][1,4][1,5][1,6][2,4][2,5][2,6]

            //Three kind check

            // If the row number is already used
            // return false
            if (row_num !== '.' && !row_set[row_num]) {
                row_set[row_num] = 1
            } else if (row_set[row_num]) {
                return false
            }

            // If the column number is already used
            // return false
            if (col_num !== '.' && !col_set[col_num]) {
                col_set[col_num] = 1
            } else if (col_set[col_num]) {
                return false
            }

            // If the square number is already used
            // return false
            if (sq_num !== '.' && !sq_set[sq_num]) {
                sq_set[sq_num] = 1
            } else if (sq_set[sq_num]) {
                return false
            }
        }
    }
    
    return true;

};