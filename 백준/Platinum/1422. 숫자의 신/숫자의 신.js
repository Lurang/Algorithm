let inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [K, N] = inputs.shift().split(' ').map(Number);

// (a + b) string concat
inputs = inputs.map(x => x.trim()).sort((a, b) => +(a + b) < +(b + a) ? 1 : -1);

const max = Math.max(...inputs);
const index = inputs.indexOf(max.toString());
inputs[index] = inputs[index].repeat(1 + N - inputs.length);

console.log(inputs.join(''));
