import {
    assertEquals
  } from "https://deno.land/std@0.67.0/testing/asserts.ts";

export function chunk(arr: Array<any>, n: number) : Array<Array<any>> {
    let ret: Array<Array<any>> = new Array<Array<any>>();
    ret[0] = new Array<any>();
    for(let a of arr) {
        if(ret[ret.length - 1].length === n) {
            ret[ret.length] = new Array<any>();
        }
        ret[ret.length - 1].push(a);
    }
    return ret;
}

export function chunkSlice(arr: Array<any>, n: number) : Array<Array<any>> {
    let chunked: Array<Array<any>> = new Array<Array<any>>();

    for(let i = 0; i < arr.length; i += n) {
        chunked.push(arr.slice(i, i + n));
    }
    return chunked;
}

Deno.test("Chunking", () => {
    assertEquals(chunk([1,2,3,4], 2), [[1,2],[3,4]]);
    assertEquals(chunk([1,2,3,4,5], 2), [[1,2],[3,4],[5]]);
    assertEquals(chunk([1,2,3,4,5,6,7,8], 5), [[1,2,3,4,5],[6,7,8]]);
    assertEquals(chunk([1,2,3,4,5,6,7,8], 3), [[1,2,3],[4,5,6],[7,8]]);
    assertEquals(chunk([1,2,3,4,5], 10), [[1,2,3,4,5]]);
})

Deno.test("Chunking slicing", () => {
    assertEquals(chunkSlice([1,2,3,4], 2), [[1,2],[3,4]]);
    assertEquals(chunkSlice([1,2,3,4,5], 2), [[1,2],[3,4],[5]]);
    assertEquals(chunkSlice([1,2,3,4,5,6,7,8], 5), [[1,2,3,4,5],[6,7,8]]);
    assertEquals(chunkSlice([1,2,3,4,5,6,7,8], 3), [[1,2,3],[4,5,6],[7,8]]);
    assertEquals(chunkSlice([1,2,3,4,5], 10), [[1,2,3,4,5]]);
})