const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let str = inputs.shift();
const bomb = inputs.shift();
const stack = [];

for (let i = 0; i < str.length; i ++) {
    stack.push(str[i]);

    if (str[i] === bomb[bomb.length - 1] && stack.slice(-bomb.length).join('') === bomb) {
        stack.splice(-bomb.length);
    }
}

console.log(stack.join('') || 'FRULA');
