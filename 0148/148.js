/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var sortList = function(head) {
    var ret = null;
    var sav_arr = [];
    var curNode = head;
     
    if(head == null)
        return null
     
    while(true)
    {
       var nextNode = curNode.next;
       curNode.next = null;

       sav_arr.push(curNode);
       
       if(nextNode == null)
       {
           break;
       }

       curNode = nextNode
       
    }

    sav_arr.sort((a,b)=>{
        return a.val-b.val
    })

    sav_arr.forEach(e=>{
        if(ret==null)
        {
            ret = e;
        }
        else
        {
            curNode.next = e;
        }
        curNode = e;
    })

    return ret
};