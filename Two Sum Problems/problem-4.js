// Two Sum – Unique Pairs
// Return the count of unique pairs that sum to a given value.
// Example:
// Input: arr = [1, 1, 2, 2, 3, 4], target = 4  
// Output: 2  // (1, 3), (2, 2)

function twoSum(){
    const arr=[1,1,2,2,3,4];
    const target=4;
    var count=0;
    const unique=new Set();
    const hashMap=new Map();

    for(var i=0;i<arr.length;i++){
        const compliment=target-arr[i];
        if(hashMap.has(compliment)&&!unique.has([compliment,arr[i]])){
            unique.add([compliment,arr[i]]);
            count++;
        }
        hashMap.set(arr[i],i);
    }
    return [count,unique];
}

console.log(twoSum());