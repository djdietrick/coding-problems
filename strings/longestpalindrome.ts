import {expect} from '../utils/utils.ts';

function longestPalindrome(s: string): number {
    let m = new Map<string, number>();

    // This will still keep track of odds 3 and greater, treat as a pair with a remainder.
    for(let i = 0; i < s.length; i++) {
        if(m.has(s[i]))
            m.delete(s[i]);
        else
            m.set(s[i], 1);
    }

    let remainingOdds = m.size;

    // If no odds, whole string is a palindrome
    return remainingOdds ? s.length - m.size + 1 : s.length;
};

expect(longestPalindrome("abccccdd"), 7);