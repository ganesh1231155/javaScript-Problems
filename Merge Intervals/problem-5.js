// Employee Free Time (Hard)
// Problem: Given schedules of employees, return the time intervals when all employees are free.

// Example:
// Input: [[[1,2],[5,6]],[[1,3]],[[4,10]]]
// Output: [[3,4]]

class intervals{
    constructor(start,end){
        this.start=start;
        this.end=end;
    }
}
function freeTime(schedules){
    const allIntervals=[];
    for(emp of schedules){
        for(interval of emp){
            allIntervals.push(new intervals(interval[0],interval[1]));
        }
    }
    allIntervals.sort((a,b)=>a.start-b.start);

    const merged=[];
    let prev=allIntervals[0];
    for(let i=1;i<allIntervals.length;i++){
        let current=allIntervals[i];
        if(current.start<=prev.end){
            prev.end=Math.max(prev.end,current.end)
        }else{
            merged.push(prev);
            prev=current;
        }
    }
    merged.push(prev);
    const freeTime=[];
    for(let i=1;i<merged.length;i++){
        const prevEnd=merged[i-1].end;
        const currStart=merged[i].start;
        if(prevEnd<currStart){
            freeTime.push([prevEnd,currStart]);
        }
    }
    return freeTime;
}
console.log(freeTime([[[1,2],[5,6]],[[1,3]],[[4,10]]]));