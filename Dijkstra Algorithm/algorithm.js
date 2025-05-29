
class minHeap{

    constructor(){
        this.heap=[];
    }

    push(node,priority){
        this.heap.push({node,priority});
        this.bubbleUp();
    }

    bubbleUp(){
        let index=this.heap.length-1;
        let element=this.heap[index];
        while(index>0){
            let parentIndex=(Math.floor((index-1)/2));
            let parent=this.heap[parentIndex];
            if(element.priority>parent.priority) break;
            this.heap[index]=parent;
            this.heap[parentIndex]=element;
            index=parentIndex;
        }

    }
    pop(){
        if(this.heap.length==1) return this.heap.pop();
        let min=this.heap[0];
        this.heap[0]=this.heap.pop();
        this.shrinkDown(0);
        return min;
    }
    shrinkDown(index){
        let length=this.heap.length;
        let element=this.heap[index];
        while(true){
            let left=(2*index)+1;
            let right=(2*index)+2;
            let swap=null;
            if(left<length&& this.heap[left].priority<element.priority) swap=left;
            if(right<length&&this.heap[right].priority<(swap==null?element.priority:this.heap[left].priority)) swap=right;
            if(swap==null) break;
            this.heap[index]=this.heap[swap];
            this.heap[swap]=element;
            index=swap;
        }
    }

    isEmpty(){
        return this.heap.length===0;
    }
    size(){
        return this.heap.length;
    }
}

function dijkstra(graph,start){
    const distance={};
    const heap=new minHeap();
    for(let node in graph){
        distance[node]=Infinity;
    }
    distance[start]=0;
    heap.push(start,0);
    while(!heap.isEmpty()){
        const {node,priority}=heap.pop();
        for(let [neighbor,weight] of graph[node]){
            const newDistance=distance[node]+weight;
            if(newDistance<distance[neighbor]){
                distance[neighbor]=newDistance;
                heap.push(neighbor,newDistance);
            }
        }
    }
    return distance;
}

const graph = {
    A: [['B', 1], ['C', 4]],
    B: [['C', 2], ['D', 5]],
    C: [['D', 1]],
    D: []
};

console.log(dijkstra(graph, 'A'));