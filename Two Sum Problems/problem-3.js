//  Count Pairs with Given Sum
// Given an array of integers and a sum, count the number of pairs with that sum.

// Example:

// Input: arr = [1, 5, 7, -1], sum = 6  
// Output: 2  // (1, 5) and (7, -1)

function twoSum(){
    const arr = [1, 5, 7, -1];
    const sum=6;
    var count=0;
    const hashMap=new Map();
    for(let i=0;i<arr.length;i++){
        var compliment=sum-arr[i];
        if(hashMap.has(compliment)){
            count++;
        }
        hashMap.set(arr[i],i);
    }
    return count;
}

console.log(twoSum());