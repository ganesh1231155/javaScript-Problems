// Detect cycle in Linked list 

class node{
    constructor(value){
        this.value=value;
        this.next=null;
    }

}

function findCycle(head){
    if(head==null||head.next==null) return false;

    let slow=head;
    let fast=head;
    while(fast!=null||fast?.next!=null){
        slow=slow.next;
        fast=fast.next.next;
        if(slow==fast) return true
    }
    return false;
}
function createLinkedList(data){
    let head=null;
    let prev=null;
    for(let val of data){
        if(head==null){
            head=new node(val);
            prev=head;
        }else{
            let current=new node(val);
            prev.next=current;
            prev=current;
        }
    }
    return head;
}
const data=[1,2,3,4,5,6];

const head=createLinkedList(data);
head.next.next.next.next=head;
console.log(findCycle(head));
