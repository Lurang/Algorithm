const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const length = +inputs.shift();

const score = [];
const time = [];
let total = 0;

for (let i = 0; i < length; i++) {
    if (+inputs[i] !== 0) {
        const [_, s, t] = inputs[i].split(' ').map(Number);
        score.push(s);
        time.push(t);
    }

    if (time.length) {
        if (time[time.length - 1] === 1) {
            total += score.pop();
            time.pop();
        } else {
            time[time.length - 1] = time[time.length - 1] - 1;
        }
    }
}

console.log(total);
