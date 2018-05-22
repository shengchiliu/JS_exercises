"use strict";

// Zero Array
// Method 1
let arr
(arr = []).length = 3;
arr.fill(0);
console.log(arr)

// Method 2
new Array(3).fill(0);
console.log(arr)


// Clone Array
R = Q.slice(0);

// Last Element of Array
R[R.length-1] = 1;

