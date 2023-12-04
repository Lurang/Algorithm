let inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x => x.split(' ').map(Number));
const [n, Q] = inputs.shift();
const storm = inputs.pop();
const N = 1 << n;
const checked = Array.from({length: N}, () => Array.from({length: N}).fill(0));
let count = 0;
let sum = 0;

const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

const doStrom = () => {
    const arr = [];
    for (let x = 0; x < N; x++) {
        for (let y = 0; y < N; y++) {
            if (inputs[x][y] > 0) {
                let count = 0;
                for (let i = 0; i < 4; i++) {
                    const nx = x + dx[i];
                    const ny = y + dy[i];

                    if (nx >= 0 && nx < N && ny >= 0 && ny < N && inputs[nx][ny] > 0) {
                        count++;
                    }
                }

                if (count < 3) {
                    arr.push([x, y]);
                }
            }
        }
    }

    for (const [x, y] of arr) {
        inputs[x][y] = inputs[x][y] - 1;
    }
};

for (let i = 0; i < Q; i++) {
    const L = 1 << storm[i];

    for (let j = 0; j < N; j += L) {
        for (let k = 0; k < N; k += L) {
            const tmp = Array.from({length: L}, () => Array.from({length: L}).fill(0));
            for (let x = 0; x < L; x++) {
                for (let y = 0; y < L; y++) {
                    tmp[x][y] = inputs[x + j][y + k];
                }
            }

            for (let x = 0; x < L; x++) {
                for (let y = 0; y < L; y++) {
                    inputs[x + j][y + k] = tmp[L - 1 - y][x];
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
            const stack = [[r, c]];
            let area = 1;
            while (stack.length > 0) {
                const [x, y] = stack.pop();

                sum += inputs[x][y];
                for (let i = 0; i < 4; i++) {
                    const nx = x + dx[i];
                    const ny = y + dy[i];

                    if (nx >= 0 && nx < N && ny >= 0 && ny < N && inputs[nx][ny] > 0 && checked[nx][ny] === 0) {
                        checked[nx][ny] = 1;
                        area++;
                        stack.push([nx, ny]);
                    }
                }
            }

            count = Math.max(count, area);
        }
    }
}
console.log([sum, count].join('\n'));
