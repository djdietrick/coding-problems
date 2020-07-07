/* #1078 on Leetcode
 * Given words first and second, consider occurrences in some text of the form 
 * "first second third", where second comes immediately after first, and \
 * third comes immediately after second.

For each such occurrence, add "third" to the answer, and return the answer. */

function findOcurrences(text: string, first: string, second: string): string[] {
    let arr: Array<string> = text.split(' ');
    let result: Array<string> = new Array();
    for(let i = 0; i < arr.length - 2; i++) {
        // If we have at least 2 more words, then we could
        if(arr[i] === first && arr[i+1] === second) {
            result.push(arr[i + 2]);
        }
    }
    return result;
};