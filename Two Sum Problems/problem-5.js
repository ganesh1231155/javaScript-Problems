// Subarray Sum Equals K
// Given an array of integers nums and an integer k, 
// return the total number of continuous subarrays whose sum equals to k.

// Example:
// Input: nums = [1, 1, 1], k = 2  
// Output: 2  

function twoSum(nums,k){
    const map =new Map();
    map.set(0,1);
    let count =0;
    let currentSum=0;
    for(let num of nums){
        currentSum+=num;
        if(map.has(currentSum-k)){

            count+=map.get(currentSum-k);
        }
        map.set(currentSum,(map.get(currentSum)||0)+1)
    }
    return count;
}
const nums=[2,3,2,1,6,-1,2]
const k=5;
console.log(twoSum(nums,k));