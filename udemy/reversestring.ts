import {
    assertEquals
  } from "https://deno.land/std@0.67.0/testing/asserts.ts";

// Built in functions
export function reverseBuiltIn(str: string) : string {
    return str
        .split('') // Builds array from string
        .reverse() // Reverses it
        .join(''); // Joins it back into a string
}

// More barebones
export function reverse(str: string) : string {
    let reversed = '';

    for(let char of str) {
        reversed = char + reversed;
    }

    return reversed;
}

// Fancy
export function reverseFancy(str: string) : string {
    return str.split('')
        .reduce((prev, char) => {return char + prev}, '');
}

Deno.test("Barebones reverse string", () => {
    assertEquals(reverse('hello'), 'olleh');
    assertEquals(reverse('apple'), 'elppa');
});

Deno.test("Fancy reverse string", () => {
    assertEquals(reverseFancy('hello'), 'olleh');
    assertEquals(reverseFancy('apple'), 'elppa');
})