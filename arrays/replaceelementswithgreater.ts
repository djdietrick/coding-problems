/* #1299 on Leetcode
 * Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1. */

import {expect} from '../utils/utils.ts';

function replaceElements(arr: number[]): number[] {
    let max = 0;
    for(let i = arr.length - 1; i >= 0; i--) {
        if(arr[i] > max) {
            let temp = arr[i];
            arr[i] = max;
            max = temp;
        } else {
            arr[i] = max;
        }

        if(i == arr.length - 1) arr[i] = -1;
    }
    return arr;
};

expect(replaceElements([17,18,5,4,6,1]), [18,6,6,6,1,-1]);

