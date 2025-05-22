// Non-overlapping Intervals — a classic greedy algorithm problem.
// Problem: Find the minimum number of intervals you need to remove to make the rest non-overlapping.

// Example:
// Input: [[1,2],[2,3],[3,4],[1,3]]
// Output: 1 (remove [1,3])

function removeInterval(intervals){

    if(intervals.length<=1) return intervals;

    intervals.sort((a,b)=>a[1]-b[1]);
    let count=0;
    let end=intervals[0][1];
    for(let i=1;i<intervals.length;i++){
        if(intervals[i][0]>end){
            count++;
            end=intervals[i][1];
        }
    }
    return count;
}

const intervals=[[1,2],[2,3],[3,4],[1,3]];
console.log(removeInterval(intervals));