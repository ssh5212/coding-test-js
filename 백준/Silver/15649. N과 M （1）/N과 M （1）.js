const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const firstLine = input[0].trim().split(' ');

const N = parseInt(firstLine[0]);
const M = parseInt(firstLine[1]);

const arr = [];
const sel = [];
const v = [];

for (let i = 0; i < N; i++) {
    arr[i] = i + 1;
    v[i] = false;
}

recursive(0);

function recursive(count) {
    if (count == M) {
        let answer = '';
        for (let i = 0; i < M; i++) {
            answer += sel[i] + ' ';
        }
        console.log(answer);
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        if (v[i] == true) continue;
        v[i] = true;
        sel[count] = arr[i];
        recursive(count + 1);
        v[i] = false;
        sel[count] = 0;
    }
}