// Subsets of a Given Set
// List all subsets of the set 
// A={1,2}.

// Solution:
// Subsets are:{},{1},{2},{1,2}.

function subSets(set){
    let subsets=[[]];
    for(let i of set){
        let newSubset=subsets.map(ss=>[...ss,i]);
        subsets=[...subsets,...newSubset];
    }
    return {"size":subsets.length,"Subsets":subsets};
}

const set=[1,2,3];
console.log(subSets(set));