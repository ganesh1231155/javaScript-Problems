// Problem: Word Break II (Generate all valid segmentations)
// Problem Statement:
// Return all possible sentences by inserting spaces into s such that each word is in wordDict.

function findSentence(s,words){
    const set=new Set(words);
    const maxLen=words.reduce((max,word)=>Math.max(max,word.length),0);
    const memo=new Map();

    function dfs(start){
        if(memo.has(start)) return memo.get(start);
        if(start==s.length) return [""];
        let result=[];
        for(let end=start+1;end<=Math.min(s.length,start+maxLen);end++){
            const word=s.slice(start,end);
            if(set.has(word)){
                const restSentence=dfs(end);
                for(sentence of restSentence){
                    result.push(word+(sentence?" "+sentence:""));
                }
            }
        }
        memo.set(start,result);
        return result;
    }
    return dfs(0);
}
console.log(findSentence("catsanddog",["cat","cats","sand","and","dog"]));