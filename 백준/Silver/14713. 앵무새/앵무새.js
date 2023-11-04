const solution = (lines, input) => {
    const sentence = input[lines];
    const parrots = input.slice();
    parrots.length = lines;

    for (const item of sentence) {
        const exist = parrots.find(x => x[0] === item);
        if (exist) {
            exist.shift();
            continue;
        }
        console.log('Impossible');
        return;
    }

    if (parrots.flat().length > 0) {
        console.log('Impossible');
        return;
    }

    console.log('Possible');
    return;
};

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const lines = input[0];
input.shift();
const list = input.map(x => x.split(' '));
solution(lines, list);
