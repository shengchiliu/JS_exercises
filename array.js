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


// Create 2D Array
(Q = []).length = stage;
for (i = 0; i < stage; i++) {
    Q[i] = [];
    Q[i].length = action;
    Q[i].fill(0);
}


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


// Find index of maximum
arr.indexOf(Math.max(...arr))


// Find indexes of all occurrences of elements
let indices = arr.reduce(function(a, e, i) {
    if (e === 2)
        a.push(i);
    return a;
}, []);

// Method 2
let indices = arr.map((e, i) => e === 2 ? i : '').filter(String)

// Method 3
let indices = arr.map((e, i) => e === Math.max(...arr) ? i : '').filter(String)

// Method 4
function zeros(dimensions) {
    var array = [];
    for (var i = 0; i < dimensions[0]; ++i) {
    	array.push(dimensions.length == 1 ? 0 : zeros(dimensions.slice(1)));
    }
    return array;
}
console.log(indices)

