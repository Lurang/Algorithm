const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

const A = [];
const B = [];
const C = [];
let count = 0;

inputs.forEach((item, index) =>
    item === 'A' && A.push(index)
    || item === 'B' && B.push(index)
    || item === 'C' && C.push(index)
);

const check = (before, after) => {
    const left = [];
    for (const beforeValue of before) {
        const existIndex = after.findIndex(afterValue => beforeValue < afterValue);
        if (existIndex !== -1) {
            after.splice(existIndex, 1);
            count++;
        } else {
            left.push(beforeValue);
        }
    }

    return left;
}

const leftB = check(B, C);
check(A, leftB);
console.log(count);
