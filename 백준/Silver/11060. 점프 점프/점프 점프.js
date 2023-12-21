let inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +inputs.shift();
inputs = inputs[0].split(' ').map(Number);
const An = new Array(N + 1).fill(-1);

An[0] = 0;
for (let i = 0; i < N; i++) {
    if (An[i] === -1) continue;
    for (let j = 1; j <= inputs[i]; j++) {
        const arr = [An[i] + 1];
        if (i + j < N && An[i + j] !== -1) arr.push(An[i + j]);
        An[i + j] = Math.min(...arr);
    }
}

console.log(An[N - 1]);
