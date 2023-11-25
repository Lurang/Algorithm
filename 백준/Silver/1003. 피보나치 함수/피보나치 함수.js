const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = inputs.shift();

const answer = [];
for (let i = 0; i < N; i++) {
    const cur = +inputs[i].trim();

    const f = [[1, 0], [0, 1]]
    for (let j = 2; j < cur + 1; j++) {
        f[j] = [
            f[j - 1][0] + f[j - 2][0],
            f[j - 1][1] + f[j - 2][1],
        ];
    }

    answer.push(f[cur].join(' '));
}
console.log(answer.join('\n'));
