import {
    assertEquals
  } from "https://deno.land/std@0.67.0/testing/asserts.ts";

// Directions: Return true if the given string is a palindrome
// The reversed string should be equal to the normal string

function brutePalindrome(str: string) : boolean {
    return str === str.split('').reduce((prev, char) => char + prev, '');
}

function everyPalindrome(str: string) : boolean {
    // OK, but we only have to traverse the array to the halfway point
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    })
}

// Only need to go halfway
// Divide by 2, because if odd (would round down) we dont care about middle char
function halfPalindrom(str: string) : boolean {
    for(let i = 0; i < str.length / 2; i++) {
        if(str[i] !== str[str.length - i - 1])
            return false;
    }
    return true;
}

Deno.test('Brute palindrome', () => {
    assertEquals(brutePalindrome('abba'), true);
    assertEquals(brutePalindrome('abcdefg'), false);
});

Deno.test('Every palindrome', () => {
    assertEquals(everyPalindrome('abba'), true);
    assertEquals(everyPalindrome('abcdefg'), false);
});

Deno.test('Half palindrome', () => {
    assertEquals(halfPalindrom('abba'), true);
    assertEquals(halfPalindrom('abcba'), true);
    assertEquals(halfPalindrom('abccba'), true);
    assertEquals(halfPalindrom('abcdefg'), false);
});