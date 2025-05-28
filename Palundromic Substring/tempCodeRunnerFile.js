function PalindromicSubStrings(s){
    if(s.length==0) return "";
    const result=[];
    const n=s.length;
    let start=0;
    let maxLen=0;
    const dp=Array.from(Array(n),()=>Array(n).fill(false));
    for(let i=0;i<n;i++){
        dp[i][i]=true;
    }
    for(let i=0;i<n-1;i++){
        if(s[i]===s[i+1]){
            dp[i][i+1]=true;
            result.push(s[i]+s[i+1]);
            start=i;
            maxLen=2;
        }
    }
    for(let len=3;len<n;len++){
        for(let i=0;i<=n-len;i++){
            let j=i+len-1;
            if(s[i]===s[j]&&dp[i+1]===dp[j-1]){
                dp[i][j]=true;
                result.push(s.substring(i,i+len));
                start=i;
                maxLen=len;
            }
        }
    }
    return result;

}

console.log(PalindromicSubStrings("babbabad"));