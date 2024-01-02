const inputs = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(x => x.split(' ').map(Number));
const N = inputs.shift()[0];
const dice = inputs[0];

const An = Array.from({length: N}).fill(1);

for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
        if (dice[j] >= dice[i]) continue;
        An[i] = Math.max(An[i], An[j] + 1);
    }
}

console.log(Math.max(...An));
