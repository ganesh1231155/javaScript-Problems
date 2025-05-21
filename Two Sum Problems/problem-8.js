// Check if Array has a Pair with Given Sum (Yes/No)
// Problem:
// Return true if a pair exists with the given sum, false otherwise.

// Example:
// Input: arr = [1, 4, 45, 6, 10, -8], target = 16  
// Output: true  // (6, 10)

function twoSum(nums,target){

    const map=new Map();
    for(let i=0;i<nums.length;i++){
        const com=target-nums[i];
        if(map.has(com)){
            return true;
        }
        map.set(nums[i],i);
    }
    return false;
}

const nums=[1, 4, 45, 6, 10, -8];
const target=16;
console.log(twoSum(nums,target));