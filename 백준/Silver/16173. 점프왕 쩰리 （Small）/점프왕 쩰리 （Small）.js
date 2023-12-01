let [N, ...inputs] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
inputs = inputs.map(x => x.split(' ').map(Number))
const checked = Array.from({length: +N}, () => Array.from({length: +N}).fill(0));

const q = [[0, 0]];
let answer = 'Hing';

while (q.length > 0) {
    const [x, y] = q.shift();

    if (checked[x][y]) continue;
    checked[x][y] = 1;

    const jump = inputs[x][y];
    if (jump === -1) {
        answer = 'HaruHaru';
        break;
    }

    if (x + jump < N) {
        q.push([x + jump, y]);
    }
    if (y + jump < N) {
        q.push([x, y + jump]);
    }
}

console.log(answer);
