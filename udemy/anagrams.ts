import {
    assertEquals
} from "https://deno.land/std@0.67.0/testing/asserts.ts";

// Returns true if the two strings given have the same characters with the same number of occurences
// Ignores whitespace, punctuation, and capitalization 

export function anagrams(a: string, b: string) : boolean {
    

    let mapString = (str: string) => {
        let m: any = {};
        for(let char of str.replace(/[^\w]/g, '').toLowerCase()) {
            m[char] = m[char] + 1 || 1;
        }
        return m;
    }

    let aMap: any = mapString(a);
    let bMap: any = mapString(b);
    if(Object.keys(aMap).length !== Object.keys(bMap).length)
        return false;

    for(let char in aMap) {
        if(aMap[char] !== bMap[char])
            return false;
    }

    return true;
}

export function anagramsSort(a: string, b: string) : boolean {
    let sortString = (str: string) : string => {
        return str.replace(/[^\w]/g, '').toLowerCase()
            .split('').sort().join('');
    }

    return sortString(a) === sortString(b);
}

Deno.test("Anagrams", () => {
    assertEquals(anagrams('rail safety', 'fairy tales'), true);
    assertEquals(anagrams('RAIL! SAFETY!', 'fairy tales'), true);
    assertEquals(anagrams('Hi there', 'bye bye'), false);
})

Deno.test("Anagrams Sort", () => {
    assertEquals(anagramsSort('rail safety', 'fairy tales'), true);
    assertEquals(anagramsSort('RAIL! SAFETY!', 'fairy tales'), true);
    assertEquals(anagramsSort('Hi there', 'bye bye'), false);
})