import {
    assertEquals
  } from "https://deno.land/std@0.67.0/testing/asserts.ts";

export function reverseIntString(int: number) : number {
    const sign = Math.sign(int);
    int = Math.abs(int);

    return parseInt(int.toString().split('').reduce((prev, char) => char + prev, '')) * sign;
}

export function reverseIntMod(int: number) : number {
    const sign = Math.sign(int);
    int = Math.abs(int);

    let rev: number = 0;

    while(int > 0) {
        rev *= 10;
        rev += int % 10;
        int = Math.floor(int / 10);
    }

    return rev * sign;
}

Deno.test("Reverse int string", () => {
    assertEquals(reverseIntString(15), 51);
    assertEquals(reverseIntString(981), 189);
    assertEquals(reverseIntString(500), 5);
    assertEquals(reverseIntString(-15), -51);
    assertEquals(reverseIntString(-90), -9);
});

Deno.test("Reverse int mod", () => {
    assertEquals(reverseIntMod(15), 51);
    assertEquals(reverseIntMod(981), 189);
    assertEquals(reverseIntMod(500), 5);
    assertEquals(reverseIntMod(-15), -51);
    assertEquals(reverseIntMod(-90), -9);
});