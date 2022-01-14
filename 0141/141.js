/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    let fastPointer = head
    let lagPointer = head
    
    while(fastPointer!== null){
        lagPointer = lagPointer.next
    
        if(fastPointer.next === null) return false
        
        fastPointer = fastPointer.next.next
        if(fastPointer === lagPointer) return true
    }
    return false
}

//Runtime: 84 ms, faster than 61.79% of JavaScript online submissions for Linked List Cycle.
//Memory Usage: 41.3 MB, less than 65.12% of JavaScript online submissions for Linked List Cycle.