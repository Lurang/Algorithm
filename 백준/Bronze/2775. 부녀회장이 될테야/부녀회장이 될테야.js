const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = +inputs.shift();

const answer = [];
for (let i = 0; i < T; i++) {
    const k = +inputs.shift();
    const n = +inputs.shift();

    const apart = Array.from({length: k + 1}, () => Array.from({length: n + 1}).fill(0));
    for (let i = 1; i <= n; i++) {
        apart[0][i] = i;
    }

    for (let i = 1; i <= k; i++) {
        for (let j = 1; j <= n; j++) {
            apart[i][j] = apart[i - 1][j] + apart[i][j-1];
        }
    }

    answer.push(apart[k][n]);
}
console.log(answer.join('\n'));
