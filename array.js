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
R[R.length-1] = 1;	//R.pop();


// Find Index of Maximum
arr = [1,2,3,4,5];
arr.indexOf(Math.max(...arr))


// All Zeros
let Q = [0,0,0];

function allZeros(element) {
    return element == 0;
}

console.log(Q.every(allZeros))


// Random Choose
Math.floor(Math.random() * arr.length)


//

