var rotate = function(matrix) {
    //transpose the matrix
    let rows = matrix.length;
    let cols = rows;
    for(let i=0;i<rows;i++) {
        for(let j=0;j<cols;j++) {
            if(i<j) {
                temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }
    }
    
    //Go through each row and reverse it
    for(let i=0;i<rows;i++) {
        matrix[i] = matrix[i].reverse();
    }
};