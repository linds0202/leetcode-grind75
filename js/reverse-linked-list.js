/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
 var reverseList = function(head) {
    var newHead = null;
    var tmp = null;
    while (head) {
        tmp = head.next;
        head.next = newHead;
        newHead = head;
        head = tmp;
    }
    return newHead;
};