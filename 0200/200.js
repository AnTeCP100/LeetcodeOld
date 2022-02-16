/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    var ret=0;
    var x_len=grid.length,y_len=grid[0].length;
    
    //dfs
    var loop_func = function(x,y){
        if(x<0 || y<0 || x>=x_len || y>=y_len || grid[x][y]=='0'){
            return;
        }
        grid[x][y]='0';
        loop_func(x,y+1);
        loop_func(x+1,y);
        loop_func(x,y-1);
        loop_func(x-1,y);
    }
    
    
    //every node need to check 
    for(let i=0;i<x_len;i++){
        for(let j=0;j<y_len;j++){
            if(grid[i][j]=='1'){
                loop_func(i,j);
                ret++;
            }
        }
    }
    return ret;
};

//Example 1:
//Input: grid = [
//  ["1","1","1","1","0"],
//  ["1","1","0","1","0"],
//  ["1","1","0","0","0"],
//  ["0","0","0","0","0"]
//]

//Output: 1
//Example 2:
//Input: grid = [
//  ["1","1","0","0","0"],
//  ["1","1","0","0","0"],
//  ["0","0","1","0","0"],
//  ["0","0","0","1","1"]
//]
//Output: 3