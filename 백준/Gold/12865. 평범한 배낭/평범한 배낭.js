let inputs = require('fs').readFileSync('/dev/stdin').toString().split('\n').map((x) => x.trim().split(' ').map(Number));
const [N, K] = inputs[0];

const dp = Array.from({length: N + 1}, () => Array.from({length: K + 1}).fill(0));

for (let i = 1; i <= K; i++) {
    for (let j = 1; j <= N; j++) {
        if (inputs[j][0] > i) {
            dp[j][i] = dp[j - 1][i];
        } else {
            dp[j][i] = Math.max(dp[j - 1][i - inputs[j][0]] + inputs[j][1], dp[j - 1][i]);
        }
    }
}
console.log(dp[N][K]);
