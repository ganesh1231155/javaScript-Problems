// Bitmask DP
function hamiltonianPathBitmask(graph,n){
    const DP= Array.from({length:1<<n},()=> Array(n).fill(false));

    for(let i=0;i<n;i++){
        DP[1<<i][i]=true;
    }

    for(let mask=1;mask<(1<<n);mask++){
        for(let u=0;u<n;u++){
            if(!(mask&(1<<u))||!DP[mask][u]) continue;

            for(let v of graph[u])
            {
                if(!(mask&(1<<v))){
                    DP[mask|(1<<v)][v]=true;
                }
            }
        }
    }
    for(let i=0;i<n;i++){
        if(DP[(1<<n)-1][i]) return true;
    }

    return false;
}

const graph = [
    [1, 2],     // 0
    [0, 2, 3],  // 1
    [0, 1, 3],  // 2
    [1, 2]      // 3 
];
console.log(hamiltonianPathBitmask(graph, 4));

