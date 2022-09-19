/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */
 var hasCycle = function(head) {
        // initial with fast and slow pointers with head
        let slow = head
        let fast = head
        //traverse linked list
        while(fast && fast.next){
            // fast moves by two
            fast = fast.next.next
            // slow moves by one
            slow = slow.next
            // two pointers meet, cycle
            if(fast === slow){
                return true
            }
        }
        
        return false
};