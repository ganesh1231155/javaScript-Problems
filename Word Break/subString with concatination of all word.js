// You are given a string s and an array of strings words. 
// All the strings of words are of the same length.

// A concatenated string is a string that exactly contains 
// all the strings of any permutation of words concatenated.

// For example, if words = ["ab","cd","ef"], then "abcdef", 
//                          "abefcd", "cdabef", "cdefab", 
//                          "efabcd", and "efcdab" 
// are all concatenated strings. "acdbef" is not a concatenated 
// string because it is not the concatenation of any permutation of words.
// Return an array of the starting indices of all the concatenated substrings in s.
// You can return the answer in any order.

// Example 1:
// Input: s = "barfoothefoobarman", words = ["foo","bar"]
// Output: [0,9]

// Explanation:
// The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
// The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.

// Example 2:
// Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
// Output: []

// Explanation:
// There is no concatenated substring.

// Example 3:
// Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
// Output: [6,9,12]

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    // const index=new Set();
    // let n=words.length;
    // let visited=new Array(n).fill(false);

    // function dfs(path,deepth){
    //     if(deepth==n){
    //         let idx=s.indexOf(path);
    //         while(idx!=-1&&!index.has(idx)){
    //             index.add(idx);
    //             idx=s.indexOf(path,idx+1);
    //         } 
    //     }
    //     for(let i=0;i<n;i++){
    //         if(visited[i]) continue;
    //         visited[i]=true;
    //         dfs(path+words[i],deepth+1);
    //         visited[i]=false;
    //     }
    // }
    // dfs("",0);
    // return [...index].sort((a,b)=>a-b);

    // above code works but for large no. of input give Time Limit Exceeded.

    function isPresent(sub,map,wordLength){
        let seen={};
        for(let i=0;i<sub.length;i+=wordLength){
            let word=sub.slice(i,i+wordLength);
            seen[word]=seen[word]+1||1;
            if(seen[word]>map[word]) return false;
        }
        for(let key in map){
            if(seen[key]!==map[key]) return false;
        }
        return true;
    }

    let result=[];
    const wordLength=words[0].length;
    const wordCount=words.length;
    const len=wordLength*wordCount;
    let  map=new Map();
    for(let word of words){
        map.set(word,(map.get(word)||0)+1);
    }
    for(let i=0;i<wordLength;i++)
    {
        let left=i,right=i;
        let seen=new Map();
        let count=0;
        
        while(right+wordLength<=s.length){
            const word=s.slice(right,right+wordLength);
            right+=wordLength;
            if(map.has(word)){
                seen.set(word,(seen.get(word)||0)+1);
                count++;
                while(seen.get(word)>map.get(word)){
                    const leftword=s.slice(left,left+wordLength);
                    seen.set(leftword,seen.get(leftword)-1);
                    count--;
                    left+=wordLength;
                }
                if(count==words.length){
                    result.push(left);
                }
            }else{
                seen.clear();
                count=0;
                left=right;
            }
        }
    }
    return result;
};