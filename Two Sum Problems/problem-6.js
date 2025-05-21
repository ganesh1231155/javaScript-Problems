// Two Sum in Unsorted Array with No Duplicates (Follow-up Challenge)
// Return all the pairs (i, j) such that nums[i] + nums[j] == target and i < j.
// Ensure no duplicates in the answer.
// Example:
// Input: nums = [1, 2, 3, 2], target = 4  
// Output: [[0, 2], [1, 3]]

function twoSum(nums,target){

    const map=new Map();
    const unique=new Set();
    for(let i=0;i<nums.length;i++){
        const com=target-nums[i];
        if(map.has(com)&&!unique.has([map.get(com),i]))
        {
            unique.add([map.get(com),i]);
        }
        map.set(nums[i],i);
    }
    return unique;
}

const nums=[1, 2, 3, 2];
const target=4;
console.log(twoSum(nums,target));