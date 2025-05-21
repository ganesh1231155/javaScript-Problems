// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.
// Example:
// Input: nums = [2, 7, 11, 15], target = 9  
// Output: [0, 1]  // Because nums[0] + nums[1] == 9

function twoSum(){
    const nums=[2,7,11,15];
    const target=9;
    const hashMap=new Map();

    for(var i=0;i< nums.length;i++){
        var compliment=target-nums[i];
        if(hashMap.has(compliment)){
            return [hashMap.get(compliment),i]
        }
        hashMap.set(nums[i],i);
    }
    return [];
}

console.log(twoSum());