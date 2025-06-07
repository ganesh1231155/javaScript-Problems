// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack=[];
    var res=0;
    for(let i of s){
        switch(i){
            case "(": stack.push(")");
                break;
            case "[":stack.push("]");
                break;
            case "{": stack.push("}");
                break;
            default:
                if(i!=stack.pop()){
                    return false;
                }
        }
    }

    return stack.pop()?false:true;
};