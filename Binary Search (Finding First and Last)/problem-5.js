// Find Range of Target in Infinite Sorted Array
// Statement:
// Youre given a reader interface get(index) for a sorted array of unknown length 
// (you cannot access the array directly). Implement a function to find the starting
//  and ending position of a target number.

// Hint: First find bounds using exponential search, then apply binary search for first and last position.

class InfiniteArray{
    constructor(arr){
        this.arr=arr;
    }
    get(index)
    {
        return index>=this.arr.length?Infinity:this.arr[index];
    }

    findRange(target){

        let start=0;
        let end=1;
        while(this.get(end)<=target){
            if(this.get(end)<target){start=end};
            end*=2;
        }
        const first=this.binarySearch(target,start,end,true);
        if(first ===-1) return [-1,-1];
        const last=this.binarySearch(target,start,end,false);
        
        return [first,last];
    }

    binarySearch(target,left,right,isFirst){
        let result=-1;
        while(left<=right){
            const mid=Math.floor((left+right)/2);
            const value=this.get(mid);
            if(value===target){
                result=mid;
                if(isFirst){
                    right=mid-1;
                }else{
                    left=mid+1;
                }
            }else if(this.get(mid)<target){
                left=mid+1;
            }else{
                right=mid-1;
            }
        }
        return result;
    }
}

const obj=new InfiniteArray([1, 3, 5, 7, 7, 7, 9, 11, 15]);
console.log(obj.findRange(7));
console.log(obj.findRange(9));