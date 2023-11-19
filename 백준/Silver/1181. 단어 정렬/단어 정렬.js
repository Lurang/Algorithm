const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
inputs.shift();

const answer = Array.from(new Set(inputs)).sort((a, b) => {
    if (a.length === b.length) {
        return a > b ? 1 : -1
    } else {
        return a.length - b.length;
    }
});

console.log(answer.join('\n'));