import {expect} from '../utils/utils.ts';

/**
 * 268 on Leetcode
 * @param {number[]} nums
 * @return {number}
 * Given an array of numbers from 0 to n with one missing, find the missing number
 */
var missingNumber = function(nums: Array<Number>) {
    let max = nums.length;
    let myset: Set<Number> = new Set<Number>(Array(max + 1).keys());
    for(let i = 0; i < nums.length; i++) {
        myset.delete(nums[i]);
    }
    return myset.values().next().value;
};

expect(missingNumber([3,0,1]), 2);
expect(missingNumber([9,6,4,2,3,5,7,0,1]), 8);
