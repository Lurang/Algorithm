const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x => x.trim());
const An = Array.from({length: inputs[0].length + 1}, () => Array.from({length: inputs[1].length + 1}).fill(0));

for (let i = 1; i < inputs[0].length + 1; i++) {
    for (let j = 1; j < inputs[1].length + 1; j++) {
        if (inputs[0][i - 1] === inputs[1][j - 1]) {
            An[i][j] = An[i - 1][j - 1] + 1;
        } else {
            An[i][j] = Math.max(An[i - 1][j], An[i][j - 1]);
        }
    }
}

console.log(An[inputs[0].length][inputs[1].length]);
