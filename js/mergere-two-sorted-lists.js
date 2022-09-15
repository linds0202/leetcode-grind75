
// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// /**
// //  * @param {ListNode} list1
// //  * @param {ListNode} list2
// //  * @return {ListNode}
// //  */

var mergeTwoLists = function(list1, list2) {
    let list = new ListNode()
    let head = list
    
    while (list1 !== null && list2 !== null) {
	
		// Select the smallest value from either linked list,
		// then increment that list forward.
        if (list1.val < list2.val) {
            list.next = new ListNode(list1.val)
            list1 = list1.next
        } else {
            list.next = new ListNode(list2.val)
            list2 = list2.next
        }
        
        list = list.next
    }
    
	// It's possible that one linked list is shorter than the other so we just
	// add on the remainder of the last linked list. It's already sorted :)
    if (list1 !== null)
        list.next = list1
    if (list2 !== null)
        list.next = list2
    
	// return .next because this first element in the linkedlist is empty
    return head.next
};

// var mergeTwoLists = function(list1, list2) {
//     // If either list is empty, return the other list's node
//     if (list1 === null) return list2;
//     if (list2 === null) return list1;

//     if (list1.val < list2.val) {
//         list1.next = mergeTwoLists(list1.next, list2);
//         return list1;
//     } else {
//         list2.next = mergeTwoLists(list1, list2.next);
//         return list2;
//     }
// };

//console.log(mergeTwoLists(list1, list2))