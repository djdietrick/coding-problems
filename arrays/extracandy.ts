/* #1431 on Leetcode */

import {expect} from '../utils/utils.ts';

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let max = 0;
    for(let kid of candies) {
        if(kid > max) max = kid;
    }

    let arr = [];
    for(let kid of candies) {
        arr.push(kid + extraCandies >= max);
    }
    return arr;
};

expect(kidsWithCandies([2,3,5,1,3], 3), [[true,true,true,false,true]])