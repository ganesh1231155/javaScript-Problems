// Number of Subsets
// Given a set with  n elements, how many subsets does it have?

// Solution:
// A set with n elements has 
// 2^n subsets (including the empty set and the set itself).

function countSubSet(set){
    return Math.pow(2,set.length);
}
console.log(countSubSet([1,2]));