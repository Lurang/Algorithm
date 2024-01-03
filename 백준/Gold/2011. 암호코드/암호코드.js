const inputs = require('fs').readFileSync('/dev/stdin').toString().trim();

const An = new Array(inputs.length).fill(0);

let status = true;

if (inputs[0] === '0') {
    status = false;
} else {
    An[0] = 1;
    for (let i = 1; i < inputs.length; i++) {
        if (Number(inputs[i - 1] + inputs[i]) === 0) {
            status = false;
            break;
        }

        if (Number(inputs[i - 1] + inputs[i]) >= 10 && Number(inputs[i - 1] + inputs[i]) <= 26) {
            An[i] = (An[i] + (An[i - 2] ?? 1)) % 1000000;
        }
        if (+inputs[i] > 0) {
            An[i] = (An[i] + An[i - 1]) % 1000000;
        }
    }
}

console.log(status ? An[inputs.length - 1] : 0);
