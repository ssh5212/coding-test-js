const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input[0];
const stair = [];
const best = [];

for (let i = 0; i < N; i++) {
    stair[i] = parseInt(input[i + 1].trim());
}
// console.log(stair);

best[0] = stair[0];
best[1] = best[0] + stair[1];
best[2] = Math.max(best[0] + stair[2], stair[1] + stair[2]);

for (let i = 3; i < N; i++) {
    best[i] = Math.max(best[i - 3] + stair[i - 1], best[i - 2]) + stair[i];
}

console.log(best[N - 1]);