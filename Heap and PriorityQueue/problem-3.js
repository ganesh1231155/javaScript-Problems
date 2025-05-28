class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Get parent index
    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    // Get left child index
    leftChild(i) {
        return 2 * i + 1;
    }

    // Get right child index
    rightChild(i) {
        return 2 * i + 2;
    }

    // Insert a value into the heap
    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    // Heapify up (to maintain max-heap property)
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0 && this.heap[index] > this.heap[this.parent(index)]) {
            [this.heap[index], this.heap[this.parent(index)]] = 
                [this.heap[this.parent(index)], this.heap[index]];
            index = this.parent(index);
        }
    }

    // Extract the max element (root)
    extractMax() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return max;
    }

    // Heapify down (to maintain max-heap property after removal)
    heapifyDown() {
        let index = 0;
        while (this.leftChild(index) < this.heap.length) {
            let largerChild = this.leftChild(index);
            if (this.rightChild(index) < this.heap.length &&
                this.heap[this.rightChild(index)] > this.heap[largerChild]) {
                largerChild = this.rightChild(index);
            }
            if (this.heap[index] >= this.heap[largerChild]) break;
            [this.heap[index], this.heap[largerChild]] = 
                [this.heap[largerChild], this.heap[index]];
            index = largerChild;
        }
    }

    // Get the current max value (without removing it)
    getMax() {
        return this.heap.length ? this.heap[0] : null;
    }

    // Print heap (for debugging)
    printHeap() {
        console.log(this.heap);
    }
}

// Example usage:
const heap = new MaxHeap();
heap.insert(10);
heap.insert(20);
heap.insert(15);
heap.insert(40);
heap.insert(50);

heap.printHeap(); // Output: [50, 40, 15, 10, 20]
console.log(heap.extractMax()); // Output: 50
heap.printHeap(); // Updated heap after removal
