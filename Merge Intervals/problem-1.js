// Problem: Given a collection of intervals, merge all overlapping intervals.

// Example:
// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]

// Approach:
// Sort by starting time.
// Merge intervals if current start ≤ previous end.

function mergeIntervals(intervals){

    if(intervals.length<=1) return intervals;
    intervals.sort((a,b)=>a[0]-b[0]);
    const merged=new Array();
    
    let prev=intervals[0];
    merged.push(intervals[0]);
    for(let interval of intervals){
        let prevEnd=prev[1];
        let currStart=interval[0];
        let currEnd=interval[1];
        if(currStart<=prevEnd){
            prev[1]=Math.max(prevEnd,currEnd);
        }else{
            prev=interval;
            merged.push(prev);
        }
    }
    return merged;

}

const intervals=[[1,3],[8,10],[2,6],[15,18],[9,13]];
console.log(mergeIntervals(intervals));
