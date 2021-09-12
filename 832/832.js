/**
 * @param {number[][]} image
 * @return {number[][]}
 */
 var flipAndInvertImage = function(image) {
    var flArr =[]; 
    
    
    for(var i = 0;i<image.length;i++)
    {
        flArr[i]=image[i].reverse().map(e=>{return Math.abs(e-1)});
    }
    //console.log("flArr : ",flArr);
    return flArr
}


//Example 1:
//Input: image = [[1,1,0],[1,0,1],[0,0,0]]
//Output: [[1,0,0],[0,1,0],[1,1,1]]
//Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
//Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
//
//Example 2:
//Input: image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
//Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
//Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
//Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]

var image = [[1,1,0],[1,0,1],[0,0,0]]
console.log(flipAndInvertImage(image));


//Runtime: 93 ms, faster than 22.53% of JavaScript online submissions for Flipping an Image.
//Memory Usage: 40.3 MB, less than 75.40% of JavaScript online submissions for Flipping an Image.