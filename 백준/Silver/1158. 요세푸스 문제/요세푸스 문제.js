const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const length = inputs[0];
const gap = inputs[1];

const answer = [];
const arr = Array.from({length}, (_, index) => index + 1);
let targetIndex = 0;

while (arr.length > 0) {
    targetIndex = (targetIndex + gap - 1) % arr.length;
    answer.push(arr[targetIndex]);
    arr.splice(targetIndex, 1);
}

console.log(`<${answer.join(', ')}>`);
