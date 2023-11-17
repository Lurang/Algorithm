const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const key = inputs.shift().trim();
const sortedKey = key.split('').sort((a, b) => a > b ? 1 : -1)
const col = inputs[0].length / key.length;

const secrets = [];
const sortedSecrets = [];
let 평문 = '';

for (let i = 0; i < inputs[0].length / col; i++) {
    secrets.push(inputs[0].slice(i * col, (i + 1) * col));
}

for (let i = 0; i < key.length; i++) {
    const k = key[i];
    const index = sortedKey.findIndex(x => x === k);
    sortedKey[index] = '_';
    sortedSecrets.push(secrets[index]);
}

for (let i = 0; i < col; i++) {
    for (let j = 0; j < sortedSecrets.length; j++) {
        평문 += sortedSecrets[j][i];
    }
}

console.log(평문);
