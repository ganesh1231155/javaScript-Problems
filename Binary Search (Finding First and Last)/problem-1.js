// First and Last Position in Sorted Array
// Statement:
// Given an array of integers nums sorted in ascending order,
// and an integer target, return the starting and ending position of the target.
// If the target is not found in the array, return [-1, -1].

// Example:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3, 4]

function firstLast(nums,target){
    nums.sort((a,b)=>a-b);
    let count=0;
    function findBound(isFirst){
        let left=0, right=nums.length-1,bound=-1;
        while(left<=right){
            let mid=Math.floor((left+right)/2);
            if(nums[mid]==target){
                bound=mid;
                count++;
                if(isFirst){
                    right=mid-1;
                }else{
                    left=mid+1;
                }
            }else if(nums[mid]<target){
                left=mid+1;
            }else{
                right=mid-1;
            }
        }
        return bound;
    }  
    return [[findBound(true),findBound(false)],count];   
}
const nums=[5,7,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,10];
console.log(nums.length);
console.log(firstLast(nums,8));