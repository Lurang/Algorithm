const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const length = +inputs.shift();

const stack = [];
let score = 0;

for (let i = 0; i < length; i++) {
    if (+inputs[i] !== 0) {
        const hw = inputs[i].split(' ').map(Number);
        stack.push(hw);
    }

    if (stack.length) {
        stack[stack.length - 1][2] = stack[stack.length - 1][2] - 1;
        if (stack[stack.length - 1][2] === 0) {
            score += stack[stack.length - 1][1];
            stack.pop();
        }
    }
}

console.log(score);
