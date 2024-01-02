const inputs = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(x => x.split(' ').map(Number));
const [N, M] = inputs.shift();

const An = Array.from({length: N}, () => Array.from({length: M}));
const MAX_V = Number.MAX_SAFE_INTEGER;

const case1 = (i, j) => {
    for (const dx of [-1, 0, 1]) {
        const newX = j + dx;
        if (newX >= 0 && newX < M) {
            if (An[i][j] == null) An[i][j] = {};
            An[i][j][dx] = An[i - 1][newX] + inputs[i][j];
        }
    }
};

const case2 = (i, j) => {
    for (const dx of [-1, 0, 1]) {
        const newX = j + dx;
        if (newX >= 0 && newX < M) {
            if (An[i][j] == null) An[i][j] = {};

            let min = MAX_V;
            for (const [k, v] of Object.entries(An[i - 1][newX])) {
                if (+k === dx) continue;
                min = Math.min(min, v);
            }

            An[i][j][dx] = min + inputs[i][j];
        }
    }
};

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (i === 0) {
            An[i][j] = inputs[i][j];
        } else if (i === 1) {
            case1(i, j);
        } else {
            case2(i, j);
        }
    }
}

let answer = MAX_V;
for (let i = 0; i < M; i++) {
    answer = Math.min(answer, ...Object.values(An[N - 1][i]));
}

console.log(answer);
