const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const length = +inputs.shift();
const gwalHo = inputs.shift();

let counter = 0;
let day = 0;

for (let i = 0; i < length; i++) {
    counter = gwalHo[i] === '('
        ? counter + 1
        : counter - 1

    day = Math.max(day, Math.abs(counter));
}

console.log(counter === 0 ? day : -1);
