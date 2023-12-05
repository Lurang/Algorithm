const [N, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const queue = [[N, 0, '' + N]];
const checked = Array.from({length: 200001}).fill(false);
checked[N] = true;

while (queue.length) {
    const [x, d, r] = queue.shift();
    if (x === K) {
        console.log([d, r.split(',').join(' ')].join('\n'));
        break;
    }

    for (const a of [x - 1, x + 1, x * 2]) {
        if (a >= 0 && a < 100001 && !checked[a]) {
            queue.push([a, d + 1, r + ',' + a]);
            checked[a] = true;
        }
    }
}
