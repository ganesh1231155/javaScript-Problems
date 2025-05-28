// Index of Last Element Smaller Than Target
// Statement:
// Find the index of the last element in a sorted array that is smaller than the target.
// Return -1 if no such element exists.

// Example:
// Input: nums = [1, 2, 4, 4, 5, 6], target = 4
// Output: 1 (element 2 is the last smaller than 4)

function lastSmaller(nums,target){

    let left=0,right=nums.length-1,result=-1;
    while(left<=right){
        const mid=Math.floor((left+right)/2);
        if(nums[mid]<target){
            result=mid;
            left=mid+1;
        }else{
            right=mid-1;
        }
    }
    return result;
}
const nums = [1, 2,3, 4, 4, 5, 6];
const target = 4;
console.log(lastSmaller(nums,target));