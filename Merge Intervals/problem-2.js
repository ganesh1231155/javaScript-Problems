// Insert Interval
// Problem: Given a sorted list of non-overlapping intervals and a new interval, insert and merge it.

// Example:
// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]

function insertInterval(intervals,newInterval){
    const result=new Array();
    let i=0;

    while(i<intervals.length&&intervals[i][1]<newInterval[0]){
        result.push(intervals[i]);
        i++;
    }
    while(i<intervals.length&& intervals[i][0]<=newInterval[1])
    {
        newInterval[0]=Math.min(intervals[i][0], newInterval[0]);
        newInterval[1]=Math.max(intervals[i][1], newInterval[1]);
        i++;
    }
    result.push(newInterval);
    while(i<intervals.length){
        result.push(intervals[i]);
        i++;
    }
    return result;
}

const intervals=[[1,3],[6,9]];
const newInterval=[2,5];
console.log(insertInterval(intervals,newInterval));