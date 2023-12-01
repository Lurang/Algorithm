const readFrom = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const inputs = require('fs').readFileSync(readFrom).toString().trim().split('\n');
const [height, width] = inputs.shift().split(' ').map(Number);

const checked = Array.from({length: height}, () => Array.from({length: width}).fill(false));
const answer = [0, 0];

const search = (i, j) => {
    const s = [[i, j]];
    let k = 0;
    let v = 0;

    while(s.length > 0) {
        const [x, y] = s.pop();
        if (checked[x][y]) continue;
        checked[x][y] = true;

        if (inputs[x][y] === 'k') k++;
        if (inputs[x][y] === 'v') v++;

        if (x > 0          && inputs[x - 1][y] !== '#' && !checked[x - 1][y]) s.push([x - 1, y])
        if (x < height - 1 && inputs[x + 1][y] !== '#' && !checked[x + 1][y]) s.push([x + 1, y])
        if (y > 0          && inputs[x][y - 1] !== '#' && !checked[x][y - 1]) s.push([x, y - 1])
        if (y < width - 1  && inputs[x][y + 1] !== '#' && !checked[x][y + 1]) s.push([x, y + 1])
    }

    if (k > v) {
        answer[0] += k;
    } else {
        answer[1] += v;
    }
};

for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
        if (checked[i][j]) continue;
        if (inputs[i][j] === 'k' || inputs[i][j] === 'v') {
            search(i, j);
        }
    }
}

console.log(answer.join(' '));
