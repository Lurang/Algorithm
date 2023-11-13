const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

const stack = [];
for (let i = 0; i < inputs.length; i++) {
    stack.push(inputs[i]);
    if (stack.length > 3
        && stack[stack.length - 1] === 'P'
        && stack[stack.length - 2] === 'A'
        && stack[stack.length - 3] === 'P'
        && stack[stack.length - 4] === 'P'
    ) {
        적어도한번의ppap = true;
        stack.splice(-3);
    }
}

console.log(
    stack.length === 1 && stack[0] === 'P'
        ? 'PPAP'
        : 'NP'
);
