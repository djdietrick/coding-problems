export function expect(actual: any, expected: any) {
    if(actual != expected)
        console.log(`Incorrect! Expected ${expected}, got ${actual}`);
    else
        console.log("Correct!");
}