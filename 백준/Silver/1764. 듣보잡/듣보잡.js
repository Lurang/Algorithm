const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = inputs.shift().split(' ').map(Number);

const people = inputs.splice(0, N).map(x => x.trim()).sort();
const people2 = inputs.map(x => x.trim()).sort();

let pointer = 0;
let i = 0;
const 듣보잡 = [];

while (i < N && pointer < M) {
    if (people[i] > people2[pointer]) {
        pointer++;
    } else if (people[i] === people2[pointer]) {
        듣보잡.push(people[i]);
        pointer++;
        i++;
    } else {
        i++;
    }
}

console.log([듣보잡.length, ...듣보잡].join('\n'));
