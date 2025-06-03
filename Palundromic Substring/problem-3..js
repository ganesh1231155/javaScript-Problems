const longestPalindrome = s => {
    if (s.length === 1 || s.length === 0) return s

    let start = 0,
        end = 0

    const checkPalindrome = (arr, index) => {
        if (index === arr.length) return;

        const n = arr.length;
        let left = index,right = index;

        while (right < n - 1 && arr[right] === arr[right + 1]) right++

        index = right; 

        
        while (left > 0 && right < n - 1 && arr[right + 1] === arr[left - 1]) {
            right++;
            left--;
        }

        if (right - left > end - start) {
            start = left;
            end = right;
        }

        checkPalindrome(arr, index + 1) ;

    }

    // Check palindromes
    checkPalindrome(s.split(''), 0);

    // Return the longest palindromic substring
    return s.substring(start, end + 1);
}