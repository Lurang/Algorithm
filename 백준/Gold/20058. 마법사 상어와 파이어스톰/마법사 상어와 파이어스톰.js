let inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x => x.split(' ').map(Number));
const [n, Q] = inputs.shift();
const storm = inputs.pop();
const N = 1 << n;
const checked = Array.from({length: N}, () => Array.from({length: N}).fill(0));
let temp = Array.from({length: N}, () => Array.from({length: N}));
let count = 0;
let sum = 0;

const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

const doStrom = () => {
    for (let x = 0; x < N; x++) {
        for (let y = 0; y < N; y++) {
            let count = 0;
            for (let i = 0; i < 4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];

                if (nx >= 0 && nx < N && ny >= 0 && ny < N && temp[nx][ny] > 0) {
                    count++;
                }
            }
            inputs[x][y] = temp[x][y] - (count < 3 ? 1 : 0);
        }
    }
};

for (let i = 0; i < Q; i++) {
    const L = 1 << storm[i];

    for (let j = 0; j < N; j += L) {
        for (let k = 0; k < N; k += L) {
            for (let x = 0; x < L; x++) {
                for (let y = 0; y < L; y++) {
                    temp[j + y][k + L - 1 - x] = inputs[x + j][y + k];
                }
            }
        }
    }

    doStrom();
}

for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
        if (inputs[r][c] > 0 && checked[r][c] === 0) {
            checked[r][c] = 1;
            const queue = [[r, c]];
            let area = 1;
            while (queue.length > 0) {
                const [x, y] = queue.shift();

                sum += inputs[x][y];
                for (let i = 0; i < 4; i++) {
                    const nx = x + dx[i];
                    const ny = y + dy[i];

                    if (nx >= 0 && nx < N && ny >= 0 && ny < N && inputs[nx][ny] > 0 && checked[nx][ny] === 0) {
                        checked[nx][ny] = 1;
                        area++;
                        queue.push([nx, ny]);
                    }
                }
            }

            count = Math.max(count, area);
        }
    }
}
console.log([sum, count].join('\n'));
