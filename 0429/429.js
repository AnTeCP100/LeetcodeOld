/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
 var nodeArr = []

 var BFS =  function(root,floor){
     console.log("after add "+root)
     if(nodeArr[floor]==null){
         var newN = []
         newN[0]=root.val
         nodeArr.push(newN);
     }else{
         nodeArr[floor].push(root.val);
     }
     if(root.children.length>0){
         for(var i = 0;i<root.children.length;i++){
             BFS(root.children[i],floor+1);
         }
     }
     return true
 }
 /**
  * @param {Node|null} root
  * @return {number[][]}
  */
  var levelOrder = function(root) {
      var floor = 0;
      nodeArr=[];
      console.log("before add "+root)
      if(root != null){
          BFS(root,floor);
        }
      return nodeArr;
 };
//Input: root = [1,null,3,2,4,null,5,6]
//Output: [[1],[3,2,4],[5,6]]


//Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
//Output: [[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]

var root = [1,null,3,2,4,null,5,6]
//root is a tree

//console.log(levelOrder(root))