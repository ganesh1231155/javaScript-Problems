// The string "PAYPALISHIRING" is written in
// a zigzag pattern on a given number of rows like this:
// (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
 

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows==1) return s;
    let ans="";
    for(let i=0;i<numRows;i++){
        for(let j=i;j<s.length;j+=(2*(numRows-1))){
            ans+=s[j];
            if(i>0&&i<numRows-1&&j+(2*(numRows-1))-(2*i)<s.length){
                ans+=s[j+(2*(numRows-1)-(2*i))];
            }
        }
    }
    return ans
};
console.log(convert("PAYPALISHIRING", 3)); // Output: "PAHNAPLSIIGYIR"
console.log(convert("PAYPALISHIRING", 4)); // Output: "PINALSIGYAHRPI"
console.log(convert("A", 1)); // Output: "A"
console.log(convert("AB", 1)); // Output: "AB"