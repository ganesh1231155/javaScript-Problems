// Problem 1: Basic Kth Largest Element
// Problem:
// Given an array nums = [3,2,1,5,6,4] and k = 2, find the 2nd largest element.

// Expected Output: 5

// Hint: Use a min-heap of size k.

// Problem 2: Kth Largest Element in a Stream
// Problem:
// Design a class that finds the kth largest element in a stream.
// Initialize it with an integer k and an array of integers. Implement the method add(val).

// js
// Copy
// Edit
// let kthLargest = new KthLargest(3, [4,5,8,2]);
// kthLargest.add(3);  // returns 4
// kthLargest.add(5);  // returns 5
// kthLargest.add(10); // returns 5
// kthLargest.add(9);  // returns 8
// kthLargest.add(4);  // returns 8

class minHeap{

    constructor(nums){
        this.heap=[];
        for(let num of nums){
            this.insert(num);
        }
    }
    insert(val){
        this.heap.push(val);
        this.bubbleUp();
    }

    bubbleUp(){
        let index=this.heap.length-1
        const element=this.heap[index];
        while(index>0){
            let parentIndex=Math.floor((index-1)/2);
            const parent=this.heap[parentIndex];
            if(element>parent) break;
            this.heap[index]=parent;
            this.heap[parentIndex]=element;
            index=parentIndex;
        }
    }

    extractMin(){
        if(this.heap.length ===1) return this.heap.pop();
        const min=this.heap[0];
        this.heap[0]=this.heap.pop();
        this.sinkDown(0);
        return min;
    }

    sinkDown(index){
        let length=this.heap.length;
        const element=this.heap[index];
        while(true){
            let left=(2*index)+1;
            let right=(2*index)+2;
            let swap=null;
            if(left<length&&this.heap[left]<element) swap=left;
            if(right<length&&this.heap[right]<(swap!=null?left:element)) swap=right;
            if(swap===null) break;
            this.heap[index]=this.heap[swap];
            this.heap[swap]=element;
            index=swap;
        }
    }
    add(val){
        this.insert(val);
    }
    get(){
        return this.heap;
    }
    size(){
        return this.heap.length;
    }
    peek(){
        return this.heap[0];
    }
    findheapElement(k){
        const temp = [...this.heap]; // Create a copy
        temp.sort((a,b)=>b-a);
        return temp[k-1];
    }
}
 

const nums=[4,5,8,2];
const k=3;

const heap=new minHeap(nums);
heap.add(3);  // returns 4
console.log(heap.findheapElement(k));
heap.add(5);  // returns 5
console.log(heap.findheapElement(k));
heap.add(10); // returns 5
console.log(heap.findheapElement(k));
// console.log(heap.get());
heap.add(9);  // returns 8
console.log(heap.findheapElement(k));
// console.log(heap.get());
heap.add(4);  // returns 8
console.log(heap.findheapElement(k));
console.log(heap.get());
