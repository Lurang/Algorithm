const readFrom = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const inputs = require('fs').readFileSync(readFrom).toString().trim().split('\n');
const studentCount = +inputs.shift();

const student = inputs.shift().split(' ').map(Number);

let current = 1;
const stack = [];
for (let i = 0; i < studentCount; i++) {
    const currStudent = student[i];
    if (currStudent !== current) {
        while (stack.length) {
            const top = stack[stack.length - 1];
            if (top === current) {
                current++;
                stack.pop();
            } else {
                break;
            }
        }
    }

    if (currStudent !== current) {
        stack.push(currStudent);
    } else {
        current++;
    }
}

while (stack.length) {
    if (stack.pop() !== current) {
        console.log('Sad');
        return 0;
    }

    current++;
}

console.log('Nice');
