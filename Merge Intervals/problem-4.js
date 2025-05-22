// Minimum Number of Arrows to Burst Balloons
// Problem: Given a list of balloon intervals, find the minimum number of arrows needed to burst all balloons.

// Example:
// Input: [[10,16],[2,8],[1,6],[7,12]]
// Output: 2

function countArrows(intervals){
    if(intervals.length<=1) return 1;

    intervals.sort((a,b)=>a[1]-b[1]);
    let prevEnd=intervals[0][1];
    let arrows=1;
    for(let i=1;i<intervals.length;i++){
        let current=intervals[i];
        if(current[0]>prevEnd){
            arrows++;
            prevEnd=current[1];
        }    
    }
    return arrows;
}

const intervals=[[1,5],[2,6],[3,7],[8,10]];
console.log(countArrows(intervals));