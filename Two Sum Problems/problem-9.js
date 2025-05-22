// Find All Pairs from Two Arrays with Given Sum
// Problem:
// Given two unsorted arrays, find all pairs (a, b) such that a + b = target, where a belongs to arr1 and b to arr2.

// Example:
// arr1 = [1, 2, 4, 5, 7], arr2 = [5, 6, 3, 4, 8], target = 9  
// Output: [(1, 8), (4, 5), (5, 4)]

function twoSum(arr1,arr2,target){

    const result=new Set();
    const set=new Set(arr2);
    for(let num of arr1){
        if(set.has(target-num)&&!result.has([num,target-num]))
        {
            result.add([num,target-num]);
        }
    }
    return result;

}
const arr1=[1, 2, 4, 5, 7];
const arr2=[5, 6, 3, 4, 8];
const target=9;
console.log(twoSum(arr1,arr2,target));
