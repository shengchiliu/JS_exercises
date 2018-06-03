"use strict"

let math = require("mathjs");

let x, x_pad;

function zero_pad(X, pad) {
    let X_pad = math.zeros([4, pad, pad, 2]);

    return X_pad
}

x = math.random([4, 3, 3, 2]);
x_pad = zero_pad(x , 2);


let a, b, c;

a = [];
// f = math.subset(e, math.index(2, math.range(0,3,1)), [1, 2, 3]);
b = math.subset(a, math.index(2, [0,1,2]), [1, 2, 3]);


// --------------------------
a = math.random([2,3,3,2])
b = []
b[0] = math.subset(a[0], math.index([0,1,2], 0, [0,1]), [[[0,0]],[[0,0]],[[0,0]]]);

// --------------------------
a = math.random([2,3,3,2])
b = math.random([2,5,5,2])
c = math.subset(b, math.index([0,1], [1,2,3], [0,1,2], [0,1]), a);

// --------------------------
a = math.ones([3,3])
math.size(a)
