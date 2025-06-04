// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single 
// digit. Add the two numbers and return the sum as a linked list.
// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
    display=(list)=> {
        let result = [];
        while (list) {
            result.push(list.val);
            list = list.next;
        }
        return result;
    }
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let result=new ListNode(0);
    let tail=result;
    let carry=0;
    while(l1||l2||carry)
    {
        let sum=carry;
        if(l1){
            sum+=l1.val;
            l1=l1.next;
        }
        if(l2){
            sum+=l2.val;
            l2=l2.next;
        }
        
        let newNode=new ListNode(sum%10);
        carry=Math.floor(sum/10);
        tail.next=newNode;
        tail=tail.next;   
    }
    return result.display(result.next);
};
const l1=new ListNode(2);
l1.next=new ListNode(4);    
l1.next.next=new ListNode(3);
const l2=new ListNode(5);
l2.next=new ListNode(6);
l2.next.next=new ListNode(4);
console.log(addTwoNumbers(l1,l2)); // Output: [7,0,8]