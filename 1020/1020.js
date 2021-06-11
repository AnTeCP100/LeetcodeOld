/** DFS */
/**
 * @param {number[][]} grid
 * @return {number}
 */
 var numEnclaves = function(A) {

    let result = 0;
    for(let row = 0; row < A.length; row++){
        for(let col = 0; col < A[row].length; col++){
            if(A[row][col] == 1) {
                let localResult = dfs(row,col, 0);                
                if(localResult != -Infinity)
                    result += localResult;
            }
        }
    }
    
    return result;

    

    function dfs(row, col, area) {
        if(row < 0 || col < 0 || row >= A.length || col >= A[0].length || A[row][col] == 0) return area;
        
        if((row == 0 || col == 0 || row == A.length-1 || col == A[0].length - 1) && A[row][col] == 1) {
            area = -Infinity;
        }
       
        area++;
        A[row][col] = 0;
        area = dfs(row-1, col, area);           // top
        area = dfs(row+1, col, area);           // bottom
        area = dfs(row, col-1, area);           // left
        area = dfs(row, col+1, area);           // right
                  
        return area;
    }
};



//Input: grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
//Output: 3
//Explanation: There are three 1s that are enclosed by 0s, and one 1 that is not enclosed because its on the boundary.

//Input: grid = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]
//Output: 0
//Explanation: All 1s are either on the boundary or can reach the boundary..

var gridArr = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
console.log(numEnclaves(gridArr))


//Runtime: 104 ms, faster than 58.00% of JavaScript online submissions for Number of Enclaves.
//Memory Usage: 42.7 MB, less than 68.00% of JavaScript online submissions for Number of Enclaves.