import {
    assertEquals
  } from "https://deno.land/std@0.67.0/testing/asserts.ts";

export function capitalize(str: string) : string {
    let words = [];
    for(let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }
    return words.join(' ');
}

export function capitalize2(str: string) : string {
    let result: string = str[0].toUpperCase();
    for(let i = 1; i < str.length; i++) {
        if(i > 0 && str[i-1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
}

Deno.test('Capitalize', () => {
    assertEquals(capitalize("hello there"), "Hello There");
    assertEquals(capitalize2("hello there"), "Hello There");
});