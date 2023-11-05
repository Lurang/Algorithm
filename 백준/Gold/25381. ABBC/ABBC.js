const inputs = require('fs').readFileSync('/dev/stdin').toString().trim();

let s = inputs;
let count = 0;

const replaceCharacter = (string, index, replacement) =>
    string.slice(0, index) + replacement + string.slice(index + replacement.length);


const bIndexes = [];
for (let i = 0; i < s.length; i++) {
    if (s[i] === 'B') {
        bIndexes.push(i);
    } else if (s[i] === 'C') {
        if (bIndexes[0] < i) {
            s = replaceCharacter(s, bIndexes.shift(), '_');
            count++;
        }
    }
}

const aIndexes = [];
for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') {
        aIndexes.push(i);
    } else if (s[i] === 'B') {
        if (aIndexes[0] < i) {
            aIndexes.shift();
            count++;
        }
    }
}

console.log(count);
