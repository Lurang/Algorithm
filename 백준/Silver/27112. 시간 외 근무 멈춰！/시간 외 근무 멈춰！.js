const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +inputs.shift();

const work = inputs.map(x => x.split(' ').map(Number)).sort((a, b) => a[0] - b[0]);

let day = 0;
let yageun = 0;

for (let i = 0; i < N; i++) {
    const w = work[i];
    let due = w[0] - Math.floor(w[0] / 7) * 2;
    if (w[0] % 7 === 6) {
        due--;
    }

    day += w[1];

    if (day > due) {
        yageun += day - due;
        day = due;
    }

    if (yageun > w[0]) {
        yageun = -1;
        break;
    }
}

console.log(yageun);
