// Proper Subsets
// How many proper subsets does the set 
// C={a,b,c,d} have?

// Solution:
// Total subsets = 2^4=16

// Proper subsets = 2^4−1=15(excluding the set itself)

const properSubset=(set)=>{
    if(set.length===0) return 0;
    return Math.pow(2,set.length)-1
}
const set=[1,2,3,4,5];
console.log(properSubset(set));