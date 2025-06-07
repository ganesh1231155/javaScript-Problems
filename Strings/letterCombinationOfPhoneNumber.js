// Example 1:
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 2:
// Input: digits = ""
// Output: []

// Example 3:
// Input: digits = "2"
// Output: ["a","b","c"]
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    
    if(!digits.length) return [];

    const letters={
        2:"abc",
        3:"def",
        4:"ghi",
        5:"jkl",
        6:"mno",
        7:"pqrs",
        8:"tuv",
        9:"wxyz"
    }
    const res=[];
    function backtrack(index,combination){
        if(index==digits.length){
            res.push(combination);
            return;
        }
        for(let letter of letters[digits[index]])
        {
            backtrack(index+1,combination+letter);
        }
    }
    backtrack(0,"");
    return res;
};