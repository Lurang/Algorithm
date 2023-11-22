const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +inputs.shift();

const flowers = inputs.map(x => {
    const f = x.trim().split(' ');
    return [f[0] * 100 + +f[1], f[2] * 100 + +f[3]];
});

let start = 301;
let count = 0;

while (start < 1201) {
    let best = null;
    for (let i = 0; i < flowers.length; i++) {
        const [s, d] = flowers[i];
        if (start >= s) {
            if (best == null || best < d) {
                best = d;
                flowers.splice(i, 1);
                i--;
            }
        }
    }

    if (best == null) {
        count = 0;
        break;
    } else {
        start = best;
        count++;
    }
}

console.log(count);
