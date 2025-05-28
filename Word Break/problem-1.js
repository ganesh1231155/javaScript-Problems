// Problem: Word Break I
// 📝 Problem Statement:
// Given a string s and a dictionary of strings wordDict,
// return true if s can be segmented into a space-separated sequence
// of one or more dictionary words.

function wordBreak(s,dic){

    const set=new Set(dic);
    const dp=new Array(s.length+1).fill(false);
    dp[0]=true;
    for(let i=1;i<=s.length;i++){
        for(let j=0;j<i;j++){
            if(dp[j] && set.has(s.substring(j,i)))
            {
                dp[i]=true;
                break;
            }
        }
    }
    return dp[s.length];
}

console.log(wordBreak("applepenapple",["apple","pen"]));