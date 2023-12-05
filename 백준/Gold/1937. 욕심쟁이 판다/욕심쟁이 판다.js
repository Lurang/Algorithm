const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x => x.split(' ').map(Number));
const N = inputs.shift()[0];
const an = Array.from({length: N}, () => Array.from({length: N}));
let answer = 0;

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const dfs = (x, y) => {
    if (an[x][y] != null) {
        return an[x][y];
    }
    an[x][y] = 1;

    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx >= 0 && nx < N && ny >= 0 && ny < N && inputs[x][y] < inputs[nx][ny]) {
            an[x][y] = Math.max(an[x][y], dfs(nx, ny) + 1);
        }
    }

    answer = Math.max(answer, an[x][y]);

    return an[x][y];
};

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        dfs(i, j);
    }
}

console.log(answer);
