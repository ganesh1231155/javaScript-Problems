// Given a sorted array of integers numbers and a target integer,
// return the 1-based indices of the two numbers that add up to the target.
// Example:
// Input: numbers = [2, 3, 4], target = 6  
// Output: [1, 3]
// 1-based indices

function twoSum(){
    const nums=[2, 3, 4];
    const target=6;
    var left=0;
    var right=nums.length-1;
    while(left<right)
    {
        const sum=nums[left]+nums[right];
        if(sum==target){
            return [left+1,right+1];
        }
        if(sum<target){
            left++;
        }else{
            right++;
        }
    }
    return [];
}

console.log(twoSum());