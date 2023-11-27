const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +inputs.shift();
const arr = inputs.shift().trim().split(' ').map(Number);
const A = Array.from({length: N});
A[0] = arr[0];

for (let i = 1; i < N; i++) {
    A[i] = Math.max(arr[i], A[i - 1] + arr[i]);
}

console.log(Math.max(...A));
