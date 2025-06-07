// Given a linked list, swap every two adjacent nodes and return its head. 
// You must solve the problem without modifying the values in the list's nodes 
// (i.e., only nodes themselves may be changed.)

// Example 1:
// Input: head = [1,2,3,4]
// Output: [2,1,4,3]

//Example 2:
// Input: head = []
// Output: []

// Example 3:
// Input: head = [1]
// Output: [1]

// Example 4:
// Input: head = [1,2,3]
// Output: [2,1,3]

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
var swapPairs = function(head) {
    if(head==null||head.next==null) return head;
    let prev=head;
    let temp=head.next.next;
    head=head.next;
    prev.next=head.next;
    head.next=prev;
    
    while(temp&&temp.next){
        let curr=temp;
        let nex=temp.next;
        curr.next=nex.next;
        nex.next=curr;
        prev.next=nex;
        prev=prev.next?prev.next.next:null;
        temp=temp.next?temp.next:null;
    }

    return head;
};