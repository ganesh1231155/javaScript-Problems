// Problem: find Longest Palindromic Substring using Dynamic Programming, we can use a 2D table dp[i][j] where:

// i is the starting index

// j is the ending index

// dp[i][j] is true if the substring from index i to j is a palindrome

function longestPalindromic(s){

    if(s.length===0) return "";
    const n=s.length;
    let start=0;
    let maxLen=0;
    const dp=Array.from(Array(n),()=>Array(n).fill(false));
    for(let i=0;i<n;i++)
    {
        dp[i][i]=true;
    }

    for(let i=0;i<n-1;i++){
        if(s[i]===s[i+1]){
            dp[i][i+1]=true;
            start=i;
            maxLen=2;
        }
    }
    // if(n==3 && s[0]===s[2]&&dp[1][1]){
    //     return s
    // }

    for(let len=3;len<=n;len++){
        for(let i=0;i<=n-len;i++){
            let j=i+len-1;
            if(s[i]===s[j]&&dp[i+1][j-1]){
                dp[i][j]=true;
                if(len>maxLen){
                    start=i;
                    maxLen=len;
                }
            }
        }
    }

    return s.substring(start,start+maxLen);

}
console.log(longestPalindromic("ccc"));