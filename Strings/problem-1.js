// Given a string s, find the length of the longest substring without 
// duplicate characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length<=1) return s.length;
    // const set=new Set();
    let i=0,max=0;
    // while(j<s.length){
    //     if(!set.has(s[j]))
    //     {
    //         set.add(s[j++]);
    //         max=Math.max(max, set.size);
    //     }else{
    //         set.delete(s[i++])
    //     }
    // }
    const map=new Map();
    for(let j=0;j<s.length;j++)
    {
        if(map.has(s[j])){
            i=Math.max(i,map.get(s[j])+1);
        }
        max=Math.max(max,(j-i+1));
        map.set(s[j],j);
    }
    return max;
    
};
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1    
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3
console.log(lengthOfLongestSubstring("")); // Output: 0