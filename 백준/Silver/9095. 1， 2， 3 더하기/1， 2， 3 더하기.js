const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +inputs.shift();

const an = [];
an[1] = 1;
an[2] = 2;
an[3] = 4;

const max = Math.max(...inputs);

for (let i = 4; i < max + 1; i++) {
    an[i] = an[i - 1] + an[i - 2] + an[i - 3];
}

const answer = []
for (let i = 0; i < N; i++) {
    answer.push(an[inputs[i].trim()]);
}

console.log(answer.join('\n'));
