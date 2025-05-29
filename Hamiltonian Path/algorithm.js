// Backtracking.
function hamiltonianPath(graph,n){

    function dfs(node,visitedCount,visited){
        if(visitedCount===n) return true;
        for(let neighbor of graph[node])
        {
            if(!visited[neighbor]){
                visited[neighbor]=true;
                if(dfs(neighbor,visitedCount+1,visited)) return true;
                visited[neighbor]=false;

            }
        }
        return false;
    }
    for(let start=0;start<n;start++){
        const visited=new Array(n).fill(false);
        visited[start]=true;
        if(dfs(start,1,visited)) return true;
    }
    return false;
}
const graph = [
    [1, 2],     // 0
    [0, 2, 3],  // 1
    [0, 1, 3],  // 2
    [1, 2]      // 3
];
console.log(hamiltonianPath(graph, 4));
