// Given n pairs of parentheses, write a function to generate
// all combinations of well-formed parentheses.

// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:
// Input: n = 1
// Output: ["()"]

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    
    const res=[];
    function backTrack(open,close,combination)
    {
        if(combination.length==2*n&&open==close)
        {
            res.push(combination);
            return;
        }
        if(open<n){
            backTrack(open+1,close,combination+"(");
        }
        if(close<open){
            backTrack(open,close+1,combination+")")
        }
    }
    backTrack(0,0,"");
    return res;
};