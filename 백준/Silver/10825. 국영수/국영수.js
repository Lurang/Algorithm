const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +inputs.shift();
const students = inputs.map(x => x.trim().split(' '));

students.sort((a, b) => {
    if (a[1] === b[1]) {
        if (a[2] === b[2]) {
            if (a[3] === b[3]) {
                return a[0] > b[0] ? 1 : -1
            } else {
                return b[3] - a[3];
            }
        } else {
            return a[2] - b[2];
        }
    } else {
        return b[1] - a[1];
    }
});

console.log(students.map(x => x[0]).join('\n'));