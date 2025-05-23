// Meeting Rooms
// Problem: Given meeting time intervals, determine if a person can attend all meetings.

// Example:
// Input: [[0,30],[5,10],[15,20]]
// Output: False

// Approach:
// Sort by start.
// Check for overlaps.

function canAttendAllMeeting(meetings){
    if(meetings.length<=1) return true;
    meetings.sort((a,b)=>a[0]-b[0]);

    for(let i=1;i<meetings.length;i++){
        const prevEnd=meetings[i-1][1];
        const currStart=meetings[i][0];
        if(prevEnd>currStart){
            return false;
        }
    }
    return true;
}

const meetings=[[5,10],[0,30],[15,20]]
console.log(canAttendAllMeeting(meetings));