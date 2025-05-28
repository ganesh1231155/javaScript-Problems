
// implementing LRU Cache using map and Doubly linked list.
class node{
   constructor(key,val){
    this.key=key;
    this.val=val;
    this.next=null;
    this.prev=null;
   }
}

class LRUCache{
    constructor(capacity){
        this.capacity=capacity;
        this.map=new Map();
        this.head=new node(0,0);
        this.tail=new node(0,0);
        this.head.next=this.tail;
        this.tail.prev=this.head;
    }
    _add(node){
        node.next=this.head.next;
        node.prev=this.head;
        this.head.next.prev=node;
        this.head.next=node;
    }
    _remove(node){
        
        node.prev.next=node?.next;
        node.next.prev=node?.prev;
    }
    display(){
        let temp=this.head;
        while(temp!=null){
            console.log(temp.val,"->");
            temp=temp.next;
        }
    }

    get(key){
        if(!this.map.has(key)) return "Not Found.";

        const node=this.map.get(key);
        // this.map.delete(key);
        this._remove(node);
        this._add(node);
        return node.val;
    }

    put(key,val){
        if(this.map.has(key)) this._remove(map.get(key));
        
        const newNode=new node(key,val);
        this._add(newNode);
        this.map.set(key,newNode);
        if(this.map.size >this.capacity){
            const lru=this.tail.prev;
            this._remove(lru);
            this.map.delete(lru.key);
        }
        return "Size : "+this.map.size;
    }
}

const lru=new LRUCache(2);
console.log(lru.put(1,1));
console.log(lru.put(2,2));
console.log(lru.get(1));
console.log(lru.put(3,3));
console.log(lru.put(4,4));
// lru.display();
console.log(lru.get(2));