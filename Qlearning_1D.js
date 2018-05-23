"use strict"

// Q[s, a] = Q[s, a] + alpha * (r + gamma * (max(Q[s', a']) - Q[s, a]))

let Q, R;
const stage = 60;
const action = 2;
const alpha = 0.1;
const gamma = 0.9;
const epsilon = 0.9;
const eposide = 1500;
let s = 0, a = 0, r = 0;
let q_target, q_predict;
let terminal;
let i;
let indices, idx;

// Create Q Matrix
(Q = []).length = stage;
for (i = 0; i < stage; i++) {
    Q[i] = [];
    Q[i].length = action;
    Q[i].fill(0);
}

// Create R Matrix
(R = []).length = stage;
R.fill(0);
R[R.length-1] = 1;

// console.log(Q)
// console.log(R)


// Functions
function allZeros(element) {
    return element == 0;
}


for (i = 0; i < eposide; i++) {

    s = 0;      // s = Math.floor(Math.random() * (stage-1));
    r = 0;
    a = 1;
    terminal = false;

    while (terminal == false) {

        // Q-Learning
        if (s < stage - 1) {
            indices = Q[s+1].map((e, i) => e === Math.max(...Q[s+1]) ? i : '').filter(String);
            idx = indices[Math.floor(Math.random() * indices.length)]; 
            q_target = r + gamma * Q[s+1][idx];     // q_target = r + gamma * Q[s+1].indexOf(Math.max(...Q[s+1]));
        } else {
            indices = Q[0].map((e, i) => e === Math.max(...Q[0]) ? i : '').filter(String);
            idx = indices[Math.floor(Math.random() * indices.length)]; 
            q_target = r + gamma * Q[0][idx];       // q_target = r + gamma * Q[0].indexOf(Math.max(...Q[0]));
            // q_target = r;
            terminal = true;
        }
        q_predict = Q[s][a];
        Q[s][a] += alpha * (q_target - q_predict);


        // Action
        if (Math.random() > epsilon || Q[s].every(allZeros) == true) {
            a = Math.floor(Math.random() * action);
        } else {
            // a = Q[s].indexOf(Math.max(...Q[s]));
            indices = Q[s].map((e, i) => e === Math.max(...Q[s]) ? i : '').filter(String);
            a = indices[Math.floor(Math.random() * indices.length)]; 
        }


        // Stage
        switch (a) {
            case 0:
                if (s == 0) {
                    s = 0;
                } else {
                    s -= 1;
                }
                r = 0
                break;
            case 1:
                if (s == stage-2) {
                    s += 1;
                    r = 1;
                } else {
                    s += 1;
                    r = 0;
                }
                break;
        }
    }
}

console.log(Q)

for (i = 0; i < stage; i++) {
    console.log(Q[i].indexOf(Math.max(...Q[i])))
}