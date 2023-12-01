const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x => x.split(' ').map(Number));
const N = inputs.shift()[0]
const checked = Array.from({length: +N}, () => Array.from({length: +N}).fill(0));

const s = [[0, 0]];
let answer = 'Hing';

while (s.length > 0) {
    const [x, y] = s.pop();

    if (checked[x][y] === 1) continue;
    checked[x][y] = 1;

    if (inputs[x][y] === -1) {
        answer = 'HaruHaru';
        break;
    }

    if (x + inputs[x][y] < N && checked[x + inputs[x][y]][y] === 0) {
        s.push([x + inputs[x][y], y]);
    }
    if (y + inputs[x][y] < N && checked[x][y + inputs[x][y]] === 0) {
        s.push([x, y + inputs[x][y]]);
    }
}

console.log(answer);
