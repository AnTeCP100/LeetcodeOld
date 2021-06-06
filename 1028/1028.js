// DFS TO BFS

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)}

/**
 * @param {string} traversal
 * @return {TreeNode}
 */
 var recoverFromPreorder = function(traversal) {
     /** change traversal to arr */
     //var transArr = traversal.split();
     return transTree(traversal,0)
};


function transTree(str,depth){
    
    console.log(`[str,depth] : [${str},${depth}]`)
    var depthCount = 0;
    var leftStartIndex =-1 ;
    var rightStartIndex =-1 ;
    var isLeft = true;


    let match = "";
    for(let i = 0; i < depth + 1; i++) {
        match += "-";
    }
    var fakeLeft = -1;
    var fakeRight = -1;


    for(var i = 0;i<str.length;i++){      
        //find left and right index    
        if(str[i]=='-'){
            depthCount+=1;
            if(depthCount==depth+1 && str[i+1]!='-'){               
                if(isLeft){
                    leftStartIndex = i;
                    isLeft=false;
                    depthCount=0
                }else
                    rightStartIndex = i             
            }else if( str[i+1]!='-'){
                depthCount=0;
            }
        }
    }
    console.log(` left and right = ${leftStartIndex},${rightStartIndex}`)
    var leftStr,rightStr
    //var NODE = new TreeNode(str[0])
    var NODE = new TreeNode(str.slice(0,leftStartIndex<0?str.length:leftStartIndex-depth))
    //console.log(`[depth, left idx, right idx] : [${depth}, ${leftStartIndex},${rightStartIndex}]`)
    if(leftStartIndex>0){
        leftStr = str.slice(leftStartIndex+1,rightStartIndex<0?str.length:rightStartIndex-depth)
        NODE.left=transTree(leftStr,depth+1);
    }
    if(rightStartIndex>0){
        rightStr = str.slice(rightStartIndex+1,str.length)
        NODE.right=transTree(rightStr,depth+1);
    }
    //console.log(`[left str, right str] : [${leftStr},${rightStr}]`)
    return NODE;


    
}

//Input: traversal = "1-2--3--4-5--6--7"
//Output: [1,2,5,3,4,6,7]
//
//Input: traversal = "1-2--3---4-5--6---7"
//Output: [1,2,5,3,null,6,null,4,null,7]
//
//Input: traversal = "1-401--349---90--88"
//Output: [1,401,null,349,88,90]


var traversal = "1-401--349---90--88"


console.log(recoverFromPreorder(traversal))


//Runtime: 116 ms, faster than 13.04% of JavaScript online submissions for Recover a Tree From Preorder Traversal.
//Memory Usage: 44 MB, less than 65.22% of JavaScript online submissions for Recover a Tree From Preorder Traversal.