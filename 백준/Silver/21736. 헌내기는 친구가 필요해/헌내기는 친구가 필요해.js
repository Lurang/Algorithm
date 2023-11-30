const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = inputs.shift().trim().split(' ').map(Number);

const checked = Array.from({length: N}, (_) => Array.from({length: M}).fill(0));
let a = [];

for (let i = 0; i < inputs.length; i++) {
    const isI = inputs[i].indexOf('I');

    if (isI !== -1) {
        a.push([i, isI]);
        checked[i][isI] = 1;
        break;
    }
}

let count = 0;
while(a.length > 0) {
    const [x, y] = a.pop();

    if (x > 0 && checked[x - 1][y] === 0) {
        if (inputs[x - 1][y] !== 'X') {
            if (inputs[x - 1][y] === 'P') count++;
            a.push([x - 1, y]);
            checked[x - 1][y] = 1;
        }
    }
    if (x < N - 1 && checked[x + 1][y] === 0) {
        if (inputs[x + 1][y] !== 'X') {
            if (inputs[x + 1][y] === 'P') count++;
            a.push([x + 1, y]);
            checked[x + 1][y] = 1;
        }
    }
    if (y > 0 && checked[x][y - 1] === 0) {
        if (inputs[x][y - 1] !== 'X') {
            if (inputs[x][y - 1] === 'P') count++;
            a.push([x, y - 1]);
            checked[x][y - 1] = 1;
        }
    }
    if (y < M - 1 && checked[x][y + 1] === 0) {
        if (inputs[x][y + 1] !== 'X') {
            if (inputs[x][y + 1] === 'P') count++;
            a.push([x, y + 1]);
            checked[x][y + 1] = 1;
        }
    }

}

console.log(count === 0 ? 'TT' : count);
