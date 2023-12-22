const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const n = inputs[0];
const An = [];
An[0] = 1
An[1] = 1;
An[2] = 2;
An[3] = 3;
for (let i = 3; i < n; i++) {
    An[i] = An[i - 1] + An[i - 2];
}

const answer = [];
for (let i = 1; i < inputs[1]; i++) {
    for (let j = Math.floor(An[n - 3] * i / An[n - 2]); j < inputs[1]; j++)  {
        if (An[n - 2] * j + An[n - 3] * i === inputs[1]) {
            answer[0] = i;
            answer[1] = j;
            break;
        }
    }

    if (answer.length) break;
}

console.log(answer.join('\n'));
