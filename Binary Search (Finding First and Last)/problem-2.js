// Count Occurrences of Target in Sorted Array
// Statement:
// Given a sorted array and a target value, return how many times the target appears in the array.

// Example:
// Input: nums = [2, 4, 4, 4, 6, 6, 8], target = 4
// Output: 3

// Hint: Find first and last index of target, then count = last - first + 1.

function occurance(nums,target){

    nums.sort((a,b)=>a-b);
    function findPositions(isFirst){
        let left=0,right=nums.length-1,bound=-1;
        while(left<=right){
            let mid=Math.floor((left+right)/2);
            if(nums[mid]===target){
                bound=mid;
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
    const result=[findPositions(true),findPositions(false)];
    return result[1]!=-1 ? (result[1]-result[0]+1) : 0;
}

const nums=[2, 6, 6, 8];
const target=4;
console.log(occurance(nums,target));