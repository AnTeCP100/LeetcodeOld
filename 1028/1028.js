// DFS TO BFS

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} traversal
 * @return {TreeNode}
 */
 var recoverFromPreorder = function(traversal) {
     
    /**
     *   = floor 1 =>count = 1
     * - = floor 2 =>count = 2
     * -- = floor 3 => count = 4
     */

    var arr = traversal.split('')
    var transArr=[arr[0]]
    var floorCount=0
    var floor [];

    var count=0
    for(var i = 1;i<arr.length-1;i++){
       if(arr[i]=='-'){
           count++
       }else{
           count=0;
       }
    }
    floor.length=count+1
    floor[0] = 1;
    console.log(count)

    for(var i = 1;i<arr.length;i++){
       if(arr[i]=="-"){
           floorCount+=1;
       }else{
           if(floor[floorCount]==null){
               floor[floorCount]=1;
               transArr[Math.pow(2,floorCount)-1]=arr[i]
           }else{
               transArr[Math.pow(2,floorCount)-1+floor[floorCount]]=arr[i]
               floor[floorCount]+=1;
           }
           floorCount=0;
       }
    }
    transArr.forEach(element => {
        if(element==null){
            element="null"
        }
    });
    console.log(floor)
    console.log(transArr)
};

//Input: traversal = "1-2--3--4-5--6--7"
//Output: [1,2,5,3,4,6,7]
//
//Input: traversal = "1-2--3---4-5--6---7"
//Output: [1,2,5,3,null,6,null,4,null,7]
//
//Input: traversal = "1-401--349---90--88"
//Output: [1,401,null,349,88,90]

var traversal = "1-2-3--4--.-5"
console.log(recoverFromPreorder(traversal))

