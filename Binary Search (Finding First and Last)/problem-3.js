// Index of First Element Greater Than Target
// Statement:
// Given a sorted array, find the index of the first element that is greater than a given target.
// Return -1 if no such element exists.

// Example:
// Input: nums = [1, 2, 4, 4, 5, 6], target = 4
// Output: 4 (element 5 is the first greater than 4)

function firstGreater(nums,target){
    let left=0,right=nums.length-1,result=-1;
    while(left<=right){
        const mid=Math.floor((left+right)/2);
        if(nums[mid]>target){
            result=mid;
            right=mid-1;
        }else{
            left=mid+1;
        }
    }
    return result;
}

const nums=[1, 2, 4, 4, 5, 6];
const target = 4;
console.log(firstGreater(nums,target));