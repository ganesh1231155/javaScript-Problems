// Subsets with a Specific Sum
// How many subsets of 
// {1,2,3,4,5} have a sum of 5?

// Solution:
// Possible subsets:

// {5}
// {2,3}
// {1,4}
// {1,2,2} – Invalid due to duplicate elements

// Answer: 3 subsets.

//worst-case:
// Time complexity: O(2^n)
// space complexity: O(n)
function findSubsetsWithSum(set, targetSum) {
    const result = [];

    function backtrack(start, path, sum) {
        if (sum === targetSum) {
            result.push([...path]);
            return;
        }
        if (sum > targetSum) {
            return;
        }
        for (let i = start; i < set.length; i++) {
            path.push(set[i]);
            backtrack(i + 1, path, sum + set[i]);
            path.pop();
        }
    }

    backtrack(0, [], 0);
    return result;
}

// Example usage
const set = [1, 2, 3, 4, 5];
const targetSum = 5;
const subsets = findSubsetsWithSum(set, targetSum);

console.log(`Subsets of [${set}] with sum ${targetSum}:`);
subsets.forEach(subset => console.log(subset));


