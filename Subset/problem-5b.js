// Subsets with a Specific Sum
// How many subsets of 
// {1,2,3,4,5} have a sum of 5?

// Solution:
// Possible subsets:

// {5}
// {2,3}
// {1,4}
// {1,2,2} – Invalid due to duplicate elements

// Answer: 3 subsets.

function subsetWithSum(set,sum){

    if(set.length===0) return 0;
    const map=new Map();
    map.set(set[0],0);
    const result=[];
    if(set[0]===sum) result.push(set[0]);
    for(let i=1;i<set.length;i++)
    {
        if(set[i]===sum) result.push([sum])
        if(map.has(sum-set[i])){
            result.push([sum-set[i],set[i]]);
        }
        map.set(set[i],i);
    }
    result.sort((a,b)=>a.length-b.length);
    return result;
}
const set=[1,2,3,4,5];
const sum=5;
console.log(subsetWithSum(set,sum));