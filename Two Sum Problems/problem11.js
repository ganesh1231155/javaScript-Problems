// Count Pairs with difference equal to k.

// Example:
// arr=[3,2,1,5,4];
// k=2;
// op=3;

function countDifference(nums,k){

    const map=new Map();
    map.set(nums[0],0);
    const pairs=new Set();
    for(let i=1;i<nums.length;i++){
        
        if(map.has(nums[i]+k)){
            pairs.add([nums[i],nums[i]+k].sort((a,b)=>a-b));
        }
        if(map.has(nums[i]-k)){
            pairs.add([nums[i],nums[i]-k].sort((a,b)=>a-b));
        }
        map.set(nums[i],i);
    }
    return [pairs.size,pairs];
}

const nums=[3,2,1,5,4];
const k=2;
console.log(countDifference(nums,k));