// Two Sum Closest
// Given an array and a target, find the pair whose sum is closest to the target.

// Example:
// Input: arr = [10, 22, 28, 29, 30, 40], target = 54  
// Output: (22, 30)  // sum = 52 is closest to 54

function twoSum(nums,target){

    nums.sort((a,b)=>a-b);
    let left=0;
    let right=nums.length-1;
    let pair=[nums[left],nums[right]];
    let closeDiff=Math.abs(nums[left]+nums[right]-target);

    while(left<right){
        const sum=nums[left]+nums[right];
        const diff= Math.abs(sum-target);
        
        if(closeDiff>diff){
            closeDiff=diff;
            pair=[nums[left],nums[right]];
        }

        if(sum<target){
            left++;
        }else{
            right--;
        }

    }
    return pair;
}

const nums=[10, 22, 28, 29, 30, 40];
const target=54;
console.log(twoSum(nums,target));