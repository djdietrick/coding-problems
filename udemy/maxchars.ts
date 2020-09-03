import {
    assertEquals
  } from "https://deno.land/std@0.67.0/testing/asserts.ts";

// Given a string, returns the character most used

export function maxChars(str: string) : string {
    let chars: any = {};
    let max = 0;
    let maxChar = '';

    for(let char of str) {
        chars[char] = chars[char] + 1 || 1;
        if(chars[char] > max) {
            max = chars[char];
            maxChar = char;
        }
    }

    return maxChar;
}

Deno.test('Max char', () => {
    assertEquals(maxChars('abcccccccd'), 'c');
    assertEquals(maxChars('abc111111123'), '1');
})