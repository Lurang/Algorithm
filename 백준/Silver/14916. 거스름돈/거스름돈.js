const inputs = +require('fs').readFileSync('/dev/stdin').toString().trim();

const An = new Array(inputs + 1).fill(-1);

An[2] = 1;
An[4] = 2;
An[5] = 1;

for (let i = 6; i <= inputs; i++) {
    const arr = [];

    if (An[i - 5] !== -1) arr.push(An[i - 5]);
    if (An[i - 2] !== -1) arr.push(An[i - 2]);

    An[i] = Math.min(...arr) + 1;
}

console.log(An[inputs]);
