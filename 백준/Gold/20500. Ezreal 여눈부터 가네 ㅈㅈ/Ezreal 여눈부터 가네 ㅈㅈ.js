const inputs = +require('fs').readFileSync('/dev/stdin').toString().trim();

const An = Array.from({length: 1516}, () => Array.from({length: 3}));
An[1][0] = 0;
An[2][0] = 1;
An[2][1] = 1;
An[2][2] = 0;

for (let i = 3; i < inputs + 1; i++) {
    An[i][0] = (An[i - 1][1] + An[i - 1][2]) % 1000000007;
    An[i][1] = (An[i - 1][0] + An[i - 1][2]) % 1000000007;
    An[i][2] = (An[i - 1][0] + An[i - 1][1]) % 1000000007;
}

console.log(An[inputs][0]);
