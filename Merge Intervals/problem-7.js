// Meeting Rooms II
// Problem: Find the minimum number of conference rooms required.

// Example:
// Input: [[0,30],[5,10],[15,20]]
// Output: 2

function minRooms(meetings){
    meetings.sort((a,b)=>a[0]-b[0]);
    const stack=[];
    stack.push(meetings[0][1]);
    for(let i=1;i<meetings.length;i++){
        if(stack[stack.length-1]<=meetings[i][0]){
            stack.pop();
        }
        stack.push(meetings[i][1]);
    }
    return stack.length;
}

const meetings=[[5,10],[0,30],[15,20]];
console.log(minRooms(meetings));