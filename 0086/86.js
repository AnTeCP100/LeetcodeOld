/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
 var partition = function(head, x) {

    //break the linkslist and re-format
    //or
    //dp?

    var fakeFstNode = new ListNode();
    fakeFstNode.val = 0;
    fakeFstNode.next = head;
    var retval = new ListNode();
    var nowNode = fakeFstNode;
    var lastNode = retval;

    while(true)
    {
        //last one
        if(nowNode.next==null)
            break;
        
        //can not know who is before now node, so need to check the next node
        if(nowNode.next.val < x)
        {
            //tranform the link list
            lastNode.next = nowNode.next;
            lastNode = nowNode.next; //pointer to next node
            nowNode.next = nowNode.next.next;      
        }
        else if(nowNode.next != null)
            nowNode = nowNode.next;
        else 
            break;
    }


    //combine the link list
    lastNode.next = fakeFstNode.next;
    return retval.next;
     

    
    //var retval = new ListNode(),nowNode;
    //nowNode = retval;

    //var nextNodeFunc = function(listNode)
    //{
    //    if(listNode.next == null)
    //        return;
    //    
    //    //can not know who is before now node, so it need to check the next node
    //    if(listNode.next.val < x)
    //    {
    //        /tranform the link list/
    //        nowNode.next = listNode.next;
    //        nowNode = listNode.next; //pointer to next node
    //        listNode.next = listNode.next.next;
    //        if(listNode.next != null)
    //            nextNodeFunc(listNode)
    //        
    //    }      
    //    else if(listNode.next != null)
    //        nextNodeFunc(listNode.next)
    //}
//
    //
    ////create the first node
    //var fakeFstNode = new ListNode()
    //fakeFstNode.val = x-1;
    //fakeFstNode.next = head;
    //nextNodeFunc(fakeFstNode);
//
    ////combine the link list
    //nowNode.next = fakeFstNode.next;
    // 
    //return retval.next;
};

//Runtime: 72 ms, faster than 94.93% of JavaScript online submissions for Partition List.
//Memory Usage: 40.2 MB, less than 63.66% of JavaScript online submissions for Partition List.



//Runtime: 116 ms, faster than 20.00% of JavaScript online submissions for Partition List.
//Memory Usage: 43.7 MB, less than 5.63% of JavaScript online submissions for Partition List.